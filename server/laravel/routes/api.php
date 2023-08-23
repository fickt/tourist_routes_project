<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\RouteCommentController;
use App\Http\Controllers\RouteController;
use App\Http\Controllers\RouteFavoriteController;
use App\Http\Middleware\IsAuthenticated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'api'], function () {
    /* Authorization */
    Route::group(['prefix' => 'auth'], function () {
        Route::post('/register', [AuthController::class, 'register']);
        Route::post('/login', [AuthController::class, 'login']);
        Route::post('/logout', [AuthController::class, 'logout']);
    });

    /* Routes */
    Route::group(['prefix' => 'routes'], function () {
        /* Favorite routes */
        Route::group(['prefix' => '/favorites', 'middleware' => IsAuthenticated::class], function () {
            Route::get('', [RouteFavoriteController::class, 'index']);
            Route::patch('/{routeId}', [RouteFavoriteController::class, 'update']);
        });

        /*Fetch all routes or by id */
        Route::get('', [RouteController::class, 'index']);
        Route::get('/{routeId}', [RouteController::class, 'show']);

        /* Comments */
        Route::group(['prefix' => '/{routeId}/comment'], function () {
            Route::post('', [RouteCommentController::class, 'store']);
        });
    });

    Route::get('/assets/{filename}', [ImageController::class, 'show']);
});
