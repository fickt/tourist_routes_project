<?php

namespace App\Models;

use App\Casts\FloatRound;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\Route
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property int $difficulty_id
 * @property float $longitude
 * @property float $latitude
 * @property float $distance_from_nearest_city
 * @property float $rating
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\RouteCategory> $categories
 * @property-read int|null $categories_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\RouteComment> $comments
 * @property-read int|null $comments_count
 * @property-read \App\Models\RouteDifficulty $difficulty
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\RoutePhoto> $photoPaths
 * @property-read int|null $photo_paths_count
 * @method static \Illuminate\Database\Eloquent\Builder|Route newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Route newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Route query()
 * @method static \Illuminate\Database\Eloquent\Builder|Route whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Route whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Route whereDifficultyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Route whereDistanceFromNearestCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Route whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Route whereLatitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Route whereLongitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Route whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Route whereRating($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Route whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Route extends Model
{
    use HasFactory;

    protected $table = 'routes';
    protected $fillable = [
        'name',
        'description',
        'difficulty_id',
        'longitude',
        'latitude',
        'distance_from_nearest_city',
    ];

    protected $guarded = [
        'rating'
    ];

    protected $casts = [
        'rating' => FloatRound::class
    ];

    /**
     * Возвращает пути до фоток от Route
     */
    public function photoPaths(): HasMany
    {
        return $this->hasMany(RoutePhoto::class, 'route_id');
    }

    /**
     * Возвращает сложность от Route
     */
    public function difficulty(): BelongsTo
    {
        return $this->belongsTo(
            RouteDifficulty::class,
            'difficulty_id',
            'id');
    }

    /**
     * Возвращает категории от Route
     */
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(
            RouteCategory::class,
            'routes_route_categories',
            'route_id',
            'category_id');
    }

    public function comments(): HasMany
    {
        return $this->hasMany(
            RouteComment::class,
            'route_id'
        );
    }
}
