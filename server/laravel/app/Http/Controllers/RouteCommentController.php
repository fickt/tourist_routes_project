<?php

namespace App\Http\Controllers;

use App\Http\Requests\RouteCommentRequest;
use App\Http\Resources\RouteResource;
use App\Models\RouteComment;

class RouteCommentController extends Controller
{

    public function __construct(protected RouteComment $routeComment)
    {
    }

    public function store(int $routeId, RouteCommentRequest $request): RouteResource
    {
        $route = $this->routeComment->addCommentToRouteById($routeId, $request->validated());
        return RouteResource::make($route);
    }
}
