<?php

declare(strict_types=1);

namespace App\Repositories\Contracts;

use App\Models\Service;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

interface ServiceRepositoryInterface extends RepositoryInterface
{
    public function allWithFilters(array $filters = []): Collection;

    public function paginateWithFilters(int $perPage = 15, array $filters = []): LengthAwarePaginator;

    public function findBySlug(string $slug): ?Service;

    public function findById(string $id): ?Service;
}
