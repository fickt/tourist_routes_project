<?php

namespace App\Http\Controllers;

use App\Http\Resources\RouteResource;
use App\Models\User;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class RouteCompletedController extends Controller
{
    public function __construct(protected User $user)
    {
    }

    public function index(): AnonymousResourceCollection
    {
        return RouteResource::collection($this->user->getCompletedRoutes());
    }

    public function update(int $routeId): AnonymousResourceCollection
    {
        return RouteResource::collection(auth()->user()->addRouteToCompletedRoutesById($routeId));
    }
}
