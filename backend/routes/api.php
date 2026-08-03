<?php

declare(strict_types=1);

use App\Http\Controllers\Api\v1\AuthController;
use App\Http\Controllers\Api\v1\CorporateIdentityController;
use App\Http\Controllers\Api\v1\FleetCategoryController;
use App\Http\Controllers\Api\v1\ServiceCategoryController;
use App\Http\Controllers\Api\v1\ServiceController;
use App\Http\Controllers\Api\v1\SettingController;
use App\Http\Controllers\Api\v1\UserController;
use App\Http\Controllers\Api\v1\VesselController;
use App\Http\Controllers\Api\v1\GalleryController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    // Session Authentication gates
    Route::post('/auth/login', [AuthController::class, 'login']);

    // Public Settings listings
    Route::get('/settings/{key}', [SettingController::class, 'show']);
    Route::get('/settings', [SettingController::class, 'index']);

    // Public Corporate Identity
    Route::get('/corporate-identity', [CorporateIdentityController::class, 'index']);

    // Public Portfolio Layanan & Armada
    Route::get('/service-categories', [ServiceCategoryController::class, 'index']);
    Route::get('/service-categories/{slug}', [ServiceCategoryController::class, 'show']);
    Route::get('/services', [ServiceController::class, 'index']);
    Route::get('/services/{slug}', [ServiceController::class, 'show']);
    Route::get('/fleet-categories', [FleetCategoryController::class, 'index']);
    Route::get('/fleet-categories/{slug}', [FleetCategoryController::class, 'show']);
    Route::get('/vessels', [VesselController::class, 'index']);
    Route::get('/vessels/{slug}', [VesselController::class, 'show']);

    // Public Media Gallery
    Route::get('/gallery', [GalleryController::class, 'index']);

    // Sanctum Protected Routes
    Route::middleware('auth:sanctum')->group(function () {
        // Authenticated Session helpers
        Route::get('/auth/me', [AuthController::class, 'me']);
        Route::post('/auth/logout', [AuthController::class, 'logout']);

        // User Management Resource CRUD
        Route::apiResource('/users', UserController::class);

        // Edit Settings configs
        Route::post('/settings', [SettingController::class, 'store']);
    });
});
