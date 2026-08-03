<?php

declare(strict_types=1);

namespace App\DTOs;

abstract class BaseDTO
{
    /**
     * Create DTO from array.
     */
    abstract public static function fromArray(array $data): static;
}
