<?php

declare(strict_types=1);

namespace App\Filament\Resources\CoreValues\Pages;

use App\Filament\Resources\CoreValues\CoreValueResource;
use Filament\Resources\Pages\CreateRecord;

class CreateCoreValue extends CreateRecord
{
    protected static string $resource = CoreValueResource::class;
}
