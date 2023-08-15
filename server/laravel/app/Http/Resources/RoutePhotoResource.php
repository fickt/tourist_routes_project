<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class RoutePhotoResource extends JsonResource
{
<<<<<<< HEAD
=======
    private const PATH_IMAGE_FOLDER = '/images/';

>>>>>>> 91ea69edba1ba1b5a417d9a3d6e62bdd909ce5a3
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
<<<<<<< HEAD
        //header('Content-Type: image/png');
        return [
            base64_encode(File::get(public_path() . '/images/test_photo.jpg'))
        ];
    }


=======
        return [
                $request->getSchemeAndHttpHost()
                . self::PATH_IMAGE_FOLDER
                . $this->photo_path
        ];
    }
>>>>>>> 91ea69edba1ba1b5a417d9a3d6e62bdd909ce5a3
}
