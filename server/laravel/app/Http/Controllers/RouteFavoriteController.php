<?php

namespace App\Http\Controllers;

use App\Models\Route;
use Illuminate\Http\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

class RouteFavoriteController extends Controller
{
    public function update(int $routeId)
    {
        $route = Route::query()->find($routeId) ??
            throw new HttpException(
            Response::HTTP_NOT_FOUND,
            "Route with id: $routeId has not been found!");

        auth()->user()->favoriteRoutes()->attach($route->first());

        return auth()->user()->favoriteRoutes()->get();
    }
    public function index()
    {
        return auth()->user()->favoriteRoutes()->get();
    }
}
