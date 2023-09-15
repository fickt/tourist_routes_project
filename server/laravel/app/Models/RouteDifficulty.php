<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


/**
 * App\Models\RouteDifficulty
 *
 * == Properties ==
 * @mixin Builder
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at

 * @mixin \Eloquent
 */
class RouteDifficulty extends Model
{
    use HasFactory;

    protected $table = 'route_difficulties';
    protected $fillable = [
        'name'
    ];
}
