<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class RoutePhotoResource extends JsonResource
{
    private const PATH_IMAGE_FOLDER = '/assets/';

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): string
    {
        return $request->getSchemeAndHttpHost()
            . self::PATH_IMAGE_FOLDER
            . $this->photo_path;
    }
}
