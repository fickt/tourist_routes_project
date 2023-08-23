<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Response as ResponseAlias;
use Symfony\Component\HttpKernel\Exception\HttpException;

class IsAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        return Auth::check()
            ? $next($request)
            : throw new HttpException(ResponseAlias::HTTP_UNAUTHORIZED, 'Требуется авторизация!');
    }
}
