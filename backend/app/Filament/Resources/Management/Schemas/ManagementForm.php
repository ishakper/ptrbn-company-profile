<?php

declare(strict_types=1);

namespace App\Filament\Resources\Management\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class ManagementForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required(),
                TextInput::make('slug')
                    ->required(),
                TextInput::make('position')
                    ->required(),
                TextInput::make('department'),
                Textarea::make('bio')
                    ->columnSpanFull(),
                TextInput::make('email')
                    ->label('Email address')
                    ->email(),
                TextInput::make('linkedin_url')
                    ->url(),
                TextInput::make('order')
                    ->required()
                    ->numeric()
                    ->default(0),
                TextInput::make('status')
                    ->required()
                    ->default('draft'),
                TextInput::make('meta_title'),
                Textarea::make('meta_description')
                    ->columnSpanFull(),
                TextInput::make('meta_keywords'),
            ]);
    }
}
