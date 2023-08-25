<?php

namespace Database\Seeders;

use App\Enums\RouteDifficultyEnum;
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
            'name' => RouteDifficultyEnum::Easy->value
        ]);
        RouteDifficulty::query()->create([
            'name' => RouteDifficultyEnum::Medium->value
        ]);
        RouteDifficulty::query()->create([
            'name' => RouteDifficultyEnum::Hard->value
        ]);
    }
}
