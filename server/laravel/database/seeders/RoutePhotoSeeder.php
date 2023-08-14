<?php

namespace Database\Seeders;

use App\Models\Route;
use App\Models\RoutePhoto;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoutePhotoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        $route = Route::query()->where('name','=', 'Тестовый маршрут')->first();

        RoutePhoto::query()->create(
            [
                'route_id' => $route->id,
                'photo_path' => 'test_photo.jpg'
            ]
        );

        RoutePhoto::query()->create(
            [
                'route_id' => $route->id,
                'photo_path' => 'test_photo.jpg'
            ]
        );
    }
}
