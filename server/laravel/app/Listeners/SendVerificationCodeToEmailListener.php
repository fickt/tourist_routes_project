<?php

namespace App\Listeners;

use App\Events\VerificationCodeRequestedEvent;
use App\Mail\ResetPasswordMail;
use Illuminate\Support\Facades\Mail;

class SendVerificationCodeToEmailListener
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(VerificationCodeRequestedEvent $event): void
    {
        Mail::to([$event->email])->send(new ResetPasswordMail($event->verificationCode));
    }
}
