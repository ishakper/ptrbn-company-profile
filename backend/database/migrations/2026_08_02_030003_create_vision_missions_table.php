<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('vision_missions', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('type'); // 'vision' or 'mission'
            $table->string('title');
            $table->text('description');
            $table->string('icon')->nullable();
            $table->integer('order')->default(0);
            $table->string('status')->default('draft');
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->string('meta_keywords')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('vision_missions');
    }
};
