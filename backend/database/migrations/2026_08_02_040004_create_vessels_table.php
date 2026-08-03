<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('vessels', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('fleet_category_id');
            $table->string('name');
            $table->string('imo_number')->unique();
            $table->string('status')->default('active');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('fleet_category_id')
                ->references('id')
                ->on('fleet_categories')
                ->onDelete('cascade');

            $table->index('status');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('vessels');
    }
};
