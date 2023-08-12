<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


/**
 * @mixin Builder
 *
 * @property int $id
 * @property string $name
 */
class RouteDifficulty extends Model
{
    use HasFactory;

    protected $table = 'route_difficulties';
    protected $fillable = [
        'name'
    ];
}
