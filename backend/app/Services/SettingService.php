<?php

declare(strict_types=1);

namespace App\Services;

use App\DTOs\SettingDTO;
use App\Models\Setting;
use App\Repositories\Contracts\SettingRepositoryInterface;

class SettingService extends BaseService
{
    /**
     * SettingService constructor.
     */
    public function __construct(
        protected SettingRepositoryInterface $settingRepository
    ) {}

    /**
     * Update an existing setting or create a new one.
     *
     * @throws \Throwable
     */
    public function updateOrCreateSetting(SettingDTO $dto): Setting
    {
        return $this->transaction(function () use ($dto) {
            $setting = $this->settingRepository->findByKey($dto->key, $dto->locale);

            if ($setting) {
                $setting->update(['value' => $dto->value]);

                return $setting;
            }

            return $this->settingRepository->create([
                'key' => $dto->key,
                'value' => $dto->value,
                'locale' => $dto->locale,
            ]);
        });
    }
}
