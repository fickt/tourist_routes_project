<?php

namespace App\Models;

use App\Casts\BuildPhotoUrl;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * App\Models\RouteQuestionnairePhoto
 *
 * == Properties ==
 * @property int $id
 * @property string $photo
 * @property int $questionnaire_id
 * @property int $category_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 *
 * == Relations ==
 * @property-read \App\Models\RouteCategory|null $category
 * @mixin \Eloquent
 */
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
