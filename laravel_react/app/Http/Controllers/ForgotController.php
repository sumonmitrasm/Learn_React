<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use Mail;
use App\Mail\ForgotMail;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
class ForgotController extends Controller
{
    public function forgotPassword(Request $request){
       $email=$request->email;
       if(User::where('email',$email)->doesntExist()){
        return response([
            'message'=>'Email Invalid'
        ],404);
       }
       $token=rand(10,100000);
       DB::table('password_reset_tokens')->insert([
        'email'=>$email,
        'token'=>$token,
       ]);
       Mail::to($email)->send(new ForgotMail($token));
       return response([
            'message'=>'Reset password mail send on your email'
       ],200);
    }
    public function resetpassword(Request $request){
        $email=$request->email;
        $token=$request->token;
        $password=$request->password;

        $emailcheck = DB::table('password_reset_tokens')->where('email',$email)->first();
        $tokencheck = DB::table('password_reset_tokens')->where('token',$token)->first();
        if(!$emailcheck){
            return response([
                'message'=>"Email Not Found"
            ],401);
        }
        if(!$tokencheck){
            return response([
                'message'=>"Invalid Pincode"
            ],401);
        }
        DB::table('users')->where('email',$email)->update(['password'=>$password]);
        DB::table('password_reset_tokens')->where('email',$email)->delete();
        return response([
            'message'=>'Password Change Successfully'
        ],200);

    }
}
