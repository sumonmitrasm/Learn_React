<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\User;
use App\Models\Product;
use App\Models\ProductsAttribute;
use Validator;
use Auth;

class APIController extends Controller
{
    public function getUsers($id=null)
    {
          if (empty($id)) {
          $users = User::get();
          return response()->json(["users"=>$users,200]);  
        }else{
            $users = User::find($id);
            return response()->json(["users"=>$users],200); 
        }
    }
    public function getUsersList(Request $request)
    {
        $header = $request->header('Authorization');
        if(empty($header)){
            $message = "Header Authorization is missing!";
            return response()->json(['status'=>false,'message'=>$message],422);
        }else{
            if($header == "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlN1bW9uIE1pdHJhIiwiaWF0IjoxNTE2MjM5MDIyfQ.fpjLIaH-zhFteEyjTelM3eQG8iW_AL8g3oIgdURfDoY"){
                $users = User::get();
                return response()->json(["users"=>$users,200]);
            }else{
                $message = "Header Authorization is incorrect!";
                return response()->json(['status'=>false,'message'=>$message],422);
            }
            
        }
          
    }
    public function addUsers(Request $request){
        if($request->isMethod('post')){
        $data = $request->input();
        // echo"<pre>";print_r($data);die;
        $users = new User;
        $users->name = $data['name'];
        $users->email = $data['email'];
        $users->password = bcrypt($data['password']);
        $users->save();
        return response()->json(['message'=>'Data save successfully!'],201);
        }
    }
    public function registerUsers(Request $request){
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
            $apiToken = Str::random(60);
            $user = new User;
            $user->name = $data['name'];
            $user->email = $data['email'];
            $user->password = bcrypt($data['password']);
            $user->access_token = $apiToken;
            $user->save();
            return response()->json(['status'=>true,'message'=>'Data save multisuccessfully!','token'=>$apiToken],201);
        }
    }
    public function registerUsersWithPassport(Request $request){
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
                User::where('email',$data['email'])->update(['access_token'=>$accessToken]);
                return response()->json(['status'=>true,'message'=>'Data save successfully!'],201);
            }else{
                return response()->json(['status'=>false,'message'=>'Data does not save!'],422);
            }
            
        }
    }
    public function loginUsers(Request $request){
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
    public function loginUsersPassport(Request $request){
        if($request->isMethod('post')){
            $data = $request->input();
            //echo"<pre>";print_r($data);die;
            $rules = [
                "email"=> "email|exists:users",
                "password"=> "required"
             ];
            $customMessages = [
            // 'email.required' => 'Email is required',
            // 'email.email'=>'valid email is required',
            'email.unique'=>'Email does not exist in database',
            'password.required' => 'pass word required',
            ];
    
            $validator = Validator::make($data,$rules,$customMessages);
            if ($validator->fails()) {
                return response()->json($validator->errors(),422);
            }
            if(Auth::attempt(['email'=>$data['email'],'password'=>$data['password']])){
                $user = User::where('email',$data['email'])->first();
                //echo"<pre>"; print_r(Auth::user());die;
                $accessToken = $user->createToken($data['email'])->accessToken;
                User::where('email',$data['email'])->update(['access_token'=>$accessToken]);
                return response()->json(['status'=>true,'message'=>'Login successfully!','token'=>$accessToken],201);
            }else{
                return response()->json(['status'=>false,'message'=>'Email or passward does not exist!'],422);
            }
        }
    }
    public function addMultipleUsers(Request $request)
    {
        if($request->isMethod('post')){
        $requestData = $request->input();
        // echo"<pre>";print_r($requestData);die;
        $rules = [
            "users.*.name"=> "required",
            "users.*.email"=> "required|unique:users",
            "users.*.password"=> "required",
         ];
         $customMessages = [
            'users.*.email.required' => 'Email is required',
            'users.*.email.email'=>'valid email is required',
            'users.*.email.unique'=>'Email Already exist in database',
            'users.*.password.required' => 'pass word required',
            ];
         $validator = Validator::make($requestData,$rules,$customMessages);
        if ($validator->fails()) {
            return response()->json($validator->errors(),422);
        }


            foreach ($requestData['users'] as $key => $value) {
            $user = new User;
            $user->name = $value['name'];
            $user->email = $value['email'];
            $user->password = bcrypt($value['password']);
            $user->save();
            return response()->json(['message'=>'Data save multisuccessfully!'],201); 
            }
        }   
    }

    public function updateUserDetails(Request $request,$id)
    {
        if($request->isMethod('put')){
        $userData = $request->input();
        //echo"<pre>";print_r($userData);die;
        User::where('id',$id)->update(['name'=>$userData['name'],'email'=>$userData['email'],'password'=>bcrypt($userData['password'])]);
        return response()->json(['message'=>'Data update successfully!'],202); 
        }
    }

    public function updateUserName(Request $request,$id){
        if($request->isMethod('patch')){
            $userData = $request->input();
            //echo"<pre>";print_r($userData);die;
            User::where('id',$id)->update(['name'=>$userData['name']]);
            return response()->json(['message'=>'Data update successfully!'],202);
        }

    }

    public function deleteUser(Request $request,$id){
        User::where('id',$id)->delete();
        return response()->json(['message'=>'Data Delete successfully!'],202);
    }
    // public function deleteUserjson($id){
    //     User::where('id',$id)->delete();
    //     return response()->json(['message'=>'Data Delete successfully!'],202);
    // }

    public function deletMultipleUsers($ids){
        //echo $ids;die;
        $ids = explode(",",$ids);
        echo "<pre>";print_r($ids);die;
        User::whereIn('id',$id)->delete();
        return response()->json(['message'=>'Data Delete successfully!'],202);
    }

    public function logoutUsers(Request $request){
        $api_token = $request->header('Authorization');
        if(empty($api_token)){
            $message = "User API token is missing in header";
            return response()->json(["status"=>false,'message'=>$message],422);
        }else{
            $api_token = Str_replace("Bearer ", "", $api_token);
            $userCount = User::where('access_token',$api_token)->count();
            if($userCount>0){
                User::where('access_token',$api_token)->update(['access_token'=>NULL]);
                $message = "User logout successfully";
                return response()->json(["status"=>true,'message'=>$message],200);
            }
        }
        // if($request->isMethod('post')){
        //     $userData = $request->input();
        //     echo"<pre>";print_r($userData);die;
        // }
    }

    public function updateStock(Request $request){
        $header = $request->header('Authorization');
        if(empty($header)){
            $message = "Header Authorization is Missing";
            return response()->json(["status"=>true,'message'=>$message],422);
        }else{
            if($header=="Bearer qMF2TV1RAUifZQqEFAycICZ5Eq69rEIGOXjnjntBKbTsHuqSQ7RnPbBEIxEJ"){
                //update stoct api.......
                if($request->isMethod('post')){
                    $url = "https://ajkerprosongo.com/bangladesh/51";
                    $curl = curl_init();
                    curl_setopt($curl, CURLOPT_URL, $URL);
                    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
                    curl_setopt($curl, CURLOPT_HEADER, false);
                    $data = curl_exec($curl);
                    curl_close($curl);
                    $data = json_encode($data,true);
                    //echo"<pre>"; print_r($data);die;
                    if(isset($data['item'])){
                    foreach($data['item'] as $key => $value) {
                        ProductsAttribute::where('sku',$data['sku'])->update(['stock'=>$value['stock']]);
                    }
                    $message = "Product Stock update successfully";
                    return response()->json(["status"=>true,'message'=>$message],200);
                    }else{
                        $message = "Data not found";
                        return response()->json(["status"=>false,'message'=>$message],422);
                    }
                }

            }else{
                $message = "Header Authorization is Incorrect";
                return response()->json(["status"=>false,'message'=>$message],422);
            }
        }
    }

    
}
