<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

class FindByImageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'image' => 'required|mimes:jpeg,jpg,bmp,png|dimensions:max_width=1920,max_height=1080'

        ];
    }

    public function messages(): array
    {
        return [
            'image.mimes' => 'Допустимые расширения изображений: jpeg,jpg,bmp,png',
            'image.dimensions' => 'Максимально допустимый размер изображения - 1920х1080',
        ];
    }
}
