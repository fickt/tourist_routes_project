<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RouteCommentRequest extends FormRequest
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
            'content' => 'required|string|min:1|max:5000',
            'rating' => 'required|float|between:1,5'
        ];
    }
}
