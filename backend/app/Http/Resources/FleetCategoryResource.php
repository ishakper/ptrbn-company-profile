<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FleetCategoryResource extends JsonResource
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
            'vessels' => VesselResource::collection($this->whenLoaded('vessels')),
            'created_at' => $this->created_at?->toIso8601String(),
        ];
    }
}
