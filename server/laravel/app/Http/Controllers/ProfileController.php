<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileEditRequest;
use App\Http\Resources\UserResource;
use App\Models\User;

class ProfileController extends Controller
{
    public function __construct(protected User $user)
    {

    }

    public function update(ProfileEditRequest $request): UserResource
    {
        return UserResource::make($this->user->editProfile($request));
    }
}
