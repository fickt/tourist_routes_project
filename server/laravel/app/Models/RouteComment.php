<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @mixin Builder
 *
 */
class RouteComment extends Model
{
    use HasFactory;

    protected $table = 'route_comments';

    protected $fillable = [
        'content',
        'user_id',
        'route_id',
        'rating'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(
            User::class,
            'user_id',
            'id'
        );
    }
}
