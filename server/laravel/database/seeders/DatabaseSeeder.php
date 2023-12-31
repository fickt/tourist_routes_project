<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        RouteDifficultySeeder::run();
        RouteSeeder::run();
        RoutePhotoSeeder::run();
        RouteCategorySeeder::run();
        RouteTargetAudienceSeeder::run();
        RouteCategoryToRouteSeeder::run();
        RouteSeederFromCsv::run();
        RouteQuestionnaireSeeder::run();
    }
}
