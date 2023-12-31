<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RouteCommentController;
use App\Http\Controllers\RouteCompletedController;
use App\Http\Controllers\RouteController;
use App\Http\Controllers\RouteFavoriteController;
use App\Http\Controllers\RouteFindByImageController;
use App\Http\Controllers\RouteQuestionnaireController;
use App\Http\Controllers\RouteRecommendationController;
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
        Route::post('/refresh', [AuthController::class, 'refresh']);

        /* Resetting password */
        Route::post('/send-verification-code', [AuthController::class, 'sendVerificationCode']);
        Route::post('/reset-password', [AuthController::class, 'resetPassword']);
    });

    /* Profile */
    Route::group(['prefix' => 'myprofile', 'middleware' => IsAuthenticated::class], function () {
        Route::patch('', [ProfileController::class, 'update']);
    });

    /* Routes */
    Route::group(['prefix' => 'routes'], function () {

        /* Find route by image */
        Route::post('/find-by-image', [RouteFindByImageController::class, 'show']);

        /* Recommendations */
        Route::group(['prefix' => '/recommendations', 'middleware' => IsAuthenticated::class], function () {
            Route::get('', [RouteRecommendationController::class, 'index']);

            /* Questionnaire for generating recommendations */
            Route::group(['prefix' => '/questionnaire'], function () {
                Route::get('', [RouteQuestionnaireController::class, 'show']);
                Route::post('', [RouteQuestionnaireController::class, 'store']);
            });
        });

        /* Favorite routes */
        Route::group(['prefix' => '/favorites', 'middleware' => IsAuthenticated::class], function () {
            Route::get('', [RouteFavoriteController::class, 'index']);
            Route::patch('/{routeId}', [RouteFavoriteController::class, 'update']);
        });

        /* Completed routes */
        Route::group(['prefix' => '/completed', 'middleware' => IsAuthenticated::class], function () {
            Route::get('', [RouteCompletedController::class, 'index']);
            Route::patch('/{routeId}', [RouteCompletedController::class, 'update']);
        });

        /* Fetch all routes or by id */
        Route::get('', [RouteController::class, 'index']);
        Route::get('/{routeId}', [RouteController::class, 'show']);

        /* Comments */
        Route::group(['prefix' => '/{routeId}/comment', 'middleware' => IsAuthenticated::class], function () {
            Route::post('', [RouteCommentController::class, 'store']);
        });
    });

    Route::get('/assets/{filename}', [ImageController::class, 'show']);
    Route::get('/view', function () {

        return view('forgotpassword');
    });
});
