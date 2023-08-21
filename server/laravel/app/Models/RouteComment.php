<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @mixin Builder
 *
 */
class RouteComment extends Model
{
    use HasFactory;

    protected $table = 'route_comments';

    protected $fillable = [
        'content',
        'user_id',
        'route_id',
        'rating'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(
            User::class,
            'user_id',
            'id'
        );
    }

    protected static function boot(): void
    {
        self::created(fn(self $model) => $model->calculateRouteRating());
        self::deleted(fn(self $model) => $model->calculateRouteRating());
        parent::boot(); // TODO: Change the autogenerated stub
    }

    /**
     * Высчитывает среднее значение рейтингов из комментов и присваивает
     * его в поле rating у сущности Route
     */
    private function calculateRouteRating(): void
    {
        $averageRating = RouteComment::query()
            ->where('route_id', '=', $this->route_id)
            ->avg('rating');

        $route = Route::query()
            ->find($this->route_id)
            ->first();

        $route->rating = $averageRating;
        $route->save();
    }
}
