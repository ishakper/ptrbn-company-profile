<?php

declare(strict_types=1);

namespace App\Filament\Resources\Roles\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class RoleForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required(),
                TextInput::make('guard_name')
                    ->default('web')
                    ->required(),
                Select::make('permissions')
                    ->multiple()
                    ->relationship('permissions', 'name')
                    ->preload(),
            ]);
    }
}
