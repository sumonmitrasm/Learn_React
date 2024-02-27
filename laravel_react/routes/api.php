<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::namespace('App\Http\Controllers')->group(function(){
    Route::post('/login','AuthController@login');
    Route::post('/register','AuthController@register');
    Route::post('/forgotpassword','ForgotController@forgotPassword');
    Route::post('/reset','ForgotController@resetpassword');
    Route::get('/user','UserController@users')->middleware('auth:api');
});
