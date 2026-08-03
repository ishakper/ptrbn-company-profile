<?php

declare(strict_types=1);

namespace App\Repositories\Eloquent;

use App\Models\Setting;
use App\Repositories\Contracts\SettingRepositoryInterface;

class SettingRepository extends BaseRepository implements SettingRepositoryInterface
{
    /**
     * Specify the model class name.
     */
    public function model(): string
    {
        return Setting::class;
    }

    /**
     * {@inheritDoc}
     */
    public function findByKey(string $key, string $locale = 'en')
    {
        return $this->model->where('key', $key)->where('locale', $locale)->first();
    }
}
