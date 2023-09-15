<?php

namespace App\Listeners;

use App\Events\UserCompletedQuestionnaireEvent;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class UserCompletedQuestionnaireListener
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
    public function handle(UserCompletedQuestionnaireEvent $event): void
    {
        User::query()
            ->where('id', $event->userId)
            ->first()
            ->update([
                'is_questionnaire_completed' => true
            ]);
    }
}
