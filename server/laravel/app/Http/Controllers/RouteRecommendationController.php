<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RouteRecommendationController extends Controller
{
    public function index()
    {
        return auth()->user()->recommendations()->get();
    }
}
