<?php

namespace App\Filament\Resources\MediaItems\Tables;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ForceDeleteBulkAction;
use Filament\Actions\RestoreBulkAction;
use Filament\Actions\ViewAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\TrashedFilter;
use Filament\Tables\Table;

class MediaItemsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                \Filament\Tables\Columns\SpatieMediaLibraryImageColumn::make('image')
                    ->collection('image')
                    ->conversion('thumbnail')
                    ->circular()
                    ->label('Preview'),
                TextColumn::make('title')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('categories')
                    ->badge()
                    ->separator(',')
                    ->searchable(),
                TextColumn::make('tags')
                    ->badge()
                    ->separator(',')
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('visibility')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'published' => 'success',
                        'draft' => 'warning',
                        'archive' => 'danger',
                        default => 'gray',
                    })
                    ->sortable(),
                TextColumn::make('vessel.name')
                    ->label('Vessel')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('photographer')
                    ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('location')
                    ->searchable(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                TrashedFilter::make(),
                \Filament\Tables\Filters\SelectFilter::make('visibility')
                    ->options([
                        'published' => 'Published',
                        'draft' => 'Draft',
                        'archive' => 'Archive',
                    ]),
            ])
            ->actions([
                \Filament\Tables\Actions\ViewAction::make(),
                \Filament\Tables\Actions\EditAction::make(),
                \Filament\Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                \Filament\Tables\Actions\BulkActionGroup::make([
                    \Filament\Tables\Actions\DeleteBulkAction::make(),
                    \Filament\Tables\Actions\ForceDeleteBulkAction::make(),
                    \Filament\Tables\Actions\RestoreBulkAction::make(),
                ]),
            ]);
    }
}
