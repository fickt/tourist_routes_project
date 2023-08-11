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
            'name' => 'easy'
        ]);
        RouteDifficulty::query()->create([
            'name' => 'medium'
        ]);
        RouteDifficulty::query()->create([
            'name' => 'hard'
        ]);
    }
}
