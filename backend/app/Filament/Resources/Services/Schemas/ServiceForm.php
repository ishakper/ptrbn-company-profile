<?php

declare(strict_types=1);

namespace App\Filament\Resources\Services\Schemas;

use App\Models\ServiceCategory;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class ServiceForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('General Logistics Settings')
                    ->description('Specify main B2B service specifications.')
                    ->schema([
                        Grid::make(3)
                            ->schema([
                                Select::make('service_category_id')
                                    ->label('Logistics Category')
                                    ->options(ServiceCategory::pluck('name', 'id')->toArray())
                                    ->required(),
                                TextInput::make('title')
                                    ->required()
                                    ->live(onBlur: true)
                                    ->afterStateUpdated(fn (string $state, callable $set) => $set('slug', Str::slug($state))),
                                TextInput::make('slug')
                                    ->required()
                                    ->unique(ignoreRecord: true),
                            ]),
                        Textarea::make('short_description')
                            ->rows(3)
                            ->columnSpanFull(),
                        RichEditor::make('description')
                            ->required()
                            ->columnSpanFull(),
                    ]),

                Section::make('Selling Primitives')
                    ->description('Define cargo advantages, delivery workflows and coverage.')
                    ->schema([
                        Repeater::make('advantages')
                            ->simple(TextInput::make('advantage'))
                            ->columnSpanFull(),
                        Repeater::make('workflow')
                            ->schema([
                                TextInput::make('step')->numeric()->required(),
                                TextInput::make('title')->required(),
                                Textarea::make('description')->rows(2)->columnSpanFull(),
                            ])
                            ->columns(2)
                            ->columnSpanFull(),
                        Textarea::make('coverage_area')
                            ->rows(2)
                            ->columnSpanFull(),
                    ]),

                Section::make('Call to Action (CTA)')
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                TextInput::make('cta.text')
                                    ->label('CTA Button Text')
                                    ->default('Request Shipping Quote'),
                                TextInput::make('cta.url')
                                    ->label('CTA Link URL')
                                    ->default('/contact'),
                            ]),
                    ]),

                Section::make('Media Library uploads')
                    ->description('Upload thumbnails, brochures, and dynamic gallery images.')
                    ->schema([
                        Grid::make(3)
                            ->schema([
                                SpatieMediaLibraryFileUpload::make('thumbnail')
                                    ->collection('thumbnail')
                                    ->image()
                                    ->maxSize(2048),
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

                Section::make('Status & Ordering')
                    ->schema([
                        Grid::make(4)
                            ->schema([
                                Select::make('status')
                                    ->options([
                                        'draft' => 'Draft',
                                        'published' => 'Published',
                                    ])
                                    ->required()
                                    ->default('published'),
                                DateTimePicker::make('publish_date')
                                    ->default(now()),
                                TextInput::make('order')
                                    ->numeric()
                                    ->required()
                                    ->default(0),
                                Toggle::make('featured')
                                    ->inline(false)
                                    ->default(false),
                            ]),
                    ]),

                Section::make('SEO Metadata & JSON-LD')
                    ->description('Search engine indexing parameters.')
                    ->schema([
                        TextInput::make('meta_title'),
                        Textarea::make('meta_description')
                            ->columnSpanFull(),
                        TextInput::make('meta_keywords'),
                    ]),
            ]);
    }
}
