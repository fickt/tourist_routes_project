<?php

namespace Database\Seeders;

use App\Models\RouteCategory;
use App\Models\RouteQuestionnaire;
use App\Models\RouteQuestionnairePhoto;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RouteQuestionnaireSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public static function run(): void
    {
        /**
         * @var RouteQuestionnaire $questionnaire
         */
        $questionnaire = RouteQuestionnaire::query()->create([
                'name' => 'Test questionnaire'
            ]
        );
        $mountainsPhoto = RouteQuestionnairePhoto::query()->create([
            'photo' => 'questionnaire_gori_photo.jpg',
            'category_id' => RouteCategory::query()->where('name', '=', 'горы')->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);
    }
}
