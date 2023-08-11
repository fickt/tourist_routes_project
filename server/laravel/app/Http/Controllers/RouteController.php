<?php

namespace App\Http\Controllers;

use App\Http\Resources\RouteResource;
use App\Models\Route;
use Illuminate\Http\Request;

class RouteController extends Controller
{
    public function index(): RouteResource
    {
        return RouteResource::make(Route::all());
    }
}
