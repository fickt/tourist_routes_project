<?php

namespace App\Models;

use App\Events\UserCompletedQuestionnaireEvent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\RouteQuestionnaire
 * == Properties ==
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 *
 * == Relations ==
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\RouteQuestionnairePhoto> $photos

 * @mixin \Eloquent
 */
class RouteQuestionnaire extends Model
{
    use HasFactory;

    protected $table = 'route_questionnaires';

    protected $fillable = [
        'name'
    ];

    public function photos(): HasMany
    {
        return $this->hasMany(
            RouteQuestionnairePhoto::class,
            'questionnaire_id'
        );
    }

    public function getQuestionnaire()
    {
        return RouteQuestionnaire::query()->with('photos.category')->first();
    }

    public function generateRecommendationsForUser($answers)
    {
        $dislikedCategories = [];
        foreach ($answers as $answer) {
            if (!$answer['is_liked']) {
                $dislikedCategories[] = $answer['category'];
            }
        }
        $recommendedRoutes = Route::query()->whereHas('categories', function ($q) use ($dislikedCategories) {
            $q->whereNotIn('name', $dislikedCategories);
        })->get();

        $user = auth()->user();
        UserCompletedQuestionnaireEvent::dispatch();
        foreach ($recommendedRoutes as $route) {
            $user->recommendations()->attach($route);
        }
        return $user->getRecommendations();
    }
}
