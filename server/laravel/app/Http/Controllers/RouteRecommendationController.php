<?php

namespace App\Http\Controllers;

use App\Http\Resources\RouteResource;
use App\Models\User;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class RouteRecommendationController extends Controller
{
    public function __construct(protected User $user)
    {

    }
    public function index(): AnonymousResourceCollection
    {
        return RouteResource::collection($this->user->getRecommendations());
    }
}
