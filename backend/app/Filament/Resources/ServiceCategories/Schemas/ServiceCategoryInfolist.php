<?php

declare(strict_types=1);

namespace App\Filament\Resources\ServiceCategories\Schemas;

use Filament\Infolists\Components\Section;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class ServiceCategoryInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Service Category Details')
                    ->schema([
                        TextEntry::make('id')
                            ->label('UUID'),
                        TextEntry::make('name'),
                        TextEntry::make('slug'),
                        TextEntry::make('description')
                            ->html(),
                        TextEntry::make('status')
                            ->badge(),
                        TextEntry::make('order'),
                        TextEntry::make('created_at')
                            ->dateTime(),
                        TextEntry::make('updated_at')
                            ->dateTime(),
                    ]),
            ]);
    }
}
