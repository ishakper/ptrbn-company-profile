<?php

declare(strict_types=1);

namespace App\Filament\Resources\FleetCategories\Pages;

use App\Filament\Resources\FleetCategories\FleetCategoryResource;
use Filament\Actions\DeleteAction;
use Filament\Actions\ForceDeleteAction;
use Filament\Actions\RestoreAction;
use Filament\Actions\ViewAction;
use Filament\Resources\Pages\EditRecord;

class EditFleetCategory extends EditRecord
{
    protected static string $resource = FleetCategoryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            ViewAction::make(),
            DeleteAction::make(),
            ForceDeleteAction::make(),
            RestoreAction::make(),
        ];
    }
}
