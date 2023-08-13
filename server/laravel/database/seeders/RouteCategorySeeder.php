<?php

namespace Database\Seeders;

use App\Models\RouteCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RouteCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        RouteCategory::query()->create(
            ['озёра']
        );
        RouteCategory::query()->create(
            ['горы']
        );
        RouteCategory::query()->create(
            ['исторические места']
        );
        RouteCategory::query()->create(
            ['зоны отдыха']
        );
        RouteCategory::query()->create(
            ['реки']
        );
        RouteCategory::query()->create(
            ['пещеры']
        );
        RouteCategory::query()->create(
            ['горнолыжные комплексы']
        );
        RouteCategory::query()->create(
            ['леса']
        );
        RouteCategory::query()->create(
            ['парки']
        );
        RouteCategory::query()->create(
            ['заповедники']
        );
        RouteCategory::query()->create(
            ['курганы']
        );
    }
}
