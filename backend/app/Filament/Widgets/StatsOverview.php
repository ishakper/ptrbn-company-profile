<?php

declare(strict_types=1);

namespace App\Filament\Widgets;

use App\Models\FleetCategory;
use App\Models\Service;
use App\Models\ServiceCategory;
use App\Models\Vessel;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends StatsOverviewWidget
{
    protected function getStats(): array
    {
        $totalServices = Service::count();
        $publishedServices = Service::where('status', 'published')->count();
        $totalFleet = Vessel::count();
        $activeFleet = Vessel::where('status', 'active')->count();

        $draftContent = Service::where('status', 'draft')->count()
            + Vessel::where('published', false)->count()
            + ServiceCategory::where('status', 'draft')->count()
            + FleetCategory::where('status', 'draft')->count();

        return [
            Stat::make('Total Services', $totalServices)
                ->description('Total cargo shipping & B2B services')
                ->descriptionIcon('heroicon-m-wrench-screwdriver')
                ->color('success'),
            Stat::make('Published Services', $publishedServices)
                ->description('Active in public catalogs')
                ->descriptionIcon('heroicon-m-eye')
                ->color('info'),
            Stat::make('Total Fleet Count', $totalFleet)
                ->description('Registered RBN vessels')
                ->descriptionIcon('heroicon-m-shield-check')
                ->color('success'),
            Stat::make('Active Fleet', $activeFleet)
                ->description('Operational ships sailing')
                ->descriptionIcon('heroicon-m-arrow-trending-up')
                ->color('success'),
            Stat::make('Draft / Hidden Items', $draftContent)
                ->description('Items waiting publication reviews')
                ->descriptionIcon('heroicon-m-eye-slash')
                ->color('warning'),
        ];
    }
}
