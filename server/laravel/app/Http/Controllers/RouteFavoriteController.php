<?php

namespace App\Http\Controllers;

use App\Http\Resources\RouteResource;
use App\Models\Route;
use App\Models\User;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

class RouteFavoriteController extends Controller
{

    public function __construct(protected User $user)
    {
    }


    public function update(int $routeId): AnonymousResourceCollection
    {
        return RouteResource::collection($this->user->addRouteToFavoritesById($routeId));
    }

    public function index(): AnonymousResourceCollection
    {
        return RouteResource::collection($this->user->getFavoriteRoutes());
    }
}
