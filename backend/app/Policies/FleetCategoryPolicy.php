<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\FleetCategory;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class FleetCategoryPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return $user->hasPermissionTo('view-any fleet-category');
    }

    public function view(User $user, FleetCategory $fleetCategory): bool
    {
        return $user->hasPermissionTo('view-any fleet-category');
    }

    public function create(User $user): bool
    {
        return $user->hasPermissionTo('create-fleet-category');
    }

    public function update(User $user, FleetCategory $fleetCategory): bool
    {
        return $user->hasPermissionTo('update-fleet-category');
    }

    public function delete(User $user, FleetCategory $fleetCategory): bool
    {
        return $user->hasPermissionTo('delete-fleet-category');
    }

    public function restore(User $user, FleetCategory $fleetCategory): bool
    {
        return $user->hasPermissionTo('delete-fleet-category');
    }

    public function forceDelete(User $user, FleetCategory $fleetCategory): bool
    {
        return $user->hasPermissionTo('delete-fleet-category');
    }
}
