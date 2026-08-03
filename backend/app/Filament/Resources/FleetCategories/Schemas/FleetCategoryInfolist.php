<?php

declare(strict_types=1);

namespace App\Filament\Resources\FleetCategories\Schemas;

use Filament\Infolists\Components\Section;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class FleetCategoryInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Fleet Category Details')
                    ->schema([
                        TextEntry::make('id')
                            ->label('UUID'),
                        TextEntry::make('name'),
                        TextEntry::make('slug'),
                        TextEntry::make('description'),
                        TextEntry::make('status')
                            ->badge(),
                        TextEntry::make('order'),
                    ]),
            ]);
    }
}
