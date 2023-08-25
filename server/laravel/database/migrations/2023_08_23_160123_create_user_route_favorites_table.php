<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_route_favorites', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')
            ->cascadeOnDelete()
            ->cascadeOnUpdate();

            $table->foreignId('route_id')->constrained('routes')
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
            $table->unique(['route_id', 'user_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_route_favorites');
    }
};
