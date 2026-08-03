<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\FleetSpecification;
use App\Models\Vessel;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<FleetSpecification>
 */
class FleetSpecificationFactory extends Factory
{
    protected $model = FleetSpecification::class;

    public function definition(): array
    {
        return [
            'vessel_id' => Vessel::factory(),
            'gross_tonnage' => fake()->numberBetween(5000, 35000),
            'deadweight_tonnage' => fake()->numberBetween(7000, 50000),
            'length_overall' => fake()->randomFloat(2, 80, 250),
            'draft_depth' => fake()->randomFloat(2, 4, 15),
            'classification' => 'BKI',
        ];
    }
}
