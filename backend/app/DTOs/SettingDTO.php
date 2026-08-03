<?php

declare(strict_types=1);

namespace App\DTOs;

class SettingDTO extends BaseDTO
{
    /**
     * SettingDTO constructor.
     */
    public function __construct(
        public readonly string $key,
        public readonly ?string $value = null,
        public readonly string $locale = 'en'
    ) {}

    /**
     * {@inheritDoc}
     */
    public static function fromArray(array $data): static
    {
        return new static(
            key: $data['key'],
            value: $data['value'] ?? null,
            locale: $data['locale'] ?? 'en'
        );
    }
}
