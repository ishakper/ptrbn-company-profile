<?php

declare(strict_types=1);

namespace App\Filament\Resources\FleetCategories;

use App\Filament\Resources\FleetCategories\Pages\CreateFleetCategory;
use App\Filament\Resources\FleetCategories\Pages\EditFleetCategory;
use App\Filament\Resources\FleetCategories\Pages\ListFleetCategories;
use App\Filament\Resources\FleetCategories\Pages\ViewFleetCategory;
use App\Filament\Resources\FleetCategories\Schemas\FleetCategoryForm;
use App\Filament\Resources\FleetCategories\Schemas\FleetCategoryInfolist;
use App\Filament\Resources\FleetCategories\Tables\FleetCategoriesTable;
use App\Models\FleetCategory;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class FleetCategoryResource extends Resource
{
    protected static ?string $model = FleetCategory::class;

    protected static string|BackedEnum|null $navigationIcon = 'heroicon-o-square-3-stack-3d';

    protected static string|\UnitEnum|null $navigationGroup = 'Fleet';

    protected static ?string $recordTitleAttribute = 'name';

    public static function form(Schema $schema): Schema
    {
        return FleetCategoryForm::configure($schema);
    }

    public static function infolist(Schema $schema): Schema
    {
        return FleetCategoryInfolist::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return FleetCategoriesTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListFleetCategories::route('/'),
            'create' => CreateFleetCategory::route('/create'),
            'view' => ViewFleetCategory::route('/{record}'),
            'edit' => EditFleetCategory::route('/{record}/edit'),
        ];
    }

    public static function getRecordRouteBindingEloquentQuery(): Builder
    {
        return parent::getRecordRouteBindingEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }
}
