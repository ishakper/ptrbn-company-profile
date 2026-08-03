<?php

declare(strict_types=1);

namespace App\Filament\Widgets;

use App\Models\Activity;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

class LatestActivities extends TableWidget
{
    protected static ?int $sort = 2;

    protected int|string|array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(fn (): Builder => Activity::query()->latest()->limit(5))
            ->columns([
                TextColumn::make('log_name')
                    ->badge()
                    ->sortable(),
                TextColumn::make('description')
                    ->searchable(),
                TextColumn::make('subject_type')
                    ->label('Resource Type')
                    ->formatStateUsing(fn (string $state): string => Str::afterLast($state, '\\')),
                TextColumn::make('causer.name')
                    ->label('Admin User')
                    ->default('System / Seeder'),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable(),
            ]);
    }
}
