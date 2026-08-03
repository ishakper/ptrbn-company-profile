<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ServiceResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'service_category_id' => $this->service_category_id,
            'title' => $this->title,
            'slug' => $this->slug,
            'short_description' => $this->short_description,
            'description' => $this->description,
            'advantages' => $this->advantages,
            'workflow' => $this->workflow,
            'coverage_area' => $this->coverage_area,
            'cta' => $this->cta,
            'featured' => $this->featured,
            'order' => $this->order,
            'status' => $this->status,
            'publish_date' => $this->publish_date?->toIso8601String(),
            'thumbnail_url' => $this->getFirstMediaUrl('thumbnail'),
            'gallery' => collect($this->getMedia('gallery'))->map(fn ($media) => [
                'id' => $media->id,
                'name' => $media->name,
                'url' => $media->getUrl(),
            ]),
            'brochure_url' => $this->getFirstMediaUrl('brochure'),
            'meta_title' => $this->meta_title,
            'meta_description' => $this->meta_description,
            'meta_keywords' => $this->meta_keywords,
            'category' => new ServiceCategoryResource($this->whenLoaded('category')),
            'created_at' => $this->created_at?->toIso8601String(),
        ];
    }
}
