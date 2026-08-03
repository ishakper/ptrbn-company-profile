<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('services', function (Blueprint $table) {
            $table->text('short_description')->nullable();
            $table->json('workflow')->nullable();
            $table->text('coverage_area')->nullable();
            $table->json('cta')->nullable();
            $table->boolean('featured')->default(false);
            $table->integer('order')->default(0);
            $table->timestamp('publish_date')->nullable();
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->string('meta_keywords')->nullable();
        });

        Schema::table('vessels', function (Blueprint $table) {
            $table->string('slug')->nullable();
            $table->string('call_sign')->nullable();
            $table->string('flag')->default('Indonesia');
            $table->string('engine')->nullable();
            $table->decimal('speed', 5, 2)->nullable();
            $table->string('capacity')->nullable();
            $table->text('description')->nullable();
            $table->boolean('featured')->default(false);
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->string('meta_keywords')->nullable();
        });

        Schema::table('fleet_specifications', function (Blueprint $table) {
            $table->decimal('beam', 8, 2)->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('services', function (Blueprint $table) {
            $table->dropColumn([
                'short_description', 'workflow', 'coverage_area', 'cta', 'featured',
                'order', 'publish_date', 'meta_title', 'meta_description', 'meta_keywords',
            ]);
        });

        Schema::table('vessels', function (Blueprint $table) {
            $table->dropColumn([
                'slug', 'call_sign', 'flag', 'engine', 'speed', 'capacity',
                'description', 'featured', 'meta_title', 'meta_description', 'meta_keywords',
            ]);
        });

        Schema::table('fleet_specifications', function (Blueprint $table) {
            $table->dropColumn('beam');
        });
    }
};
