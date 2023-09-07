<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RouteTargetAudience extends Model
{
    use HasFactory;

    protected $table = 'route_target_audiences';
    protected $fillable = [
        'name'
    ];
}
