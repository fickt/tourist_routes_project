<?php

namespace App\Http\Controllers;

use App\Http\Resources\RouteResource;
use App\Models\Route;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

class RouteController extends Controller
{
    public function index()
    {
        return RouteResource::collection(
            Route::query()
                ->with(['difficulty', 'photoPaths', 'categories'])
                ->get()
        );
    }

    public function show(int $routeId)
    {
        $route = Route::query()
            ->find($routeId)
            ->with(['difficulty', 'photoPaths', 'categories'])
            ->first();

        return $route !== null
            ? RouteResource::make($route)
            : throw new HttpException(
                Response::HTTP_NOT_FOUND,
                'Route with id:' . $routeId . ' has not been found!'
            );
    }
}
