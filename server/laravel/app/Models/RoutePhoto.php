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
