<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Models\Service;
use App\Models\ServiceCategory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Service>
 */
class ServiceFactory extends Factory
{
    protected $model = Service::class;

    public function definition(): array
    {
        $title = fake()->unique()->words(3, true);

        return [
            'service_category_id' => ServiceCategory::factory(),
            'title' => Str::title($title),
            'slug' => Str::slug($title),
            'description' => fake()->paragraph(3),
            'advantages' => [
                fake()->sentence(),
                fake()->sentence(),
                fake()->sentence(),
            ],
            'status' => 'published',
        ];
    }
}
