<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\User;
use App\Models\Vessel;
use Illuminate\Auth\Access\HandlesAuthorization;

class VesselPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return $user->hasPermissionTo('view-any vessel');
    }

    public function view(User $user, Vessel $vessel): bool
    {
        return $user->hasPermissionTo('view-any vessel');
    }

    public function create(User $user): bool
    {
        return $user->hasPermissionTo('create-vessel');
    }

    public function update(User $user, Vessel $vessel): bool
    {
        return $user->hasPermissionTo('update-vessel');
    }

    public function delete(User $user, Vessel $vessel): bool
    {
        return $user->hasPermissionTo('delete-vessel');
    }

    public function restore(User $user, Vessel $vessel): bool
    {
        return $user->hasPermissionTo('delete-vessel');
    }

    public function forceDelete(User $user, Vessel $vessel): bool
    {
        return $user->hasPermissionTo('delete-vessel');
    }
}
