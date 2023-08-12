<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

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
            'difficulty_id', 'id');

    }
}
