<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateHousesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('houses', function (Blueprint $table) {
        $table->string('energy_rating', 5)->after('bathrooms')->nullable();
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('houses', function (Blueprint $table) {
        $table->dropColumn('energy_rating');
      });
    }
}
