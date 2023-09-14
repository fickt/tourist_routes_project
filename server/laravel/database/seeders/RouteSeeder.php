<?php

namespace Database\Seeders;

use App\Enums\RouteDifficultyEnum;
use App\Models\Route;
use App\Models\RouteDifficulty;
use App\Models\RoutePhoto;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RouteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        $route_difficulty = RouteDifficulty::query()
            ->where('name', '=', RouteDifficultyEnum::Easy->value)
            ->first();

        Route::query()->create(
            [
                'name' => 'Тестовый маршрут',
                'description' => 'Victoria Falls (Lozi: Mosi-oa-Tunya, "Thundering Smoke"; Tonga: Shungu Namutitima, "Boiling Water") is a waterfall on the Zambezi River in southern Africa,
which provides habitat for several unique species of plants and animals. It is located on the border between Zambia and Zimbabwe
 and is one of the world\'s largest waterfalls, with a width of 1,708 m (5,604 ft).

Archeological sites and oral history describe a long record of African knowledge of the site. Though known to some European geographers before the 19th century,
Scottish missionary David Livingstone identified the falls in 1855, providing the British colonial name of Victoria Falls after Queen Victoria.
    Since the mid 20th century, the site has been an increasingly important source of tourism. Zambia and Zimbabwe both have national parks and tourism infrastructure at the site.
    Research in the late 2010s found that precipitation variability due to climate change is likely to change the character of the fall.
    $@§©¬µ☺☻☻♂
    &#128512;
&#128514;
&#128522;
🙂😗🤐',
                'difficulty_id' => $route_difficulty->id,
                'longitude' => 91.4,
                'latitude' => 53.7,
                'distance_from_nearest_city' => 142.243,
                'rating' => 0
            ]
        );
    }
}
