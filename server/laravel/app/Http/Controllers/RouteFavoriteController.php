<?php

namespace App\Http\Controllers;

use App\Http\Resources\RouteResource;
use App\Models\Route;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

class RouteFavoriteController extends Controller
{
    /**
     * Добавляет маршрут в избранные
     * Если у пользователя уже был в избранных данный маршрут
     * он удалится из списка избранных
     */
    public function update(int $routeId): AnonymousResourceCollection
    {
        $route = Route::query()->find($routeId) ??
            throw new HttpException(
                Response::HTTP_NOT_FOUND,
                "Route with id: $routeId has not been found!");

            $user = auth()->user();
            $user->favoriteRoutes()->find($routeId)
                ? $user->favoriteRoutes()->detach($route)
                : $user->favoriteRoutes()->attach($route);

        return RouteResource::collection(
            $user->favoriteRoutes()->get()
        );
    }

    public function index(): AnonymousResourceCollection
    {
        return RouteResource::collection(
            auth()->user()->favoriteRoutes()->get()
        );
    }
}
