<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ResetPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(protected int $verificationCode)
    {}

    public function build(): ResetPasswordMail
    {
        return $this->markdown('resetpassword')->with('verification_code', $this->verificationCode)->subject('Восстановление пароля');
    }
}
