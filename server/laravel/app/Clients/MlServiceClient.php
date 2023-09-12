<?php

namespace App\Clients;

use Illuminate\Support\Facades\Http;

class MlServiceClient
{
    private const URL_ML_SERVICE = 'http://ml-service:9000/recommend-on-image';
    public function findRouteByImage($image)
    {
        $encoded = base64_encode($image);
        $response = Http::post(self::URL_ML_SERVICE, [
            'file' => base64_encode($image)
        ]);
        print_r($response->json());
        return base64_decode($encoded);
    }
}
