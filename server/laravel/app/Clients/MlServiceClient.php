<?php

namespace App\Clients;

use App\Enums\RouteRelationEnum;
use App\Models\Route;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Http;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

class MlServiceClient
{
    private const URL_ML_SERVICE = 'http://ml-service:9000/recommend-on-image';

    public function __construct(protected Route $route)
    {
    }

    public function findRouteByImage($image): Collection|array
    {
        try {
            $response = Http::post(self::URL_ML_SERVICE, [
                'file' => base64_encode(file_get_contents($image))
            ])->json();
        } catch (\Exception) {
            throw new HttpException(Response::HTTP_SERVICE_UNAVAILABLE, 'ML сервис недоступен, отправьте запрос позже');
        }
        
        return $response
         ? $this->route->getRoutesByIds($response)
         : throw new HttpException(Response::HTTP_NOT_FOUND, 'Маршрут по изображению не найден');
    }
}
