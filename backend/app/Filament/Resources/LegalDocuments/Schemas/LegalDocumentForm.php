<?php

declare(strict_types=1);

namespace App\Filament\Resources\LegalDocuments\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class LegalDocumentForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required(),
                TextInput::make('document_number')
                    ->required(),
                TextInput::make('issuing_authority')
                    ->required(),
                DatePicker::make('issue_date'),
                DatePicker::make('expiry_date'),
                Textarea::make('summary')
                    ->columnSpanFull(),
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
