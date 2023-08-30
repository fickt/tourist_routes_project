<?php

namespace App\Http\Resources;

use App\Models\RouteCategory;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RouteQuestionnairePhotoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'photo_url' => $this->photo,
            'category' => $this->category->name
        ];
    }
}
