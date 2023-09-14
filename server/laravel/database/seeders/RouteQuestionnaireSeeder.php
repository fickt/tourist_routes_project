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
            'photo' => 'http://s4.fotokto.ru/photo/full/471/4713629.jpg',
            'category_id' => RouteCategory::query()->where('name', '=', RouteCategoryEnum::Mountains->value)->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);

        RouteQuestionnairePhoto::query()->create([
            'photo' => 'https://gazeta19.ru/media/k2/galleries/48178/V20L1eUdaFI.jpg',
            'category_id' => RouteCategory::query()->where('name', '=', RouteCategoryEnum::Lakes->value)->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);

        RouteQuestionnairePhoto::query()->create([
            'photo' => 'https://www.vesveter.ru/images/rossia/dolina_tsarey.JPG',
            'category_id' => RouteCategory::query()->where('name', '=', RouteCategoryEnum::HistoricSites->value)->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);

        RouteQuestionnairePhoto::query()->create([
            'photo' => 'https://a.d-cd.net/_0AAAgGs8OA-960.jpg',
            'category_id' => RouteCategory::query()->where('name', '=', RouteCategoryEnum::Resorts->value)->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);

        RouteQuestionnairePhoto::query()->create([
            'photo' => 'questionnaire_reki_photo.jpg',
            'category_id' => RouteCategory::query()->where('name', '=', RouteCategoryEnum::Rivers->value)->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);

        RouteQuestionnairePhoto::query()->create([
            'photo' => 'https://554a875a-71dc-4f5f-b6bf-ae8967f137d5.selcdn.net/thumbs2/d82aecf8-58f3-11ec-9c26-2657e3d8179c.800x600.jpeg',
            'category_id' => RouteCategory::query()->where('name', '=', RouteCategoryEnum::Caves->value)->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);

        RouteQuestionnairePhoto::query()->create([
            'photo' => 'https://ic.pics.livejournal.com/lazarevs_007/50099764/4869909/4869909_original.jpg',
            'category_id' => RouteCategory::query()->where('name', '=', RouteCategoryEnum::SkiingComplex->value)->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);

        RouteQuestionnairePhoto::query()->create([
            'photo' => 'https://img5.arrivo.ru/1679/54/68242/0/flickr.com-Vasiliy_Petrov.jpg',
            'category_id' => RouteCategory::query()->where('name', '=', RouteCategoryEnum::Kurgans->value)->first()->id,
            'questionnaire_id' => $questionnaire->id
        ]);
    }
}
