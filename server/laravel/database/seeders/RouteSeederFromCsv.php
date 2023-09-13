<?php

namespace Database\Seeders;

use App\Enums\RouteCategoryEnum;
use app\Enums\RouteTargetAudienceEnum;
use App\Models\Route;
use App\Models\RouteCategory;
use App\Models\RoutePhoto;
use App\Models\RouteTargetAudience;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RouteSeederFromCsv extends Seeder
{
    private const PATH_ROUTES_CSV_FILE = "/routes/data_with_array_emb_custom.csv";
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
                    'embedding' => $data[10],
                    'rating' => 0
                ]
            );
            RoutePhoto::query()->create(
                [
                    'route_id' => $route->id,
                    'photo_path' => $data[9]
                ]);
            $routeCategory = self::getRandomCategory();
            $routeTargetAudience = self::getTargetAudience();

            $route->categories()->attach($routeCategory);
            $route->targetAudiences()->attach($routeTargetAudience);

            $count++;
        }
        fclose($open);
    }

    /**
     * Берёт из RouteCategoryEnum рандомное значение, берет его value и по нему в БД ищет категорию
     */
    private static function getRandomCategory()
    {
        $categoryNumber = rand(0, count(RouteCategoryEnum::cases()) - 1);
        return RouteCategory::query()
            ->where('name', '=', RouteCategoryEnum::cases()[$categoryNumber]->value)
            ->first();
    }

    private static function getTargetAudience()
    {
        $targetAudienceNumber = rand(0, count(RouteTargetAudienceEnum::cases()) - 1);
        return RouteTargetAudience::query()
            ->where('name', '=', RouteTargetAudienceEnum::cases()[$targetAudienceNumber]->value)
            ->first();
    }
}
