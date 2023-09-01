<?php

namespace Database\Seeders;

use App\Enums\RouteCategoryEnum;
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
            ['name' => RouteCategoryEnum::Lakes->value]
        );
        RouteCategory::query()->create(
            ['name' => RouteCategoryEnum::Mountains->value]
        );
        RouteCategory::query()->create(
            ['name' => RouteCategoryEnum::HistoricSites->value]
        );
        RouteCategory::query()->create(
            ['name' => RouteCategoryEnum::Resorts->value]
        );
        RouteCategory::query()->create(
            ['name' => RouteCategoryEnum::Rivers->value]
        );
        RouteCategory::query()->create(
            ['name' => RouteCategoryEnum::Caves->value]
        );
        RouteCategory::query()->create(
            ['name' => RouteCategoryEnum::SkiingComplex->value]
        );
        RouteCategory::query()->create(
            ['name' => RouteCategoryEnum::Forests->value]
        );
        RouteCategory::query()->create(
            ['name' => RouteCategoryEnum::Parks->value]
        );
        RouteCategory::query()->create(
            ['name' => RouteCategoryEnum::Preserves->value]
        );
        RouteCategory::query()->create(
            ['name' => RouteCategoryEnum::Kurgans->value]
        );
    }
}
