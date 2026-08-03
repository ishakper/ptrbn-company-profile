<?php

declare(strict_types=1);

namespace App\Repositories\Contracts;

use App\Models\Setting;

interface SettingRepositoryInterface extends RepositoryInterface
{
    /**
     * Find a setting by key and locale.
     *
     * @return Setting|null
     */
    public function findByKey(string $key, string $locale = 'en');
}
