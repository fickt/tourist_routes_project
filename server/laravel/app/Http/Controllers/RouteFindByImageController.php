<?php

namespace App\Http\Controllers;

use App\Clients\MlServiceClient;
use App\Http\Requests\FindByImageRequest;
use App\Http\Resources\RouteResource;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class RouteFindByImageController extends Controller
{
    public function __construct(protected MlServiceClient $client)
    {
    }

    public function show(FindByImageRequest $request): AnonymousResourceCollection
    {
        return RouteResource::collection($this->client->findRouteByImage($request->file('image')));
    }
}
