<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\Service;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ServicePolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return $user->hasPermissionTo('view-any service');
    }

    public function view(User $user, Service $service): bool
    {
        return $user->hasPermissionTo('view-any service');
    }

    public function create(User $user): bool
    {
        return $user->hasPermissionTo('create-service');
    }

    public function update(User $user, Service $service): bool
    {
        return $user->hasPermissionTo('update-service');
    }

    public function delete(User $user, Service $service): bool
    {
        return $user->hasPermissionTo('delete-service');
    }

    public function restore(User $user, Service $service): bool
    {
        return $user->hasPermissionTo('delete-service');
    }

    public function forceDelete(User $user, Service $service): bool
    {
        return $user->hasPermissionTo('delete-service');
    }
}
