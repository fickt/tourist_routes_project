<?php

namespace App\Listeners;


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
    public function handle(): void
    {
        $user = auth()->user();
        $user->recommendations()->detach();
    }
}
