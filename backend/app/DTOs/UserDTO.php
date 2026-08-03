<?php

declare(strict_types=1);

namespace App\DTOs;

class UserDTO extends BaseDTO
{
    /**
     * UserDTO constructor.
     */
    public function __construct(
        public readonly string $name,
        public readonly string $email,
        public readonly ?string $password = null,
        public readonly array $roles = []
    ) {}

    /**
     * {@inheritDoc}
     */
    public static function fromArray(array $data): static
    {
        return new static(
            name: $data['name'],
            email: $data['email'],
            password: $data['password'] ?? null,
            roles: $data['roles'] ?? []
        );
    }
}
