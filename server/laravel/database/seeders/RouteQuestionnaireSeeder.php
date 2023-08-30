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

        RouteQuestionnairePhoto::query()->create([
            'photo' => 'questionnaire_gori_photo.jpg',
            'category_id' => RouteCategory::query()->where('name', '=', 'горы')->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);

        RouteQuestionnairePhoto::query()->create([
            'photo' => 'questionnaire_ozero_photo.jpg',
            'category_id' => RouteCategory::query()->where('name', '=', 'озёра')->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);

        RouteQuestionnairePhoto::query()->create([
            'photo' => 'questionnaire_istoricheskie_mesta_photo.jpg',
            'category_id' => RouteCategory::query()->where('name', '=', 'исторические места')->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);

        RouteQuestionnairePhoto::query()->create([
            'photo' => 'questionnaire_zona_otdiha_photo.jpg',
            'category_id' => RouteCategory::query()->where('name', '=', 'зоны отдыха')->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);

        RouteQuestionnairePhoto::query()->create([
            'photo' => 'questionnaire_reki_photo.jpg',
            'category_id' => RouteCategory::query()->where('name', '=', 'реки')->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);

        RouteQuestionnairePhoto::query()->create([
            'photo' => 'questionnaire_pesheri_photo.jpg',
            'category_id' => RouteCategory::query()->where('name', '=', 'пещеры')->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);

        RouteQuestionnairePhoto::query()->create([
            'photo' => 'questionnaire_gornolizhni_komplex_photo.jpg',
            'category_id' => RouteCategory::query()->where('name', '=', 'горнолыжные комплексы')->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);

        RouteQuestionnairePhoto::query()->create([
            'photo' => 'questionnaire_kurgan_photo.jpg',
            'category_id' => RouteCategory::query()->where('name', '=', 'курганы')->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);
    }
}
