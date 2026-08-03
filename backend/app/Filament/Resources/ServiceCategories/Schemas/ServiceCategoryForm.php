<?php

declare(strict_types=1);

namespace App\Filament\Resources\ServiceCategories\Schemas;

use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class ServiceCategoryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('General Information')
                    ->description('Primary category settings.')
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                TextInput::make('name')
                                    ->required()
                                    ->live(onBlur: true)
                                    ->afterStateUpdated(fn (string $state, callable $set) => $set('slug', Str::slug($state))),
                                TextInput::make('slug')
                                    ->required()
                                    ->unique(ignoreRecord: true),
                            ]),
                        Textarea::make('description')
                            ->columnSpanFull(),
                    ]),

                Section::make('Branding & Media')
                    ->description('Upload category assets.')
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                SpatieMediaLibraryFileUpload::make('icon')
                                    ->collection('icon')
                                    ->image()
                                    ->maxSize(1024),
                                SpatieMediaLibraryFileUpload::make('image')
                                    ->collection('image')
                                    ->image()
                                    ->maxSize(2048),
                            ]),
                    ]),

                Section::make('Status & Ordering')
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                Select::make('status')
                                    ->options([
                                        'draft' => 'Draft',
                                        'published' => 'Published',
                                    ])
                                    ->required()
                                    ->default('published'),
                                TextInput::make('order')
                                    ->numeric()
                                    ->required()
                                    ->default(0),
                            ]),
                    ]),

                Section::make('SEO Metadata')
                    ->description('Search engine optimization properties.')
                    ->schema([
                        TextInput::make('meta_title'),
                        Textarea::make('meta_description')
                            ->columnSpanFull(),
                        TextInput::make('meta_keywords'),
                    ]),
            ]);
    }
}
