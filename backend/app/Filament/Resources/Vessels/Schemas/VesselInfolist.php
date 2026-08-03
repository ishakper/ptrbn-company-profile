<?php

declare(strict_types=1);

namespace App\Filament\Resources\Vessels\Schemas;

use Filament\Infolists\Components\Section;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class VesselInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Vessel Operational Details')
                    ->schema([
                        TextEntry::make('id')
                            ->label('UUID'),
                        TextEntry::make('name'),
                        TextEntry::make('slug'),
                        TextEntry::make('imo_number')
                            ->label('IMO Number'),
                        TextEntry::make('status')
                            ->badge(),
                        TextEntry::make('featured')
                            ->badge()
                            ->color(fn (bool $state): string => $state ? 'success' : 'gray'),
                    ]),
            ]);
    }
}
