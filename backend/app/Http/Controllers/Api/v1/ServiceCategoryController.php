<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\ServiceCategoryResource;
use App\Repositories\Contracts\ServiceCategoryRepositoryInterface;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ServiceCategoryController extends Controller
{
    public function __construct(
        protected ServiceCategoryRepositoryInterface $repository
    ) {}

    public function index(Request $request): JsonResponse
    {
        $filters = $request->only(['search', 'status', 'sort', 'direction']);

        // Public pages only show published categories by default
        if (! auth()->check()) {
            $filters['status'] = 'published';
        }

        $categories = $this->repository->allWithFilters($filters);

        return $this->successResponse(ServiceCategoryResource::collection($categories));
    }

    public function show(string $slug): JsonResponse
    {
        $category = $this->repository->findBySlug($slug);

        if (! $category) {
            return $this->errorResponse("Service category '{$slug}' not found.", 404);
        }

        // Public page details checking
        if (! auth()->check() && $category->status !== 'published') {
            return $this->errorResponse('Service category not found or is in draft.', 404);
        }

        return $this->successResponse(new ServiceCategoryResource($category));
    }
}
