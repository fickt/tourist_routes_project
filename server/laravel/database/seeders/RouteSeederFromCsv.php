<?php

namespace Database\Seeders;

use App\Models\Route;
use App\Models\RoutePhoto;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RouteSeederFromCsv extends Seeder
{
    private const PATH_ROUTES_CSV_FILE = "/routes/data_for_db.csv";
    private const NUMBER_OF_ROUTES = 30;

    /**
     * Считывает данные из csv файла и заполняет БД маршрутами
     */
    public static function run(): void
    {
        $open = fopen(storage_path() . self::PATH_ROUTES_CSV_FILE, "r");
        fgetcsv($open, 1000, ",");

        $count = 0;
        while (($data = fgetcsv($open, 1000, ",")) && !($count === self::NUMBER_OF_ROUTES)) {
            $route = Route::query()->create(
                [
                    'name' => $data[0],
                    'description' => $data[1],
                    'latitude' => $data[2],
                    'longitude' => $data[3],
                    'difficulty_id' => $data[4],
                    'distance_from_nearest_city' => $data[5],
                    'rating' => 0
                ]
            );
            RoutePhoto::query()->create(
                [
                    'route_id' => $route->id,
                    'photo_path' => 'image_route_zaglushka.jpg'
                ]);

            $count++;
        }
        fclose($open);
    }
}
