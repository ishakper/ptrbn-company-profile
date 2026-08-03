<?php

declare(strict_types=1);

namespace Tests\Feature\Api\v1;

use App\Models\Setting;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class SettingManagementTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test listing settings publicly.
     */
    public function test_public_users_can_list_settings(): void
    {
        Setting::create([
            'key' => 'site_name',
            'value' => 'RBN Group',
            'locale' => 'en',
        ]);

        $response = $this->getJson('/api/v1/settings');

        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
            ])
            ->assertJsonStructure([
                'data' => [
                    '*' => ['id', 'key', 'value', 'locale', 'updated_at'],
                ],
            ]);
    }

    /**
     * Test retrieving a specific setting.
     */
    public function test_public_users_can_get_setting_by_key(): void
    {
        Setting::create([
            'key' => 'contact_email',
            'value' => 'info@rbn-group.com',
            'locale' => 'en',
        ]);

        $response = $this->getJson('/api/v1/settings/contact_email');

        $response->assertStatus(200)
            ->assertJsonPath('data.value', 'info@rbn-group.com');
    }

    /**
     * Test updating settings blocks unauthenticated users.
     */
    public function test_unauthenticated_users_cannot_update_settings(): void
    {
        $payload = [
            'key' => 'site_name',
            'value' => 'New Name',
        ];

        $response = $this->postJson('/api/v1/settings', $payload);
        $response->assertStatus(401);
    }

    /**
     * Test authenticated settings updates.
     */
    public function test_authenticated_users_can_update_settings(): void
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $payload = [
            'key' => 'site_name',
            'value' => 'New Name',
            'locale' => 'en',
        ];

        $response = $this->postJson('/api/v1/settings', $payload);

        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
                'message' => 'Setting updated successfully.',
            ]);

        $this->assertDatabaseHas('site_settings', [
            'key' => 'site_name',
            'value' => 'New Name',
        ]);
    }
}
