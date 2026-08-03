<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VesselResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'fleet_category_id' => $this->fleet_category_id,
            'name' => $this->name,
            'slug' => $this->slug,
            'imo_number' => $this->imo_number,
            'call_sign' => $this->call_sign,
            'flag' => $this->flag,
            'engine' => $this->engine,
            'speed' => $this->speed,
            'capacity' => $this->capacity,
            'description' => $this->description,
            'status' => $this->status,
            'featured' => $this->featured,
            'published' => $this->published,
            'hero_image_url' => $this->getFirstMediaUrl('hero_image'),
            'technical_drawing_url' => $this->getFirstMediaUrl('technical_drawing'),
            'gallery' => collect($this->getMedia('gallery'))->map(fn ($media) => [
                'id' => $media->id,
                'name' => $media->name,
                'url' => $media->getUrl(),
            ]),
            'brochure_url' => $this->getFirstMediaUrl('brochure'),
            'specification' => $this->relationLoaded('specification') && $this->specification ? [
                'gross_tonnage' => $this->specification->gross_tonnage,
                'deadweight_tonnage' => $this->specification->deadweight_tonnage,
                'length_overall' => $this->specification->length_overall,
                'beam' => $this->specification->beam,
                'draft_depth' => $this->specification->draft_depth,
                'classification' => $this->specification->classification,
            ] : null,
            'category' => new FleetCategoryResource($this->whenLoaded('category')),
            'meta_title' => $this->meta_title,
            'meta_description' => $this->meta_description,
            'meta_keywords' => $this->meta_keywords,
            'created_at' => $this->created_at?->toIso8601String(),
        ];
    }
}
