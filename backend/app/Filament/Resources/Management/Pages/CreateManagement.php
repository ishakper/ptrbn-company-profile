<?php

declare(strict_types=1);

namespace App\Filament\Resources\Management\Pages;

use App\Filament\Resources\Management\ManagementResource;
use Filament\Resources\Pages\CreateRecord;

class CreateManagement extends CreateRecord
{
    protected static string $resource = ManagementResource::class;
}
