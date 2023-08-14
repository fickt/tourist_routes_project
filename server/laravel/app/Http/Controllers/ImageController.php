<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;
class ImageController extends Controller
{
    public function show(string $filename): \Illuminate\Http\Response|JsonResponse
    {
        $path = public_path() . '\images\\' . $filename;

        if (!File::exists($path)) {
            throw new HttpException(
                ResponseAlias::HTTP_NOT_FOUND,
                'Image not found');
        }

        $file = File::get($path);
        $type = File::mimeType($path);

        $response = Response::make($file);
        $response->header('Content-Type', $type);

        return $response;
    }
}
