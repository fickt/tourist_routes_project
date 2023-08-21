<?php

namespace App\Http\Controllers;

use App\Http\Requests\RouteCommentRequest;
use App\Http\Resources\RouteCommentResource;
use App\Models\Route;
use App\Models\RouteComment;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpKernel\Exception\HttpException;

class RouteCommentController extends Controller
{
    public function store(int $routeId, RouteCommentRequest $request)
    {
        Route::query()->find($routeId)
            ? $comment = RouteComment::query()->create([
            $request->validated(),
            ['route_id' => $routeId],
            ['user_id' => Auth::id()]
        ])
            : throw new HttpException(
            Response::HTTP_NOT_FOUND,
            'Route with id: ' . $routeId . 'has not been found!'
        );

         return RouteCommentResource::make($comment);
    }
}
