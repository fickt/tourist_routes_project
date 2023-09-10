<?php

namespace App\Listeners;

use App\Events\VerificationCodeRequestedEvent;
use App\Mail\ForgetPasswordMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
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
        Mail::to([$event->email])->send(new ForgetPasswordMail($event->verificationCode));
    }
}
