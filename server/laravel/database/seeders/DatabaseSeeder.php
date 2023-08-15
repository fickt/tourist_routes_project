<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\RoutePhoto;
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
<<<<<<< HEAD
=======
        RouteCategorySeeder::run();
        RouteCategoryToRouteSeeder::run();
>>>>>>> 91ea69edba1ba1b5a417d9a3d6e62bdd909ce5a3
    }
}
