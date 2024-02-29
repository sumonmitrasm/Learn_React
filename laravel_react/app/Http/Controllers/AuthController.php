<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Str;
use App\Models\User;
use DB;
use Laravel\Passport\HasApiTokens;

use Illuminate\Support\Facades\Hash;
use Validator;
class AuthController extends Controller
{
    public function login(Request $request){
        // if(Auth::attempt($request->only('email','password'))){
        //     $user=Auth::user();
        //     $token = $user->createToken('email')->accessToken;
        //     return response([
        //         'message'=>"Successfully",
        //         'token'=>$token,
        //         'user'=>$user
        //     ],200);
        // }
        // return response([
        //     'message' =>'InvalidEmail or Password'
        // ],401);

        if($request->isMethod('post')){
            $data = $request->input();
            //echo"<pre>";print_r($data);die;
            $rules = [
                "email"=> "required|email|exists:users",
                "password"=> "required"
             ];
            $customMessages = [
            'email.required' => 'Email is required',
            'email.email'=>'valid email is required',
            'email.unique'=>'Email does not exist in database',
            'password.required' => 'pass word required',
            ];
    
            $validator = Validator::make($data,$rules,$customMessages);
            if ($validator->fails()) {
                return response()->json($validator->errors(),422);
            }
            $userDetails = User::where('email',$data['email'])->first();
            if(password_verify($data['password'], $userDetails->password)){
                $apiToken = Str::random(60);
                User::where('email',$data['email'])->update(['access_token'=>$apiToken]);
                return response()->json(['status'=>true,'message'=>'login successfully!','token'=>$apiToken],201);
            }else{
                return response()->json(["status"=>false,'message'=>'Password or not match!'],422);
            }
        }
    }
    public function register(Request $request) {
        if($request->isMethod('post')){
        $data = $request->input();
        //echo"<pre>";print_r($data);die;
        $rules = [
            "name"=> "required",
            "email"=> "required|email|unique:users",
            "password"=> "required"
         ];
        $customMessages = [
        'email.required' => 'Email is required',
        'email.email'=>'valid email is required',
        'email.unique'=>'Email Already exist in database',
        'password.required' => 'pass word required',
        ];

        $validator = Validator::make($data,$rules,$customMessages);
        if ($validator->fails()) {
            return response()->json($validator->errors(),422);
        }
            // $apiToken = Str::random(60);
            $user = new User;
            $user->name = $data['name'];
            $user->email = $data['email'];
            $user->password = bcrypt($data['password']);
            // $user->access_token = $apiToken;
            $user->save();
            if(Auth::attempt(['email'=>$data['email'],'password'=>$data['password']])){
                $user = User::where('email',$data['email'])->first();
                //echo"<pre>"; print_r(Auth::user());die;
                $accessToken = $user->createToken($data['email'])->accessToken;
                //echo"<pre>"; print_r($accessToken);die;
                User::where('email',$data['email'])->update(['access_token'=>$accessToken]);
                return response()->json(['status'=>true,'message'=>'Data save successfully!'],201);
            }else{
                return response()->json(['status'=>false,'message'=>'Data does not save!'],422);
            }
            
        }
    }
}
