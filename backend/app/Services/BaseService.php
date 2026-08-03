<?php

declare(strict_types=1);

namespace App\Services;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

abstract class BaseService
{
    /**
     * Run database transactions safely.
     *
     * @throws \Throwable
     */
    protected function transaction(callable $callback): mixed
    {
        DB::beginTransaction();

        try {
            $result = $callback();
            DB::commit();

            return $result;
        } catch (\Throwable $e) {
            DB::rollBack();
            Log::error("Transaction failed: {$e->getMessage()}", [
                'exception' => $e,
                'trace' => $e->getTraceAsString(),
            ]);
            throw $e;
        }
    }
}
