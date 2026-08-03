<?php

declare(strict_types=1);

namespace App\Repositories\Eloquent;

use App\Models\User;
use App\Repositories\Contracts\UserRepositoryInterface;

class UserRepository extends BaseRepository implements UserRepositoryInterface
{
    /**
     * Specify the model class name.
     */
    public function model(): string
    {
        return User::class;
    }

    /**
     * {@inheritDoc}
     */
    public function findByEmail(string $email)
    {
        return $this->model->where('email', $email)->first();
    }
}
