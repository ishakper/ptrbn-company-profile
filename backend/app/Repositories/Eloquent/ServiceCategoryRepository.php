<?php

declare(strict_types=1);

namespace App\Repositories\Eloquent;

use App\Models\ServiceCategory;
use App\Repositories\Contracts\ServiceCategoryRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

class ServiceCategoryRepository extends BaseRepository implements ServiceCategoryRepositoryInterface
{
    public function model(): string
    {
        return ServiceCategory::class;
    }

    public function allWithFilters(array $filters = []): Collection
    {
        $query = $this->model->newQuery();

        if (! empty($filters['search'])) {
            $query->where('name', 'like', '%'.$filters['search'].'%');
        }

        if (! empty($filters['status'])) {
            $query->where('status', $filters['status']);
        }

        $sort = $filters['sort'] ?? 'order';
        $direction = $filters['direction'] ?? 'asc';
        $query->orderBy($sort, $direction);

        return $query->with('services')->get();
    }

    public function paginateWithFilters(int $perPage = 15, array $filters = []): LengthAwarePaginator
    {
        $query = $this->model->newQuery();

        if (! empty($filters['search'])) {
            $query->where('name', 'like', '%'.$filters['search'].'%');
        }

        if (! empty($filters['status'])) {
            $query->where('status', $filters['status']);
        }

        $sort = $filters['sort'] ?? 'order';
        $direction = $filters['direction'] ?? 'asc';
        $query->orderBy($sort, $direction);

        return $query->with('services')->paginate($perPage);
    }

    public function findBySlug(string $slug): ?ServiceCategory
    {
        return $this->model->where('slug', $slug)->with('services')->first();
    }

    public function findById(string $id): ?ServiceCategory
    {
        return $this->model->where('id', $id)->with('services')->first();
    }
}
