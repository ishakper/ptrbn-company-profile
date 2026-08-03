<?php

declare(strict_types=1);

namespace App\Repositories\Eloquent;

use App\Models\FleetCategory;
use App\Repositories\Contracts\FleetCategoryRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

class FleetCategoryRepository extends BaseRepository implements FleetCategoryRepositoryInterface
{
    public function model(): string
    {
        return FleetCategory::class;
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

        return $query->with('vessels.specification')->get();
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

        return $query->with('vessels.specification')->paginate($perPage);
    }

    public function findBySlug(string $slug): ?FleetCategory
    {
        return $this->model->where('slug', $slug)->with('vessels.specification')->first();
    }

    public function findById(string $id): ?FleetCategory
    {
        return $this->model->where('id', $id)->with('vessels.specification')->first();
    }
}
