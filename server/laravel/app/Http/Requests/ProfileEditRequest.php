<?php

namespace App\Http\Requests;

use App\Rules\ComparePasswords;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use phpseclib3\Crypt\Hash;

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
            'email' => 'string|email|unique:users|min:1|max:255',
            'old_password' => ['required', 'string', 'min:1', 'max:255', new ComparePasswords()],
            'new_password' => 'string|min:1|max:255',
        ];
    }

    protected function passedValidation(): void
    {
        $this->replace(['password' => $this->input('new_password')]);
    }

    public function validated($key = null, $default = null): array
    {
        return array_merge(parent::validated(), ['password' => $this->input('password')]);
    }
}
