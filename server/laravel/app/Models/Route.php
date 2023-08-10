<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Route extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'difficulty_id',
        'longitude',
        'latitude',
        'distance_from_nearest_city',
    ];

    protected $guarded = [
        'rating'
    ];

    public function photoPaths(): HasMany
    {

    }
}
