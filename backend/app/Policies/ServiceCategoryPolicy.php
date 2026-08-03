<?php

declare(strict_types=1);

namespace App\Policies;

use App\Models\ServiceCategory;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ServiceCategoryPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return $user->hasPermissionTo('view-any service-category');
    }

    public function view(User $user, ServiceCategory $serviceCategory): bool
    {
        return $user->hasPermissionTo('view-any service-category');
    }

    public function create(User $user): bool
    {
        return $user->hasPermissionTo('create-service-category');
    }

    public function update(User $user, ServiceCategory $serviceCategory): bool
    {
        return $user->hasPermissionTo('update-service-category');
    }

    public function delete(User $user, ServiceCategory $serviceCategory): bool
    {
        return $user->hasPermissionTo('delete-service-category');
    }

    public function restore(User $user, ServiceCategory $serviceCategory): bool
    {
        return $user->hasPermissionTo('delete-service-category');
    }

    public function forceDelete(User $user, ServiceCategory $serviceCategory): bool
    {
        return $user->hasPermissionTo('delete-service-category');
    }
}
