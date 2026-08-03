<?php

declare(strict_types=1);

namespace App\Traits;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

trait ApiResponse
{
    /**
     * Return success JSON.
     */
    protected function successResponse(mixed $data, ?string $message = null, int $code = 200): JsonResponse
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data,
        ], $code);
    }

    /**
     * Return paginated success JSON.
     */
    protected function paginateResponse(AnonymousResourceCollection $collection, ?string $message = null): JsonResponse
    {
        $responseData = $collection->response()->getData(true);

        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $responseData['data'],
            'meta' => $responseData['meta'] ?? null,
        ]);
    }

    /**
     * Return error JSON.
     */
    protected function errorResponse(string $message, int $code, mixed $errors = null): JsonResponse
    {
        return response()->json([
            'success' => false,
            'message' => $message,
            'errors' => $errors,
        ], $code);
    }
}
