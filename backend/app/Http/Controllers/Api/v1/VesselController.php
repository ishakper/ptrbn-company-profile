<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\VesselResource;
use App\Repositories\Contracts\VesselRepositoryInterface;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class VesselController extends Controller
{
    public function __construct(
        protected VesselRepositoryInterface $repository
    ) {}

    public function index(Request $request): JsonResponse
    {
        $filters = $request->only(['search', 'fleet_category_id', 'status', 'featured', 'published', 'sort', 'direction']);

        // Public pages only show published vessels
        if (! auth()->check()) {
            $filters['published'] = true;
        }

        $perPage = (int) $request->query('per_page', 15);
        $vessels = $this->repository->paginateWithFilters($perPage, $filters);

        return $this->successResponse(VesselResource::collection($vessels));
    }

    public function show(string $slug): JsonResponse
    {
        $vessel = $this->repository->findBySlug($slug);

        if (! $vessel) {
            return $this->errorResponse("Vessel '{$slug}' not found.", 404);
        }

        // Public check
        if (! auth()->check() && ! $vessel->published) {
            return $this->errorResponse('Vessel not found or is unpublished.', 404);
        }

        return $this->successResponse(new VesselResource($vessel));
    }
}
