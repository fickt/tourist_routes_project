<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserLoginRequest;
use App\Http\Requests\UserRegisterRequest;

use App\Http\Resources\LoginResource;
use App\Http\Resources\UserRegisterResource;
use App\Models\User;
use Illuminate\Http\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

class AuthController extends Controller
{
    public function register(UserRegisterRequest $request): UserRegisterResource
    {
        $user = User::query()->create($request->validated());

        return new UserRegisterResource($user);
    }

    public function login(UserLoginRequest $request): LoginResource
    {
        if (!$token = auth()->attempt($request->validated())) {
            throw new HttpException(Response::HTTP_UNAUTHORIZED, 'Unauthorized');
        }

        return new LoginResource($token);
    }

    public function logout()
    {
        auth()->logout();
    }
}
