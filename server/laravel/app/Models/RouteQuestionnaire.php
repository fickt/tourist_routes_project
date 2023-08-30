<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

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
        return RouteQuestionnaire::query()->with('photos')->first();
    }
}
