<?php

namespace App\Listeners;

use App\Events\UserCompletedQuestionnaireEvent;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class DeletePreviousQuestionnaireResultsListener
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
        $user = auth()->user();
        $user->recommendations()->delete();
    }
}
