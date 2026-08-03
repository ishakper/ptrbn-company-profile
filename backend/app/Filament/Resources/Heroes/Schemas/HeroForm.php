<?php

declare(strict_types=1);

namespace App\Filament\Resources\Heroes\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class HeroForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required(),
                TextInput::make('subtitle'),
                TextInput::make('badge'),
                TextInput::make('primary_button_text'),
                TextInput::make('primary_button_url')
                    ->url(),
                TextInput::make('secondary_button_text'),
                TextInput::make('secondary_button_url')
                    ->url(),
                TextInput::make('status')
                    ->required()
                    ->default('draft'),
                TextInput::make('order')
                    ->required()
                    ->numeric()
                    ->default(0),
                TextInput::make('meta_title'),
                Textarea::make('meta_description')
                    ->columnSpanFull(),
                TextInput::make('meta_keywords'),
            ]);
    }
}
