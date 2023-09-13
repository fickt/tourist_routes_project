<?php

namespace App\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Request;


class BuildPhotoUrl implements CastsAttributes
{
    private const PATH_IMAGE_FOLDER = '/assets/';
    private const PREFIX_API = '/api';

    /**
     * Если название картинки и есть ссылка, то вернет ссылку, если название файла не является ссылкой,
     * построит из него ссылку
     *
     * @param array<string, mixed> $attributes
     */
    public function get(Model $model, string $key, mixed $value, array $attributes): string
    {
        return str_starts_with($value, 'http') || str_starts_with($value, 'https')
            ? $value
            : Request::getSchemeAndHttpHost()
            . self::PREFIX_API
            . self::PATH_IMAGE_FOLDER
            . $value;
    }

    /**
     * Prepare the given value for storage.
     *
     * @param array<string, mixed> $attributes
     */
    public function set(Model $model, string $key, mixed $value, array $attributes): mixed
    {
        return $value;
    }
}
