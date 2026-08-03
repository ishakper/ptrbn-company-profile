<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\FleetCategory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<FleetCategory>
 */
class FleetCategoryFactory extends Factory
{
    protected $model = FleetCategory::class;

    public function definition(): array
    {
        $name = fake()->unique()->words(2, true);

        return [
            'name' => Str::title($name),
            'slug' => Str::slug($name),
            'description' => fake()->paragraph(),
            'status' => 'published',
        ];
    }
}
