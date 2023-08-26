<?php

namespace App\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Database\Eloquent\Model;

class FloatRound implements CastsAttributes
{
    private const DIGITS_AFTER_POINT = 2;
    /**
     * Округляет float данные до DIGITS_AFTER_POINT знаков после плавающей точки
     *
     * @param  array<string, mixed>  $attributes
     */
    public function get(Model $model, string $key, mixed $value, array $attributes): float
    {
        return round((float) $value, self::DIGITS_AFTER_POINT);
    }

    /**
     * Prepare the given value for storage.
     *
     * @param  array<string, mixed>  $attributes
     */
    public function set(Model $model, string $key, mixed $value, array $attributes): float
    {
        return $value;
    }
}
