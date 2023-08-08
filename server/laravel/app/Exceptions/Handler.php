<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, Throwable $exception)
    {
        return response()->json([
            'error' => $exception->getMessage(),
        ], $this->getStatusCode($exception));
    }

    protected function getStatusCode(Throwable $exception)
    {
        $status = method_exists($exception, 'getStatusCode')
            ? $exception->getStatusCode()
            : 500;

        return !is_numeric($status) ? 500 : $status;
    }

}
