<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Enums\RouteRelationEnum;
use App\Events\SuccessfulResetPasswordEvent;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Http\Response;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Tymon\JWTAuth\Contracts\JWTSubject;

/**
 * App\Models\User
 *
 * @mixin Builder
 * @property int $id
 * @property string $email
 * @property string|null $nickname
 * @property string $password
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Route> $favoriteRoutes
 * @mixin \Eloquent
 */
class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nickname',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function recommendations(): BelongsToMany
    {
        return $this->belongsToMany(
            Route::class,
            'route_recommendations',
            'user_id',
            'route_id'
        )->with(RouteRelationEnum::allRelations());
    }

    public function completedRoutes(): BelongsToMany
    {
        return $this->belongsToMany(
            Route::class,
            'completed_routes',
            'user_id',
            'route_id'
        )->with(RouteRelationEnum::allRelations());
    }

    public function favoriteRoutes(): BelongsToMany
    {
        return $this->belongsToMany(
            Route::class,
            'user_route_favorites',
            'user_id',
            'route_id'
        )->with(RouteRelationEnum::allRelations());
    }

    /**
     * Добавляет маршрут в избранные
     * Если у пользователя уже был в избранных данный маршрут
     * он удалится из списка избранных
     */
    public function addRouteToFavoritesById(int $routeId)
    {
        $route = Route::query()->find($routeId) ??
            throw new HttpException(
                Response::HTTP_NOT_FOUND,
                "Route with id: $routeId has not been found!");

        $user = auth()->user();
        $user->favoriteRoutes()->find($routeId)
            ? $user->favoriteRoutes()->detach($route)
            : $user->favoriteRoutes()->attach($route);
        return $this->getFavoriteRoutes();
    }

    public function addRouteToCompletedRoutesById(int $routeId)
    {
        $route = Route::query()->find($routeId) ??
            throw new HttpException(
                Response::HTTP_NOT_FOUND,
                "Route with id: $routeId has not been found!");

        $user = auth()->user();
        $user->completedRoutes()->find($routeId)
            ? $user->completedRoutes()->detach($route)
            : $user->completedRoutes()->attach($route);
        return $this->getCompletedRoutes();
    }

    /**
     * Редактировать профиль пользователя
     * Поменять nickname, email, password
     */
    public function editProfile($data): mixed
    {
        $user = auth()->user();

        return $user->update($data)
            ? auth()->user()
            : throw new HttpException(
                Response::HTTP_INTERNAL_SERVER_ERROR,
                'Internal server error');
    }

    public function resetPassword($request): void
    {
        VerificationCode::query()
            ->where('email', '=', $request->input('email'))
            ->where('code', '=', $request->input('verification_code'))
            ->exists()
            ? User::query()->where('email', '=', $request['email'])->update(['password' => Hash::make($request['password'])])
            : throw new HttpException(Response::HTTP_BAD_REQUEST, 'Неверный код!');
        SuccessfulResetPasswordEvent::dispatch($request->input('email'), $request->input('verification_code'));
    }

    public function getRecommendations()
    {
        return auth()->user()->recommendations()->get();
    }

    public function getCompletedRoutes()
    {
        return auth()->user()->completedRoutes()->get();
    }

    public function getFavoriteRoutes()
    {
        return auth()->user()->favoriteRoutes()->get();
    }
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims(): array
    {
        return [];
    }
}
