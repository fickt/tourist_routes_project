<?php

namespace App\Models;

use App\Mail\ForgetPasswordMail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\HttpException;

class VerificationCode extends Model
{
    use HasFactory;

    protected $table = 'verification_code';

    protected $fillable = [
        'email',
        'code',
    ];

    protected $guarded = [
        'is_valid'
    ];

    public function sendVerificationCodeToEmail(string $email): mixed
    {
        return Mail::to([$email])->send(new ForgetPasswordMail())
            ? $email
            : throw new HttpException(Response::HTTP_INTERNAL_SERVER_ERROR, 'Internal server error');
    }
}
