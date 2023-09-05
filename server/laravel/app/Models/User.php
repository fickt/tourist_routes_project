<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Http\Response;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Request;
use Laravel\Sanctum\HasApiTokens;
use Mockery\Exception;
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
        )->with(['difficulty', 'photoPaths', 'categories', 'comments.user', 'targetAudiences']);
    }

    public function favoriteRoutes(): BelongsToMany
    {
        return $this->belongsToMany(
            Route::class,
            'user_route_favorites',
            'user_id',
            'route_id'
        )->with(['difficulty', 'photoPaths', 'categories', 'comments.user', 'targetAudiences']);
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
        return auth()->user()->favoriteRoutes()->get();
    }

    public function editProfile($data)
    {
        $newData = [];

        $user = auth()->user();
        if ($newEmail = $data->email) {
            $newData = ['email' => $newEmail];
        }
        if ($newPassword = $data->new_password && $oldPassword = $data->old_password) {
            Hash::check($oldPassword, $user->password)
                ? $newData = ['password' => $newPassword]
                : throw new HttpException('Пароли не совпадают!', Response::HTTP_BAD_REQUEST);
        }
        if ($newNickname = $data->nickname) {
            $newData = ['nickname' => $newNickname];
        }
        return self::update($newData);
    }

    public function getRecommendations()
    {
        return auth()->user()->recommendations()->get();
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
