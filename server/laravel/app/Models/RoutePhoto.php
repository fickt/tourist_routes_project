<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\RoutePhoto
 *
 * @property int $id
 * @property int $route_id
 * @property string $photo_path
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|RoutePhoto newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|RoutePhoto newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|RoutePhoto query()
 * @method static \Illuminate\Database\Eloquent\Builder|RoutePhoto whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RoutePhoto whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RoutePhoto wherePhotoPath($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RoutePhoto whereRouteId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RoutePhoto whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class RoutePhoto extends Model
{
    use HasFactory;

    protected $table = 'route_photos';

    protected $fillable = [
        'route_id',
        'photo_path'
    ];
}
