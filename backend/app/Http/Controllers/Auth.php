<?php

namespace App\Http\Controllers;

use App\Custom\Jwt;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class Auth extends Controller
{
    public function auth(Request $request) {
        $user = User::where('email', $request->email)->first();

        if(!$user) {
            response()->json('No Autorizado', 401);
        }

        if(!password_verify($request->password, $user->password)) {
            response()->json('No Autorizado', 401);
        }

        $token = Jwt::create($user);

        return response()->json([
            'token' => $token,
            'user' => [
                'firstName' => $user->name,
                'lastName' => $user->lastname
            ]
        ]);
    }

    public function verify() {
        return Jwt::validate();
    }
}
