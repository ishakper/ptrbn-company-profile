<?php

declare(strict_types=1);

namespace App\Repositories\Contracts;

use App\Models\User;

interface UserRepositoryInterface extends RepositoryInterface
{
    /**
     * Find a user by their email address.
     *
     * @return User|null
     */
    public function findByEmail(string $email);
}
