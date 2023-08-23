<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\RouteCommentController;
use App\Http\Controllers\RouteController;
use App\Http\Controllers\RouteFavoriteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;
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
        Route::get('', [RouteController::class, 'index']);
        Route::get('/{routeId}', [RouteController::class, 'show']);

        /* Comments */
        Route::group(['prefix' => '/{routeId}/comment'], function () {
            Route::post('', [RouteCommentController::class, 'store']);
        });

        /* Favorite routes */
        Route::group(['prefix' => '/favorites'], function () {
            Route::get('', [RouteFavoriteController::class, 'index']);
            Route::patch('/{routeId}', [RouteFavoriteController::class, 'update']);
            Route::delete('/{routeId}', [RouteFavoriteController::class, 'destroy']);
        });
    });

    Route::get('/assets/{filename}', [ImageController::class, 'show']);
});
