<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RoutePhotoResource extends JsonResource
{
    private const PATH_IMAGE_FOLDER = '/assets/';
    private const PREFIX_API = '/api';

    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return string
     */
    public function toArray(Request $request): string
    {
        return $request->getSchemeAndHttpHost()
            . self::PREFIX_API
            . self::PATH_IMAGE_FOLDER
            . $this->photo_path;
    }

    /*public function withResponse($request, $response)
    {
        $response->setEncodingOptions(JSON_UNESCAPED_SLASHES);
    }*/
}
