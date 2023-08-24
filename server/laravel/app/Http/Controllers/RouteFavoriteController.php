<?php

namespace App\Http\Controllers;

use App\Http\Resources\RouteResource;
use App\Models\Route;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

class RouteFavoriteController extends Controller
{
    public function update(int $routeId): AnonymousResourceCollection
    {
        $route = Route::query()->find($routeId) ??
            throw new HttpException(
                Response::HTTP_NOT_FOUND,
                "Route with id: $routeId has not been found!");

        try {
            auth()->user()->favoriteRoutes()->attach($route->first());
        } catch (\Exception) {
            auth()->user()->favoriteRoutes()->detach($route->first());
        }
        return RouteResource::collection(
            auth()->user()->favoriteRoutes()->get()
        );
    }

    public function index(): AnonymousResourceCollection
    {
        return RouteResource::collection(
            auth()->user()->favoriteRoutes()->get()
        );
    }
}
