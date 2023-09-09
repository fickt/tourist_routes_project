<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

class ResetPasswordRequest extends FormRequest
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
            'email' => 'required|string|email|exists:users|min:1|max:255',
            'password' => 'required|string|min:1|max:255',
            'verification_code' => 'required|integer|between:1000,9999'
        ];
    }

    public function messages(): array
    {
        return [
            'email.exists' => throw new HttpException(Response::HTTP_NOT_FOUND, 'Аккаунт с такой почтой не существует!')
        ];
    }
}
