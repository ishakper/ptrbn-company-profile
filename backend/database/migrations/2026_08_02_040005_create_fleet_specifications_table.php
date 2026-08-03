<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('fleet_specifications', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('vessel_id')->unique();
            $table->integer('gross_tonnage');
            $table->integer('deadweight_tonnage');
            $table->decimal('length_overall', 8, 2);
            $table->decimal('draft_depth', 8, 2);
            $table->string('classification')->default('BKI');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('vessel_id')
                ->references('id')
                ->on('vessels')
                ->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('fleet_specifications');
    }
};
