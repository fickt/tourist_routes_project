<?php

namespace Database\Seeders;

use app\Enums\RouteCategoryEnum;
use App\Models\Route;
use App\Models\RouteCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RouteCategoryToRouteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        $route = Route::query()
            ->where('name', '=', 'Тестовый маршрут')
            ->first();

        $category = RouteCategory::query()
            ->where('name', '=', RouteCategoryEnum::Lakes->value)
            ->first();

        /**
         * @var Route $route
         */
        $route->categories()->attach($category);
    }
}
