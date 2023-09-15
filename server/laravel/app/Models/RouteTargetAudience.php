<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\RouteTargetAudience
 * == Properties ==
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @mixin \Eloquent
 */
class RouteTargetAudience extends Model
{
    use HasFactory;

    protected $table = 'route_target_audiences';
    protected $fillable = [
        'name'
    ];
}
