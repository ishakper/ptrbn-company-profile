<?php

namespace App\Filament\Resources\MediaItems\Schemas;

use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Section;
use Filament\Schemas\Schema;

class MediaItemForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Media Attachment')
                    ->description('Upload the corporate image and define core descriptive attributes.')
                    ->schema([
                        SpatieMediaLibraryFileUpload::make('image')
                            ->collection('image')
                            ->image()
                            ->responsiveImages()
                            ->required()
                            ->maxFiles(1)
                            ->columnSpanFull(),
                        
                        Grid::make(2)
                            ->schema([
                                TextInput::make('title')
                                    ->required()
                                    ->maxLength(255),
                                TextInput::make('alt_text')
                                    ->label('Alt Text (SEO)')
                                    ->maxLength(255),
                            ]),
                        
                        Textarea::make('caption')
                            ->rows(2)
                            ->maxLength(500)
                            ->columnSpanFull(),
                        Textarea::make('description')
                            ->rows(3)
                            ->maxLength(2000)
                            ->columnSpanFull(),
                    ]),

                Section::make('Metadata & Classification')
                    ->description('Classify the image and provide administrative and SEO details.')
                    ->schema([
                        Grid::make(2)
                            ->schema([
                                Select::make('categories')
                                    ->multiple()
                                    ->options([
                                        'hero' => 'Hero Banner',
                                        'fleet' => 'Fleet',
                                        'operations' => 'Vessel Operations',
                                        'cargo' => 'Cargo Loading',
                                        'port' => 'Port Activities',
                                        'office' => 'Office',
                                        'management' => 'Board of Management',
                                        'activities' => 'Company Activities',
                                        'certifications' => 'Certifications',
                                        'projects' => 'Client Projects',
                                        'routes' => 'Shipping Routes',
                                        'gallery' => 'Gallery',
                                        'news' => 'News',
                                        'career' => 'Career',
                                        'culture' => 'Corporate Culture',
                                        'csr' => 'CSR',
                                    ])
                                    ->required(),
                                
                                Select::make('visibility')
                                    ->options([
                                        'published' => 'Published',
                                        'draft' => 'Draft',
                                        'archive' => 'Archive',
                                    ])
                                    ->default('published')
                                    ->required(),
                            ]),

                        TagsInput::make('tags')
                            ->placeholder('Add keywords...')
                            ->columnSpanFull(),

                        Grid::make(3)
                            ->schema([
                                TextInput::make('photographer')
                                    ->maxLength(255),
                                TextInput::make('copyright')
                                    ->default('© PT. Pelayaran Nasional Radhika Bahari Nusantara')
                                    ->maxLength(255),
                                TextInput::make('location')
                                    ->placeholder('Surabaya, Indonesia')
                                    ->maxLength(255),
                            ]),

                        Grid::make(3)
                            ->schema([
                                Select::make('vessel_id')
                                    ->label('Vessel Relation')
                                    ->relationship('vessel', 'name'),
                                TextInput::make('project_id')
                                    ->label('Project ID Relation (UUID)'),
                                TextInput::make('news_id')
                                    ->label('News ID Relation (UUID)'),
                            ]),
                    ]),
            ]);
    }
}
