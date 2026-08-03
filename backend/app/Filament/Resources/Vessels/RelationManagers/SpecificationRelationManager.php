<?php

declare(strict_types=1);

namespace App\Filament\Resources\Vessels\RelationManagers;

use Filament\Actions\BulkActionGroup;
use Filament\Actions\CreateAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ForceDeleteAction;
use Filament\Actions\ForceDeleteBulkAction;
use Filament\Actions\RestoreAction;
use Filament\Actions\RestoreBulkAction;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\TextInput;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\TrashedFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SpecificationRelationManager extends RelationManager
{
    protected static string $relationship = 'specification';

    public function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Grid::make(3)
                    ->schema([
                        TextInput::make('gross_tonnage')
                            ->label('Gross Tonnage (GT)')
                            ->numeric()
                            ->required(),
                        TextInput::make('deadweight_tonnage')
                            ->label('Deadweight Tonnage (DWT)')
                            ->numeric()
                            ->required(),
                        TextInput::make('classification')
                            ->label('Classification Society')
                            ->default('BKI')
                            ->required(),
                    ]),
                Grid::make(3)
                    ->schema([
                        TextInput::make('length_overall')
                            ->label('Length Overall (LOA - m)')
                            ->numeric()
                            ->required(),
                        TextInput::make('beam')
                            ->label('Beam (Width - m)')
                            ->numeric()
                            ->required(),
                        TextInput::make('draft_depth')
                            ->label('Draft Depth (m)')
                            ->numeric()
                            ->required(),
                    ]),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('classification')
            ->columns([
                TextColumn::make('gross_tonnage')
                    ->label('GT')
                    ->sortable(),
                TextColumn::make('deadweight_tonnage')
                    ->label('DWT')
                    ->sortable(),
                TextColumn::make('classification')
                    ->label('Classification')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('length_overall')
                    ->label('LOA')
                    ->sortable(),
                TextColumn::make('beam')
                    ->label('Beam')
                    ->sortable(),
                TextColumn::make('draft_depth')
                    ->label('Draft')
                    ->sortable(),
            ])
            ->filters([
                TrashedFilter::make(),
            ])
            ->headerActions([
                CreateAction::make(),
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
                ForceDeleteAction::make(),
                RestoreAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                    ForceDeleteBulkAction::make(),
                    RestoreBulkAction::make(),
                ]),
            ])
            ->modifyQueryUsing(fn (Builder $query) => $query
                ->withoutGlobalScopes([
                    SoftDeletingScope::class,
                ]));
    }
}
