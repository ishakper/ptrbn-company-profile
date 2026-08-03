<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\FleetCategoryResource;
use App\Repositories\Contracts\FleetCategoryRepositoryInterface;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class FleetCategoryController extends Controller
{
    public function __construct(
        protected FleetCategoryRepositoryInterface $repository
    ) {}

    public function index(Request $request): JsonResponse
    {
        $filters = $request->only(['search', 'status', 'sort', 'direction']);

        // Public pages only show published categories
        if (! auth()->check()) {
            $filters['status'] = 'published';
        }

        $categories = $this->repository->allWithFilters($filters);

        return $this->successResponse(FleetCategoryResource::collection($categories));
    }

    public function show(string $slug): JsonResponse
    {
        $category = $this->repository->findBySlug($slug);

        if (! $category) {
            return $this->errorResponse("Fleet category '{$slug}' not found.", 404);
        }

        // Public check
        if (! auth()->check() && $category->status !== 'published') {
            return $this->errorResponse('Fleet category not found or is in draft.', 404);
        }

        return $this->successResponse(new FleetCategoryResource($category));
    }
}
