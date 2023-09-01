<?php

namespace Database\Seeders;

use app\Enums\RouteCategoryEnum;
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
        $questionnaire = RouteQuestionnaire::query()->create([
                'name' => 'Test questionnaire'
            ]
        );

        RouteQuestionnairePhoto::query()->create([
            'photo' => 'questionnaire_gori_photo.jpg',
            'category_id' => RouteCategory::query()->where('name', '=', RouteCategoryEnum::Mountains->value)->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);

        RouteQuestionnairePhoto::query()->create([
            'photo' => 'questionnaire_ozero_photo.jpg',
            'category_id' => RouteCategory::query()->where('name', '=', RouteCategoryEnum::Lakes->value)->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);

        RouteQuestionnairePhoto::query()->create([
            'photo' => 'questionnaire_istoricheskie_mesta_photo.jpg',
            'category_id' => RouteCategory::query()->where('name', '=', RouteCategoryEnum::HistoricSites->value)->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);

        RouteQuestionnairePhoto::query()->create([
            'photo' => 'questionnaire_zona_otdiha_photo.jpg',
            'category_id' => RouteCategory::query()->where('name', '=', RouteCategoryEnum::Resorts->value)->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);

        RouteQuestionnairePhoto::query()->create([
            'photo' => 'questionnaire_reki_photo.jpg',
            'category_id' => RouteCategory::query()->where('name', '=', RouteCategoryEnum::Rivers->value)->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);

        RouteQuestionnairePhoto::query()->create([
            'photo' => 'questionnaire_pesheri_photo.jpg',
            'category_id' => RouteCategory::query()->where('name', '=', RouteCategoryEnum::Caves->value)->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);

        RouteQuestionnairePhoto::query()->create([
            'photo' => 'questionnaire_gornolizhni_komplex_photo.jpg',
            'category_id' => RouteCategory::query()->where('name', '=', RouteCategoryEnum::SkiingComplex->value)->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);

        RouteQuestionnairePhoto::query()->create([
            'photo' => 'questionnaire_kurgan_photo.jpg',
            'category_id' => RouteCategory::query()->where('name', '=', RouteCategoryEnum::Kurgans->value)->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);
    }
}
