<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\FleetSpecification;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class FleetSpecificationPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return $user->hasPermissionTo('view-any fleet-specification');
    }

    public function view(User $user, FleetSpecification $fleetSpecification): bool
    {
        return $user->hasPermissionTo('view-any fleet-specification');
    }

    public function create(User $user): bool
    {
        return $user->hasPermissionTo('create-fleet-specification');
    }

    public function update(User $user, FleetSpecification $fleetSpecification): bool
    {
        return $user->hasPermissionTo('update-fleet-specification');
    }

    public function delete(User $user, FleetSpecification $fleetSpecification): bool
    {
        return $user->hasPermissionTo('delete-fleet-specification');
    }

    public function restore(User $user, FleetSpecification $fleetSpecification): bool
    {
        return $user->hasPermissionTo('delete-fleet-specification');
    }

    public function forceDelete(User $user, FleetSpecification $fleetSpecification): bool
    {
        return $user->hasPermissionTo('delete-fleet-specification');
    }
}
