<?php

namespace App\Listeners;

use App\Models\User;


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
    public function handle(): void
    {
        auth()->user()->is_questionnaire_completed ?:
        User::query()
            ->where('id', '=', auth()->user()->id)
            ->update([
            'is_questionnaire_completed' => true
        ]);
    }
}
