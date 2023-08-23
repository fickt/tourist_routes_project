<?php

namespace App\Http\Controllers;

use App\Models\Route;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpKernel\Exception\HttpException;

class RouteFavoriteController extends Controller
{
    public function update(int $routeId)
    {
        $route = Route::query()->find($routeId) ??
            throw new HttpException(
            Response::HTTP_NOT_FOUND,
            "Route with id: $routeId has not been found!");

        $route = $route->first();
        $user = auth()->user();
        $user->favoriteRoutes()->attach($route);

        return $user->favoriteRoutes()->get();
    }
    public function index()
    {
        return auth()->user()->favoriteRoutes()->get();
    }
}
