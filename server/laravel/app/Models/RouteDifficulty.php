<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RouteDifficulty extends Model
{
    use HasFactory;

    protected $table = 'route_difficulties';
    protected $fillable = [
        'name'
    ];
}
