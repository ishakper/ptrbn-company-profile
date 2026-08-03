<?php

declare(strict_types=1);

namespace App\Repositories\Eloquent;

use App\Models\Vessel;
use App\Repositories\Contracts\VesselRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

class VesselRepository extends BaseRepository implements VesselRepositoryInterface
{
    public function model(): string
    {
        return Vessel::class;
    }

    public function allWithFilters(array $filters = []): Collection
    {
        $query = $this->model->newQuery();

        if (! empty($filters['search'])) {
            $query->where(function ($q) use ($filters) {
                $q->where('name', 'like', '%'.$filters['search'].'%')
                    ->orWhere('imo_number', 'like', '%'.$filters['search'].'%');
            });
        }

        if (! empty($filters['fleet_category_id'])) {
            $query->where('fleet_category_id', $filters['fleet_category_id']);
        }

        if (! empty($filters['status'])) {
            $query->where('status', $filters['status']);
        }

        if (isset($filters['featured'])) {
            $query->where('featured', (bool) $filters['featured']);
        }

        if (isset($filters['published'])) {
            $query->where('published', (bool) $filters['published']);
        }

        $sort = $filters['sort'] ?? 'name';
        $direction = $filters['direction'] ?? 'asc';
        $query->orderBy($sort, $direction);

        return $query->with(['category', 'specification'])->get();
    }

    public function paginateWithFilters(int $perPage = 15, array $filters = []): LengthAwarePaginator
    {
        $query = $this->model->newQuery();

        if (! empty($filters['search'])) {
            $query->where(function ($q) use ($filters) {
                $q->where('name', 'like', '%'.$filters['search'].'%')
                    ->orWhere('imo_number', 'like', '%'.$filters['search'].'%');
            });
        }

        if (! empty($filters['fleet_category_id'])) {
            $query->where('fleet_category_id', $filters['fleet_category_id']);
        }

        if (! empty($filters['status'])) {
            $query->where('status', $filters['status']);
        }

        if (isset($filters['featured'])) {
            $query->where('featured', (bool) $filters['featured']);
        }

        if (isset($filters['published'])) {
            $query->where('published', (bool) $filters['published']);
        }

        $sort = $filters['sort'] ?? 'name';
        $direction = $filters['direction'] ?? 'asc';
        $query->orderBy($sort, $direction);

        return $query->with(['category', 'specification'])->paginate($perPage);
    }

    public function findBySlug(string $slug): ?Vessel
    {
        return $this->model->where('slug', $slug)->with(['category', 'specification'])->first();
    }

    public function findById(string $id): ?Vessel
    {
        return $this->model->where('id', $id)->with(['category', 'specification'])->first();
    }
}
