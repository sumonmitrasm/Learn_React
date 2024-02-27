<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;
use Laravel\Passport\HasApiTokens;
use App\Models\User;
use Validator;
use Illuminate\Support\Facades\Hash;
class AuthController extends Controller
{
    public function login(Request $request){
        if(Auth::attempt($request->only('email','password'))){
            $user=Auth::user();
            $token = $user->createToken('app')->accessToken;
            return response([
                'message'=>"Successfully",
                'token'=>$token,
                'user'=>$user
            ],400);
        }
        return response([
            'message' =>'InvalidEmail or Password'
        ],401);  
    }
    public function register(Request $request) {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
    
        $token = $user->createToken('email')->accessToken;
    
        return response([
            'message' => 'Successfully Register',
            'user' => $user,
            'token' => $token, // Include the token in the response
        ], 201); // Use status code 201 for resource creation success
    }
    
}
