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
                'photo_path' => 'https://beautifoto.ru/wp-content/uploads/2019/07/5-7.jpg'
            ]
        );

        RoutePhoto::query()->create(
            [
                'route_id' => $route->id,
                'photo_path' => 'http://www.ap22.ru/netcat_files/multifile/2546/166114/1648923611_18_vsegda_pomnim_com_p_yelovii_les_letom_foto_22.jpg'
            ]
        );

        RoutePhoto::query()->create(
            [
                'route_id' => $route->id,
                'photo_path' => 'https://img.goodfon.ru/original/1280x1024/9/75/les-derevya-trava-solnce.jpg'
            ]
        );
    }
}
