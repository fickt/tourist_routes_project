<?php

namespace App\Models;

use App\Casts\BuildPhotoUrl;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class RouteQuestionnairePhoto extends Model
{
    use HasFactory;

    protected $table = 'route_questionnaire_photos';

    protected $fillable = [
        'photo',
        'category_id'
    ];

    protected $casts = [
        'photo' => BuildPhotoUrl::class
    ];

    public function category(): HasOne
    {
        return $this->hasOne(
            RouteCategory::class,
            'id',
            'category_id'
        );
    }
}