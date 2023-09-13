<?php

namespace App\Clients;

use App\Models\Route;
use Illuminate\Support\Facades\Http;

class MlServiceClient
{
    private const URL_ML_SERVICE = 'http://ml-service:9000/recommend-on-image';

    public function findRouteByImage($image)
    {
        $response = Http::post(self::URL_ML_SERVICE, [
           'file' => base64_encode(file_get_contents($image))
        ])->json();
        return Route::query()->whereIn('id', $response)->get();
    }
}
