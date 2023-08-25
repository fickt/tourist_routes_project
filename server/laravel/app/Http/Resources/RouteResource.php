<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RouteResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'difficulty' => RouteDifficultyResource::make($this->whenLoaded('difficulty'))->resource->name,
            'categories' => RouteCategoryResource::collection($this->whenLoaded('categories')),
            'longitude' => (float) $this->longitude,
            'latitude' => (float) $this->latitude,
            'rating' => $this->rating,
            'photos' => RoutePhotoResource::collection($this->whenLoaded('photoPaths')),
            'comments' => RouteCommentResource::collection($this->whenLoaded('comments'))
        ];
    }

    /*public function withResponse($request, $response)
    {
        $response->setEncodingOptions(JSON_UNESCAPED_SLASHES);
    }*/
}
