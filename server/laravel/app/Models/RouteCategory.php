<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


/**
 * App\Models\RouteCategory
 *
 * @mixin Builder
 * @property string $name
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static Builder|RouteCategory newModelQuery()
 * @method static Builder|RouteCategory newQuery()
 * @method static Builder|RouteCategory query()
 * @method static Builder|RouteCategory whereCreatedAt($value)
 * @method static Builder|RouteCategory whereId($value)
 * @method static Builder|RouteCategory whereName($value)
 * @method static Builder|RouteCategory whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class RouteCategory extends Model
{
    use HasFactory;

    protected $table = 'route_categories';
    protected $fillable = [
        'name'
    ];
}
