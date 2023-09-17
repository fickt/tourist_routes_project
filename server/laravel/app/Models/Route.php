<?php

namespace App\Models;

use App\Casts\FloatRound;
use App\Enums\RouteRelationEnum;
use Exception;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

/**
 * App\Models\Route
 *
 * == Properties ==
 * @property int $id
 * @property string $name
 * @property string $description
 * @property int $difficulty_id
 * @property float $longitude
 * @property float $latitude
 * @property float $distance_from_nearest_city
 * @property float $rating
 * @property string|null $embedding
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 *
 * == Relations ==
 * @property-read Collection<int, \App\Models\RouteCategory> $categories
 * @property-read Collection<int, \App\Models\RouteComment> $comments
 * @property-read \App\Models\RouteDifficulty $difficulty
 * @property-read Collection<int, \App\Models\RoutePhoto> $photoPaths
 * @property-read Collection<int, \App\Models\RouteTargetAudience> $targetAudiences
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

    protected $hidden = [
        'embedding',
    ];

    /**
     * Получить все Route
     *
     * Доступные queries:
     * ?difficulty= (отфильтровать по уровням сложности)
     * ?category= (отфильтровать по категориям)
     * ?target_audience= (отфильтровать по целевой аудитории)
     * ?search= (поиск по названию и описанию Route)
     *
     * @return Collection
     */
    public function getRoutes(): Collection
    {
        $query = self::query()->with(RouteRelationEnum::allRelations());

        if (Request::query('difficulty')) {
            $difficulty = explode(',', Request::query('difficulty'));
            $query->whereHas('difficulty', function ($q) use ($difficulty) {
                $q->whereIn('name', $difficulty);
            });
        }

        if (Request::query('category')) {
            $category = explode(',', Request::query('category'));
            $query->whereHas('categories', function ($q) use ($category) {
                $q->whereIn('name', $category);
            });
        }

        if (Request::query('target_audience')) {
            $target_audiences = explode(',', Request::query('target_audience'));
            $query->whereHas('targetAudiences', function ($q) use ($target_audiences) {
                $q->whereIn('name', $target_audiences);
            });
        }

        if ($search = Request::query('search')) {
            $query
                ->where('name', 'ILIKE', "%$search%")
                ->orWhere('description', 'ILIKE', "%$search%");
        }
        return $query->get();
    }

    public function getRouteById(int $routeId)
    {
        try {
            $route = self::query()
                ->with(RouteRelationEnum::allRelations())
                ->findOrFail($routeId);

        } catch (Exception) {
            throw new HttpException(
                Response::HTTP_NOT_FOUND,
                'Route with id:' . $routeId . ' has not been found!'
            );
        }
        return $route;
    }

    public function getRoutesByIds(array $routeIds): Collection|array
    {
        return self::query()
            ->with(RouteRelationEnum::allRelations())
            ->whereIn('id', $routeIds)
            ->get();
    }

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

    public function targetAudiences(): BelongsToMany
    {
        return $this->belongsToMany(
            RouteTargetAudience::class,
            'routes_route_target_audience',
            'route_id',
            'target_audience_id'
        );
    }
}
