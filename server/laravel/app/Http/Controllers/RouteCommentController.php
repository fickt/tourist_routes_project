<?php

namespace App\Http\Controllers;

use App\Http\Requests\RouteCommentRequest;
use App\Http\Resources\RouteResource;
use App\Models\Route;
use App\Models\RouteComment;
use Exception;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpKernel\Exception\HttpException;

class RouteCommentController extends Controller
{

    public function __construct(protected RouteComment $routeComment)
    {
    }

    public function store(int $routeId, RouteCommentRequest $request): RouteResource
    {
       $route = $this->routeComment->add_comment_to_route_by_id($routeId, $request->validated());

        return RouteResource::make($route);
    }
}
