<?php

declare(strict_types=1);

namespace Tests\Feature\Api\v1;

use App\Models\Role;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class UserManagementTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test unauthenticated access is blocked.
     */
    public function test_unauthenticated_users_cannot_access_user_endpoints(): void
    {
        $response = $this->getJson('/api/v1/users');
        $response->assertStatus(401);
    }

    /**
     * Test authenticated access to user lists.
     */
    public function test_authenticated_users_can_list_users(): void
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $response = $this->getJson('/api/v1/users');

        $response->assertStatus(200)
            ->assertJsonStructure([
                'success',
                'data' => [
                    '*' => ['id', 'name', 'email', 'roles', 'created_at'],
                ],
                'meta' => ['current_page', 'last_page', 'per_page', 'total'],
            ]);
    }

    /**
     * Test creating a user.
     */
    public function test_can_create_user_with_valid_data(): void
    {
        $admin = User::factory()->create();
        Sanctum::actingAs($admin);

        // Ensure Spatie role exists for validation
        Role::create(['name' => 'hr-admin', 'guard_name' => 'web']);

        $payload = [
            'name' => 'John Doe',
            'email' => 'john@rbn-group.com',
            'password' => 'secret12345',
            'roles' => ['hr-admin'],
        ];

        $response = $this->postJson('/api/v1/users', $payload);

        $response->assertStatus(201)
            ->assertJson([
                'success' => true,
                'message' => 'User created successfully.',
            ])
            ->assertJsonStructure([
                'data' => ['id', 'name', 'email', 'roles', 'created_at'],
            ]);

        $this->assertDatabaseHas('users', [
            'email' => 'john@rbn-group.com',
        ]);
    }

    /**
     * Test updating a user.
     */
    public function test_can_update_user_details(): void
    {
        $admin = User::factory()->create();
        Sanctum::actingAs($admin);

        $targetUser = User::factory()->create([
            'name' => 'Old Name',
            'email' => 'old@rbn-group.com',
        ]);

        $payload = [
            'name' => 'New Name',
            'email' => 'new@rbn-group.com',
        ];

        $response = $this->putJson("/api/v1/users/{$targetUser->id}", $payload);

        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
                'message' => 'User updated successfully.',
            ]);

        $this->assertDatabaseHas('users', [
            'id' => $targetUser->id,
            'name' => 'New Name',
            'email' => 'new@rbn-group.com',
        ]);
    }

    /**
     * Test deleting a user.
     */
    public function test_can_delete_user(): void
    {
        $admin = User::factory()->create();
        Sanctum::actingAs($admin);

        $targetUser = User::factory()->create();

        $response = $this->deleteJson("/api/v1/users/{$targetUser->id}");

        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
                'message' => 'User deleted successfully.',
            ]);

        $this->assertDatabaseMissing('users', [
            'id' => $targetUser->id,
        ]);
    }
}
