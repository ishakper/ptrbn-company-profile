<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class MediaItem extends Model implements HasMedia
{
    use HasFactory, HasUuids, InteractsWithMedia, LogsActivity, SoftDeletes;

    protected $fillable = [
        'title',
        'caption',
        'description',
        'alt_text',
        'seo_title',
        'copyright',
        'photographer',
        'location',
        'visibility',
        'categories',
        'tags',
        'vessel_id',
        'project_id',
        'news_id',
    ];

    protected function casts(): array
    {
        return [
            'categories' => 'array',
            'tags' => 'array',
        ];
    }

    public function vessel(): BelongsTo
    {
        return $this->belongsTo(Vessel::class, 'vessel_id');
    }

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logFillable()
            ->logOnlyDirty();
    }

    public function registerMediaConversions(?Media $media = null): void
    {
        $this->addMediaConversion('thumbnail')
            ->width(150)
            ->height(150)
            ->sharpen(10)
            ->nonQueued();

        $this->addMediaConversion('large')
            ->width(1000)
            ->height(1000)
            ->nonQueued();
    }
}
