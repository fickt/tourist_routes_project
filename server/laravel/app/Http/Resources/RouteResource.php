<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Response;

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
            'difficulty' => $this->whenLoaded('difficulty'),
            'longitude' => $this->longitude,
            'latitude' => $this->latitude,
            'rating' => $this->rating,
            'photos' => RoutePhotoResource::collection($this->whenLoaded('photoPaths'))
        ];
    }
}
