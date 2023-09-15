<?php

namespace App\Listeners;

use App\Events\UserCompletedQuestionnaireEvent;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class ChangeUserIsQuestionnaireCompletedFieldListener
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
        auth()->user()->is_questionnaire_completed = true;
       // echo $is_updated;
    }
}
