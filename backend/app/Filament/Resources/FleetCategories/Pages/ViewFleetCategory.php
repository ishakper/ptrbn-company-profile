<?php

declare(strict_types=1);

namespace App\Filament\Resources\FleetCategories\Pages;

use App\Filament\Resources\FleetCategories\FleetCategoryResource;
use Filament\Actions\EditAction;
use Filament\Resources\Pages\ViewRecord;

class ViewFleetCategory extends ViewRecord
{
    protected static string $resource = FleetCategoryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            EditAction::make(),
        ];
    }
}
