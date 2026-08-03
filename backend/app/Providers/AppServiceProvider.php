<?php

declare(strict_types=1);

namespace App\Providers;

use App\Repositories\Contracts\FleetCategoryRepositoryInterface;
use App\Repositories\Contracts\ServiceCategoryRepositoryInterface;
use App\Repositories\Contracts\ServiceRepositoryInterface;
use App\Repositories\Contracts\SettingRepositoryInterface;
use App\Repositories\Contracts\UserRepositoryInterface;
use App\Repositories\Contracts\VesselRepositoryInterface;
use App\Repositories\Eloquent\FleetCategoryRepository;
use App\Repositories\Eloquent\ServiceCategoryRepository;
use App\Repositories\Eloquent\ServiceRepository;
use App\Repositories\Eloquent\SettingRepository;
use App\Repositories\Eloquent\UserRepository;
use App\Repositories\Eloquent\VesselRepository;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(
            UserRepositoryInterface::class,
            UserRepository::class
        );

        $this->app->bind(
            SettingRepositoryInterface::class,
            SettingRepository::class
        );

        $this->app->bind(
            ServiceCategoryRepositoryInterface::class,
            ServiceCategoryRepository::class
        );

        $this->app->bind(
            ServiceRepositoryInterface::class,
            ServiceRepository::class
        );

        $this->app->bind(
            FleetCategoryRepositoryInterface::class,
            FleetCategoryRepository::class
        );

        $this->app->bind(
            VesselRepositoryInterface::class,
            VesselRepository::class
        );
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Gate::before(function ($user, $ability) {
            return $user->hasRole('super-admin') ? true : null;
        });
    }
}
