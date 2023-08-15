<?php

namespace App\Http\Controllers;

use App\Http\Resources\RouteResource;
use App\Models\Route;
use Exception;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

class RouteController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        return RouteResource::collection(
            Route::query()
                ->with(['difficulty', 'photoPaths', 'categories'])
                ->get()
        );
    }

    public function show(int $routeId): RouteResource
    {
        try {
            $route = Route::query()
                ->findOrFail($routeId)
                ->with(['difficulty', 'photoPaths', 'categories'])
                ->first();
        } catch (Exception) {
            throw new HttpException(
                Response::HTTP_NOT_FOUND,
                'Route with id:' . $routeId . ' has not been found!'
            );
        }

        return RouteResource::make($route);
    }
}
