<?php

namespace Database\Seeders;

use App\Models\RouteDifficulty;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RouteDifficultySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        RouteDifficulty::query()->create([
<<<<<<< HEAD
            'name' => 'easy'
        ]);
        RouteDifficulty::query()->create([
            'name' => 'medium'
        ]);
        RouteDifficulty::query()->create([
            'name' => 'hard'
=======
            'name' => 'новичок'
        ]);
        RouteDifficulty::query()->create([
            'name' => 'знающий'
        ]);
        RouteDifficulty::query()->create([
            'name' => 'опытный'
>>>>>>> 91ea69edba1ba1b5a417d9a3d6e62bdd909ce5a3
        ]);
    }
}
