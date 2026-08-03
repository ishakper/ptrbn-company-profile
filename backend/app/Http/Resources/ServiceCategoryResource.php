<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ServiceCategoryResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'description' => $this->description,
            'status' => $this->status,
            'order' => $this->order,
            'icon_url' => $this->getFirstMediaUrl('icon'),
            'image_url' => $this->getFirstMediaUrl('image'),
            'meta_title' => $this->meta_title,
            'meta_description' => $this->meta_description,
            'meta_keywords' => $this->meta_keywords,
            'services' => ServiceResource::collection($this->whenLoaded('services')),
            'created_at' => $this->created_at?->toIso8601String(),
        ];
    }
}
