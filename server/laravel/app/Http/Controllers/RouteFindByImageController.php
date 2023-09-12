<?php

namespace App\Http\Controllers;

use App\Clients\MlServiceClient;
use Illuminate\Http\Request;

class RouteFindByImageController extends Controller
{
    public function __construct(protected MlServiceClient $client)
    {
    }

    public function show(Request $request)
    {
        return $this->client->findRouteByImage($request->file('image'));
    }
}
