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
            'name' => 'новичок'
        ]);
        RouteDifficulty::query()->create([
            'name' => 'знающий'
        ]);
        RouteDifficulty::query()->create([
            'name' => 'опытный'
        ]);
    }
}
