<?php

declare(strict_types=1);

namespace App\Filament\Widgets;

use App\Models\Media;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;
use Illuminate\Database\Eloquent\Builder;

class LatestUploads extends TableWidget
{
    protected static ?int $sort = 3;

    protected int|string|array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(fn (): Builder => Media::query()->latest()->limit(5))
            ->columns([
                TextColumn::make('name')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('file_name')
                    ->label('File Name')
                    ->searchable(),
                TextColumn::make('mime_type')
                    ->label('MIME Type')
                    ->badge()
                    ->color('gray'),
                TextColumn::make('size')
                    ->label('File Size')
                    ->formatStateUsing(fn (int $state): string => number_format($state / 1024, 2).' KB')
                    ->sortable(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable(),
            ]);
    }
}
