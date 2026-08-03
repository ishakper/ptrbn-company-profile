<?php

namespace App\Filament\Resources\MediaItems\Schemas;

use App\Models\MediaItem;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Schema;

class MediaItemInfolist
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextEntry::make('id')
                    ->label('ID'),
                TextEntry::make('title'),
                TextEntry::make('caption')
                    ->placeholder('-')
                    ->columnSpanFull(),
                TextEntry::make('description')
                    ->placeholder('-')
                    ->columnSpanFull(),
                TextEntry::make('alt_text')
                    ->placeholder('-'),
                TextEntry::make('seo_title')
                    ->placeholder('-'),
                TextEntry::make('copyright')
                    ->placeholder('-'),
                TextEntry::make('photographer')
                    ->placeholder('-'),
                TextEntry::make('location')
                    ->placeholder('-'),
                TextEntry::make('visibility'),
                TextEntry::make('vessel.name')
                    ->label('Vessel')
                    ->placeholder('-'),
                TextEntry::make('project_id')
                    ->placeholder('-'),
                TextEntry::make('news_id')
                    ->placeholder('-'),
                TextEntry::make('deleted_at')
                    ->dateTime()
                    ->visible(fn (MediaItem $record): bool => $record->trashed()),
                TextEntry::make('created_at')
                    ->dateTime()
                    ->placeholder('-'),
                TextEntry::make('updated_at')
                    ->dateTime()
                    ->placeholder('-'),
            ]);
    }
}
