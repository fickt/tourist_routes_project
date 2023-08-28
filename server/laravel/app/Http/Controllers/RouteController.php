<?php

namespace App\Http\Controllers;

use App\Http\Resources\RouteResource;
use App\Models\Route;
use Exception;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

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
