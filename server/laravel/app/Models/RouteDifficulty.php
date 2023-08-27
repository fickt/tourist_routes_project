<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


/**
 * App\Models\RouteDifficulty
 *
 * @mixin Builder
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static Builder|RouteDifficulty newModelQuery()
 * @method static Builder|RouteDifficulty newQuery()
 * @method static Builder|RouteDifficulty query()
 * @method static Builder|RouteDifficulty whereCreatedAt($value)
 * @method static Builder|RouteDifficulty whereId($value)
 * @method static Builder|RouteDifficulty whereName($value)
 * @method static Builder|RouteDifficulty whereUpdatedAt($value)
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
