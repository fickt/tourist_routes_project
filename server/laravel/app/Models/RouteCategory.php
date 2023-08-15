<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


/**
 * @mixin Builder
 *
 * @property string $name
 */
class RouteCategory extends Model
{
    use HasFactory;

    protected $table = 'route_categories';
    protected $fillable = [
        'name'
    ];
}
