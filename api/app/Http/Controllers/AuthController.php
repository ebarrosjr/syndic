<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function register(Request $req)
    {
        return User::create([
            'name' => $req->input('name'),
            'email' => $req->input('email'),
            'password' => Hash::make($req->input('password'))
        ]);
    }

    public function fail()
    {
        return response([
            'message' => 'Access denied'
        ], Response::HTTP_UNAUTHORIZED);
    }

    public function login(Request $req) 
    {
        if(!Auth::attempt($req->only('email', 'password'))) {
            return response([
                'message' => 'Dados inválidos'
            ], Response::HTTP_UNAUTHORIZED);
        }

        $user = Auth::user(); 

        $token = $user->createToken('token')->plainTextToken;

        $cookie = cookie('SyndicJWT', $token, 60 * 24); // Um dia

        return  response(['message' => 'success'])->withCookie($cookie);
    }

    public function logout()
    {
        $cookie = Cookie::forget('SyndicJWT');

        return response(['message' => 'success'])->withCookie($cookie);
    }

    public function user()
    {
        return Auth::user();
    }
}
