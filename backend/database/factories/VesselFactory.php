<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\FleetCategory;
use App\Models\Vessel;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Vessel>
 */
class VesselFactory extends Factory
{
    protected $model = Vessel::class;

    public function definition(): array
    {
        return [
            'fleet_category_id' => FleetCategory::factory(),
            'name' => 'MV '.fake()->unique()->firstName().' '.fake()->randomElement(['Indah', 'Jaya', 'Sejahtera', 'Progress', 'Pioneer']),
            'imo_number' => 'IMO'.fake()->unique()->randomNumber(7, true),
            'status' => fake()->randomElement(['active', 'maintenance', 'charter']),
        ];
    }
}
