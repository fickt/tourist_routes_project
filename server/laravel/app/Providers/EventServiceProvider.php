<?php

namespace App\Providers;

use App\Events\SuccessfulResetPasswordEvent;
use App\Events\VerificationCodeRequestedEvent;
use App\Jobs\TestJob;
use App\Listeners\DeleteUsedVerificationCodeListener;
use App\Listeners\SendVerificationCodeToEmailListener;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        SuccessfulResetPasswordEvent::class => [
            DeleteUsedVerificationCodeListener::class
        ],
        VerificationCodeRequestedEvent::class => [
            SendVerificationCodeToEmailListener::class
        ]
    ];

    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        $this->app->bind(TestJob::class . '@handle', fn($job) => $job->handle());
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
