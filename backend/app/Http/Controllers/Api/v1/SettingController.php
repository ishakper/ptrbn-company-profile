<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api\v1;

use App\DTOs\SettingDTO;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSettingRequest;
use App\Http\Resources\SettingResource;
use App\Repositories\Contracts\SettingRepositoryInterface;
use App\Services\SettingService;
use Illuminate\Http\JsonResponse;

class SettingController extends Controller
{
    /**
     * SettingController constructor.
     */
    public function __construct(
        protected SettingRepositoryInterface $settingRepository,
        protected SettingService $settingService
    ) {}

    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $settings = $this->settingRepository->all();

        return $this->successResponse(SettingResource::collection($settings));
    }

    /**
     * Store a newly created setting or update an existing one.
     *
     * @throws \Throwable
     */
    public function store(StoreSettingRequest $request): JsonResponse
    {
        $dto = SettingDTO::fromArray($request->validated());
        $setting = $this->settingService->updateOrCreateSetting($dto);

        return $this->successResponse(new SettingResource($setting), 'Setting updated successfully.', 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $key): JsonResponse
    {
        $locale = request()->query('locale', 'en');
        $setting = $this->settingRepository->findByKey($key, (string) $locale);

        if (! $setting) {
            return $this->errorResponse("Setting key '{$key}' not found.", 404);
        }

        return $this->successResponse(new SettingResource($setting));
    }
}
