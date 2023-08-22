<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserLoginRequest;
use App\Http\Requests\UserRegisterRequest;
use App\Http\Resources\AuthUserResource;
use App\Http\Resources\LogoutResource;
use App\Models\User;
use Illuminate\Http\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

class AuthController extends Controller
{
    public function register(UserRegisterRequest $request): AuthUserResource
    {
        User::query()->create($request->validated());
        if (!$token = auth()->attempt($request->only(['email', 'password']))) {
            throw new HttpException(Response::HTTP_UNAUTHORIZED, 'Аутентификация не выполнена!');
        }

        return new AuthUserResource($token);
    }

    public function login(UserLoginRequest $request): AuthUserResource
    {
        if (!$token = auth()->attempt($request->validated())) {
            throw new HttpException(Response::HTTP_UNAUTHORIZED, 'Неправильный логин или пароль!');
        }

        return new AuthUserResource($token);
    }

    public function logout(): LogoutResource
    {
        $user = auth()->user();
        auth()->logout();

        return new LogoutResource($user);
    }
}
