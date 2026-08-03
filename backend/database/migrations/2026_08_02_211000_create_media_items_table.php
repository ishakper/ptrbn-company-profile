<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('media_items', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title');
            $table->text('caption')->nullable();
            $table->text('description')->nullable();
            $table->string('alt_text')->nullable();
            $table->string('seo_title')->nullable();
            $table->string('copyright')->nullable();
            $table->string('photographer')->nullable();
            $table->string('location')->nullable();
            $table->string('visibility')->default('published');
            $table->json('categories')->nullable();
            $table->json('tags')->nullable();
            
            // Relations
            $table->uuid('vessel_id')->nullable();
            $table->uuid('project_id')->nullable();
            $table->uuid('news_id')->nullable();

            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('media_items');
    }
};
