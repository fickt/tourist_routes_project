<?php

namespace App\Services;

use App\Models\User;
use App\Models\VerificationCode;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

class AuthService
{
    public function __construct(protected VerificationCode $verificationCode,
                                protected User             $user)
    {
    }

    public function register(Request $request)
    {
        User::query()->create($request->validated());
        if (!$token = auth()->attempt($request->only(['email', 'password']))) {
            throw new HttpException(Response::HTTP_UNAUTHORIZED, 'Аутентификация не выполнена!');
        }
        return $token;
    }

    public function login(Request $request)
    {
        if (!$token = auth()->attempt($request->validated())) {
            throw new HttpException(Response::HTTP_BAD_REQUEST, 'Неправильный логин или пароль!');
        }

        return $token;
    }

    public function logout()
    {
        $user = auth()->user();
        auth()->logout();

        return $user;
    }

    public function refresh()
    {
        $token = auth()->refresh();
        return $token;
    }

    public function sendVerificationCode(Request $request): string
    {
        return $this->verificationCode->sendVerificationCodeToEmail($request->input('email'));
    }

    public function resetPassword(Request $request): string
    {
        $this->user->resetPassword($request);
        return $request->input('email');
    }
}
