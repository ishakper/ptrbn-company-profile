<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\PermissionRegistrar;

class RolesAndPermissionsSeeder extends Seeder
{
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // 1. Create permissions
        $permissions = [
            'view-any service-category', 'create service-category', 'update service-category', 'delete service-category',
            'view-any service', 'create service', 'update service', 'delete service',
            'view-any fleet-category', 'create fleet-category', 'update fleet-category', 'delete fleet-category',
            'view-any vessel', 'create vessel', 'update vessel', 'delete vessel',
            'view-any fleet-specification', 'create fleet-specification', 'update fleet-specification', 'delete fleet-specification',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission, 'guard_name' => 'web']);
        }

        // 2. Create roles and assign permissions
        $adminRole = Role::firstOrCreate(['name' => 'super-admin', 'guard_name' => 'web']);
        $adminRole->syncPermissions(Permission::all());

        // 3. Create default Administrator User
        $admin = User::firstOrCreate(
            ['email' => 'admin@ptrbn.co.id'],
            [
                'name' => 'Administrator',
                'password' => Hash::make('AdminRBN2026!'),
                'email_verified_at' => now(),
            ]
        );

        $admin->assignRole($adminRole);
    }
}
