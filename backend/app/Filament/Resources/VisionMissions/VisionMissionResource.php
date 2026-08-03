<?php

declare(strict_types=1);

namespace App\Filament\Resources\VisionMissions;

use App\Filament\Resources\VisionMissions\Pages\CreateVisionMission;
use App\Filament\Resources\VisionMissions\Pages\EditVisionMission;
use App\Filament\Resources\VisionMissions\Pages\ListVisionMissions;
use App\Filament\Resources\VisionMissions\Schemas\VisionMissionForm;
use App\Filament\Resources\VisionMissions\Tables\VisionMissionsTable;
use App\Models\VisionMission;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class VisionMissionResource extends Resource
{
    protected static ?string $model = VisionMission::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    public static function form(Schema $schema): Schema
    {
        return VisionMissionForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return VisionMissionsTable::configure($table);
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
            'index' => ListVisionMissions::route('/'),
            'create' => CreateVisionMission::route('/create'),
            'edit' => EditVisionMission::route('/{record}/edit'),
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
