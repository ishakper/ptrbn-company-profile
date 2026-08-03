<?php

declare(strict_types=1);

namespace App\Filament\Resources\Services\Schemas;

use Filament\Infolists\Components\Section;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class ServiceInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Logistics Service Details')
                    ->schema([
                        TextEntry::make('id')
                            ->label('UUID'),
                        TextEntry::make('title'),
                        TextEntry::make('slug'),
                        TextEntry::make('short_description'),
                        TextEntry::make('status')
                            ->badge(),
                        TextEntry::make('publish_date')
                            ->dateTime(),
                        TextEntry::make('featured')
                            ->badge()
                            ->color(fn (bool $state): string => $state ? 'success' : 'gray'),
                    ]),
            ]);
    }
}
