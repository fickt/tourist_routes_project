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
    public function index(): AnonymousResourceCollection
    {

        $query = Route::query()->with(['difficulty', 'photoPaths', 'categories', 'comments.user']);

        if (Request::query('difficulty')) {
            $difficulty = explode(',', Request::query('difficulty'));
            $query->whereHas('difficulty', function ($q) use ($difficulty) {
                $q->whereIn('name', $difficulty);
            });
        }

        if (Request::query('category')) {
            $category = explode(',', Request::query('category'));
            $query->whereHas('categories', function ($q) use ($category) {
                $q->whereIn('name', $category);
            });
        }

        if ($search = Request::query('search')) {
            $query
                ->where('name', 'LIKE', "%$search%")
                ->orWhere('description', 'LIKE', "%$search%");
        }

        return RouteResource::collection($query->get());
    }

    public function show(int $routeId): RouteResource
    {
        try {
            $route = Route::query()
                ->findOrFail($routeId)
                ->with(['difficulty', 'photoPaths', 'categories', 'comments.user'])
                ->first();
        } catch (Exception) {
            throw new HttpException(
                Response::HTTP_NOT_FOUND,
                'Route with id:' . $routeId . ' has not been found!'
            );
        }

        return RouteResource::make($route);
    }
}
