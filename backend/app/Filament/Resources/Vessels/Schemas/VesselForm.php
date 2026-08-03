<?php

declare(strict_types=1);

namespace App\Filament\Resources\Vessels\Schemas;

use App\Models\FleetCategory;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class VesselForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('General Vessel Information')
                    ->schema([
                        Grid::make(3)
                            ->schema([
                                Select::make('fleet_category_id')
                                    ->label('Vessel Category')
                                    ->options(FleetCategory::pluck('name', 'id')->toArray())
                                    ->required(),
                                TextInput::make('name')
                                    ->required()
                                    ->live(onBlur: true)
                                    ->afterStateUpdated(fn (string $state, callable $set) => $set('slug', Str::slug($state))),
                                TextInput::make('slug')
                                    ->required()
                                    ->unique(ignoreRecord: true),
                            ]),
                        Grid::make(3)
                            ->schema([
                                TextInput::make('imo_number')
                                    ->label('IMO Number')
                                    ->required()
                                    ->unique(ignoreRecord: true)
                                    ->minLength(7)
                                    ->maxLength(10),
                                TextInput::make('call_sign')
                                    ->label('Call Sign'),
                                TextInput::make('flag')
                                    ->default('Indonesia')
                                    ->required(),
                            ]),
                        Textarea::make('description')
                            ->columnSpanFull(),
                    ]),

                Section::make('Technical Specifications (Basic)')
                    ->schema([
                        Grid::make(3)
                            ->schema([
                                TextInput::make('engine')
                                    ->label('Engine Spec / Propulsion'),
                                TextInput::make('speed')
                                    ->label('Service Speed (Knots)')
                                    ->numeric(),
                                TextInput::make('capacity')
                                    ->label('Cargo Capacity (e.g. TEU / CBM)'),
                            ]),
                    ]),

                Section::make('Operational & Visibility Status')
                    ->schema([
                        Grid::make(3)
                            ->schema([
                                Select::make('status')
                                    ->label('Operational Status')
                                    ->options([
                                        'active' => 'Active / Sailing',
                                        'maintenance' => 'Under Maintenance',
                                        'charter' => 'On Charter',
                                    ])
                                    ->required()
                                    ->default('active'),
                                Toggle::make('featured')
                                    ->label('Featured Vessel')
                                    ->inline(false)
                                    ->default(false),
                                Toggle::make('published')
                                    ->label('Published to Public Grid')
                                    ->inline(false)
                                    ->default(true),
                            ]),
                    ]),

                Section::make('Vessel Media Assets')
                    ->description('Upload drawings, brochures, and photos.')
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                SpatieMediaLibraryFileUpload::make('hero_image')
                                    ->collection('hero_image')
                                    ->image()
                                    ->maxSize(2048),
                                SpatieMediaLibraryFileUpload::make('technical_drawing')
                                    ->collection('technical_drawing')
                                    ->image()
                                    ->maxSize(3072),
                                SpatieMediaLibraryFileUpload::make('gallery')
                                    ->collection('gallery')
                                    ->image()
                                    ->multiple()
                                    ->maxSize(2048),
                                SpatieMediaLibraryFileUpload::make('brochure')
                                    ->collection('brochure')
                                    ->acceptedFileTypes(['application/pdf'])
                                    ->maxSize(5120),
                            ]),
                    ]),

                Section::make('SEO Metadata')
                    ->schema([
                        TextInput::make('meta_title'),
                        Textarea::make('meta_description')
                            ->columnSpanFull(),
                        TextInput::make('meta_keywords'),
                    ]),
            ]);
    }
}
