<?php

namespace App\Http\Controllers;

use App\Http\Resources\RouteResource;
use App\Models\Route;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class RouteController extends Controller
{

    public function __construct(protected Route $route)
    {
    }


    public function index(): AnonymousResourceCollection
    {
        return RouteResource::collection($this->route->getRoutes());
    }

    public function show(int $routeId): RouteResource
    {
        return RouteResource::make($this->route->getRouteById($routeId));
    }
}
