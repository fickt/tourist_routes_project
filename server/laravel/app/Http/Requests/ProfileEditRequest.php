<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProfileEditRequest extends FormRequest
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
            'nickname' => 'string|min:1|max:255',
            'email' => 'string|email|unique:users,email|min:1|max:255',
            'old_password' => 'string|min:1|max:255',
            'new_password' => 'string|min:1|max:255',
        ];
    }
}
