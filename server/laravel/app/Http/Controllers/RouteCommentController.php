<?php

namespace App\Http\Controllers;

use App\Http\Requests\RouteCommentRequest;
use App\Models\Route;
use App\Models\RouteComment;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpKernel\Exception\HttpException;

class RouteCommentController extends Controller
{
    public function store(int $routeId, RouteCommentRequest $request)
    {
        return Route::query()->find($routeId)
            ? RouteComment::query()->create([
                $request->validated(),
                ['route_id' => $routeId],
                ['user_id' => Auth::id()]
            ])
            : throw new HttpException(
                Response::HTTP_NOT_FOUND,
                'Route with id: ' . $routeId . 'has not been found!'
            );
    }
}
