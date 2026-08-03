<?php

declare(strict_types=1);

namespace App\Repositories\Contracts;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

interface RepositoryInterface
{
    /**
     * Get all records.
     */
    public function all(array $columns = ['*']): Collection;

    /**
     * Get paginated records.
     */
    public function paginate(int $perPage = 15, array $columns = ['*']): LengthAwarePaginator;

    /**
     * Create a new record.
     */
    public function create(array $data): Model;

    /**
     * Update an existing record.
     */
    public function update(string $id, array $data): bool;

    /**
     * Delete a record.
     */
    public function delete(string $id): bool;

    /**
     * Find a record by its primary key.
     */
    public function find(string $id, array $columns = ['*']): ?Model;

    /**
     * Find a record or throw an exception.
     */
    public function findOrFail(string $id, array $columns = ['*']): Model;
}
