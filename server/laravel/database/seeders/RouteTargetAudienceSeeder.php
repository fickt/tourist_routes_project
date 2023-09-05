<?php

namespace Database\Seeders;

use app\Enums\RouteTargetAudienceEnum;
use App\Models\RouteTargetAudience;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RouteTargetAudienceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        RouteTargetAudience::query()->create([
           'name' => RouteTargetAudienceEnum::Alone->value
        ]);

        RouteTargetAudience::query()->create([
            'name' => RouteTargetAudienceEnum::Family->value
        ]);

        RouteTargetAudience::query()->create([
            'name' => RouteTargetAudienceEnum::Friends->value
        ]);
    }
}
