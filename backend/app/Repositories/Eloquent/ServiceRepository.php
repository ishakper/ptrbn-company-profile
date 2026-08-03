<?php

declare(strict_types=1);

namespace App\Repositories\Eloquent;

use App\Models\Service;
use App\Repositories\Contracts\ServiceRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

class ServiceRepository extends BaseRepository implements ServiceRepositoryInterface
{
    public function model(): string
    {
        return Service::class;
    }

    public function allWithFilters(array $filters = []): Collection
    {
        $query = $this->model->newQuery();

        if (! empty($filters['search'])) {
            $query->where(function ($q) use ($filters) {
                $q->where('title', 'like', '%'.$filters['search'].'%')
                    ->orWhere('description', 'like', '%'.$filters['search'].'%');
            });
        }

        if (! empty($filters['service_category_id'])) {
            $query->where('service_category_id', $filters['service_category_id']);
        }

        if (isset($filters['featured'])) {
            $query->where('featured', (bool) $filters['featured']);
        }

        if (! empty($filters['status'])) {
            $query->where('status', $filters['status']);
        }

        $sort = $filters['sort'] ?? 'order';
        $direction = $filters['direction'] ?? 'asc';
        $query->orderBy($sort, $direction);

        return $query->with('category')->get();
    }

    public function paginateWithFilters(int $perPage = 15, array $filters = []): LengthAwarePaginator
    {
        $query = $this->model->newQuery();

        if (! empty($filters['search'])) {
            $query->where(function ($q) use ($filters) {
                $q->where('title', 'like', '%'.$filters['search'].'%')
                    ->orWhere('description', 'like', '%'.$filters['search'].'%');
            });
        }

        if (! empty($filters['service_category_id'])) {
            $query->where('service_category_id', $filters['service_category_id']);
        }

        if (isset($filters['featured'])) {
            $query->where('featured', (bool) $filters['featured']);
        }

        if (! empty($filters['status'])) {
            $query->where('status', $filters['status']);
        }

        $sort = $filters['sort'] ?? 'order';
        $direction = $filters['direction'] ?? 'asc';
        $query->orderBy($sort, $direction);

        return $query->with('category')->paginate($perPage);
    }

    public function findBySlug(string $slug): ?Service
    {
        return $this->model->where('slug', $slug)->with('category')->first();
    }

    public function findById(string $id): ?Service
    {
        return $this->model->where('id', $id)->with('category')->first();
    }
}
