<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

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
            . '/api'
            . self::PATH_IMAGE_FOLDER
            . $this->photo_path;
    }

    /*public function withResponse($request, $response)
    {
        $response->setEncodingOptions(JSON_UNESCAPED_SLASHES);
    }*/
}
