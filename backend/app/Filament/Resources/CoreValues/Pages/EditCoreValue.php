<?php

declare(strict_types=1);

namespace App\Filament\Resources\CoreValues\Pages;

use App\Filament\Resources\CoreValues\CoreValueResource;
use Filament\Actions\DeleteAction;
use Filament\Actions\ForceDeleteAction;
use Filament\Actions\RestoreAction;
use Filament\Resources\Pages\EditRecord;

class EditCoreValue extends EditRecord
{
    protected static string $resource = CoreValueResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
            ForceDeleteAction::make(),
            RestoreAction::make(),
        ];
    }
}
