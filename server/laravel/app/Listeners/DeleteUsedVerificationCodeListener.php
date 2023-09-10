<?php

namespace App\Listeners;

use App\Events\SuccessfulResetPasswordEvent;
use App\Models\VerificationCode;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class DeleteUsedVerificationCodeListener
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
    public function handle(SuccessfulResetPasswordEvent $event): void
    {
        VerificationCode::query()
            ->where('code', '=', $event->verificationCode)
            ->where('email','=',$event->email)
            ->delete();
    }
}
