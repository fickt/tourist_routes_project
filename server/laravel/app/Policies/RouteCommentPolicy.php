<?php

namespace App\Policies;

use App\Models\RouteComment;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class RouteCommentPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, RouteComment $routeComment): bool
    {
        return true;
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, RouteComment $routeComment): bool
    {
        return $user->id === $routeComment->user_id;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, RouteComment $routeComment): bool
    {
        return $user->id === $routeComment->user_id;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, RouteComment $routeComment): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, RouteComment $routeComment): bool
    {
        return false;
    }
}
