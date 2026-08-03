<?php

declare(strict_types=1);

namespace App\Filament\Resources\VisionMissions\Pages;

use App\Filament\Resources\VisionMissions\VisionMissionResource;
use Filament\Actions\DeleteAction;
use Filament\Actions\ForceDeleteAction;
use Filament\Actions\RestoreAction;
use Filament\Resources\Pages\EditRecord;

class EditVisionMission extends EditRecord
{
    protected static string $resource = VisionMissionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
            ForceDeleteAction::make(),
            RestoreAction::make(),
        ];
    }
}
