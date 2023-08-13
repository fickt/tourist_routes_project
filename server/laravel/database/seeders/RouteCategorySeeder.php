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
            ['name' => 'озёра']
        );
        RouteCategory::query()->create(
            ['name' => 'горы']
        );
        RouteCategory::query()->create(
            ['name' => 'исторические места']
        );
        RouteCategory::query()->create(
            ['name' => 'зоны отдыха']
        );
        RouteCategory::query()->create(
            ['name' => 'реки']
        );
        RouteCategory::query()->create(
            ['name' => 'пещеры']
        );
        RouteCategory::query()->create(
            ['name' => 'горнолыжные комплексы']
        );
        RouteCategory::query()->create(
            ['name' => 'леса']
        );
        RouteCategory::query()->create(
            ['name' => 'парки']
        );
        RouteCategory::query()->create(
            ['name' => 'заповедники']
        );
        RouteCategory::query()->create(
            ['name' => 'курганы']
        );
    }
}
