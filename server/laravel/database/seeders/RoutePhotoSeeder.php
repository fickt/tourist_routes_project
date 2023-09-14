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
                'photo_path' => 'https://i.ytimg.com/vi/kzZhcpyVaJY/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgWihQMA8=&amp;rs=AOn4CLDtq1_UUj1OxjiRzuCWGVSZZ6S18A'
            ]
        );

        RoutePhoto::query()->create(
            [
                'route_id' => $route->id,
                'photo_path' => 'https://wallpapersmug.com/download/1280x1024/c2f3fc/misty_yosemite_valley_national_park.jpg'
            ]
        );

        RoutePhoto::query()->create(
            [
                'route_id' => $route->id,
                'photo_path' => 'https://i.artfile.me/wallpaper/29-04-2018/1280x960/priroda-gory-prostor-1334586.jpg'
            ]
        );

        RoutePhoto::query()->create(
            [
                'route_id' => $route->id,
                'photo_path' => 'https://i.artfile.me/wallpaper/29-04-2018/1280x960/priroda-gory-prostor-1334586.jpg'
            ]
        );

        RoutePhoto::query()->create(
            [
                'route_id' => $route->id,
                'photo_path' => 'https://i.artfile.me/wallpaper/29-04-2018/1280x960/priroda-gory-prostor-1334586.jpg'
            ]
        );

        RoutePhoto::query()->create(
            [
                'route_id' => $route->id,
                'photo_path' => 'https://i.artfile.me/wallpaper/29-04-2018/1280x960/priroda-gory-prostor-1334586.jpg'
            ]
        );
    }
}
