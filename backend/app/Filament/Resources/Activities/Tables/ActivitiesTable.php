<?php

declare(strict_types=1);

namespace App\Filament\Resources\Activities\Tables;

use Filament\Tables\Actions\ViewAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class ActivitiesTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')
                    ->label('ID'),
                TextColumn::make('log_name')
                    ->searchable(),
                TextColumn::make('subject_type')
                    ->searchable(),
                TextColumn::make('subject_id'),
                TextColumn::make('causer_type')
                    ->searchable(),
                TextColumn::make('causer_id'),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('event')
                    ->searchable(),
                TextColumn::make('batch_uuid'),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                ViewAction::make(),
            ])
            ->bulkActions([
                // Read-only: no bulk deletion of audit logs
            ]);
    }
}
