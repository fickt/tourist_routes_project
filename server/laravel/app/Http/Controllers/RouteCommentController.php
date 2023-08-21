<?php

namespace App\Http\Controllers;

use App\Models\Route;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

class RouteCommentController extends Controller
{
    public function store(int $routeId, RouteCommentRequest $request)
    {
        try {
            $route = Route::query()->findOrFail($routeId);
        } catch (Exception) {
            throw new HttpException(
                Response::HTTP_NOT_FOUND,
                'Route with id: ' . $routeId . 'has not been found!'
            );
        }

    }
}
