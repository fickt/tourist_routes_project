<?php

namespace App\Http\Controllers;

use App\Http\Requests\ForgotPasswordRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\Http\Requests\UserLoginRequest;
use App\Http\Requests\UserRegisterRequest;
use App\Http\Resources\AuthUserResource;
use App\Http\Resources\LogoutResource;
use App\Http\Resources\ResetPasswordResource;
use App\Http\Resources\VerificationCodeResource;
use App\Services\AuthService;

class AuthController extends Controller
{

    public function __construct(protected AuthService $service)
    {
    }

    public function register(UserRegisterRequest $request): AuthUserResource
    {
        return AuthUserResource::make($this->service->register($request));
    }

    public function login(UserLoginRequest $request): AuthUserResource
    {
        return AuthUserResource::make($this->service->login($request));
    }

    public function logout(): LogoutResource
    {
        return LogoutResource::make($this->service->logout());
    }

    public function refresh(): AuthUserResource
    {
        return AuthUserResource::make($this->service->refresh());
    }

    public function sendVerificationCode(ForgotPasswordRequest $request): VerificationCodeResource
    {
        return VerificationCodeResource::make($this->service->sendVerificationCode($request));
    }

    public function resetPassword(ResetPasswordRequest $request): ResetPasswordResource
    {
        return ResetPasswordResource::make($this->service->resetPassword($request));
    }
}
