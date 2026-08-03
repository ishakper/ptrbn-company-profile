<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ServiceResource;
use App\Repositories\Contracts\ServiceRepositoryInterface;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function __construct(
        protected ServiceRepositoryInterface $repository
    ) {}

    public function index(Request $request): JsonResponse
    {
        $filters = $request->only(['search', 'service_category_id', 'featured', 'status', 'sort', 'direction']);

        // Public pages only show published items
        if (! auth()->check()) {
            $filters['status'] = 'published';
        }

        $perPage = (int) $request->query('per_page', 15);
        $services = $this->repository->paginateWithFilters($perPage, $filters);

        return $this->successResponse(ServiceResource::collection($services));
    }

    public function show(string $slug): JsonResponse
    {
        $service = $this->repository->findBySlug($slug);

        if (! $service) {
            return $this->errorResponse("Service '{$slug}' not found.", 404);
        }

        // Public page details checking
        if (! auth()->check() && $service->status !== 'published') {
            return $this->errorResponse('Service not found or is in draft.', 404);
        }

        return $this->successResponse(new ServiceResource($service));
    }
}
