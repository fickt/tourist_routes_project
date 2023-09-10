<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ForgetPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(protected int $verificationCode)
    {}

    public function build(): ForgetPasswordMail
    {
        return $this->markdown('forgotpassword')->with('verification_code', $this->verificationCode)->subject('Восстановление пароля');
    }
}
