<?php

declare(strict_types=1);

namespace App\Filament\Resources\Settings\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class SettingForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('key')
                    ->disabled(fn (string $context): bool => $context === 'edit')
                    ->required(),
                Textarea::make('value')
                    ->columnSpanFull(),
                TextInput::make('locale')
                    ->required()
                    ->default('en'),
            ]);
    }
}
