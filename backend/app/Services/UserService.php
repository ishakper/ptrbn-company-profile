<?php

declare(strict_types=1);

namespace App\Services;

use App\DTOs\UserDTO;
use App\Models\User;
use App\Repositories\Contracts\UserRepositoryInterface;
use Illuminate\Support\Facades\Hash;

class UserService extends BaseService
{
    /**
     * UserService constructor.
     */
    public function __construct(
        protected UserRepositoryInterface $userRepository
    ) {}

    /**
     * Create a new user and assign roles.
     *
     * @throws \Throwable
     */
    public function createUser(UserDTO $dto): User
    {
        return $this->transaction(function () use ($dto) {
            $data = [
                'name' => $dto->name,
                'email' => $dto->email,
                'password' => Hash::make($dto->password ?? 'secret1234'),
            ];

            /** @var User $user */
            $user = $this->userRepository->create($data);

            if (! empty($dto->roles)) {
                $user->assignRole($dto->roles);
            }

            return $user;
        });
    }

    /**
     * Update an existing user and sync roles.
     *
     * @throws \Throwable
     */
    public function updateUser(string $id, UserDTO $dto): User
    {
        return $this->transaction(function () use ($id, $dto) {
            /** @var User $user */
            $user = $this->userRepository->findOrFail($id);

            $data = [
                'name' => $dto->name,
                'email' => $dto->email,
            ];

            if ($dto->password) {
                $data['password'] = Hash::make($dto->password);
            }

            $user->update($data);

            if (! empty($dto->roles)) {
                $user->syncRoles($dto->roles);
            }

            return $user;
        });
    }

    /**
     * Delete user by ID.
     *
     * @throws \Throwable
     */
    public function deleteUser(string $id): bool
    {
        return $this->transaction(function () use ($id) {
            return $this->userRepository->delete($id);
        });
    }
}
