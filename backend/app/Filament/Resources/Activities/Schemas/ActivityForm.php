<?php

declare(strict_types=1);

namespace App\Filament\Resources\Activities\Schemas;

use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class ActivityForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('log_name'),
                Textarea::make('description')
                    ->required()
                    ->columnSpanFull(),
                TextInput::make('subject_type'),
                TextInput::make('subject_id'),
                TextInput::make('causer_type'),
                TextInput::make('causer_id'),
                TextInput::make('properties'),
                TextInput::make('event'),
                TextInput::make('batch_uuid'),
            ]);
    }
}
