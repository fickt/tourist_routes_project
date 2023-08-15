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
        return Route::all();
    }
}
