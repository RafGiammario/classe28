<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

use App\Travel;

class TravelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {

      for ($i=0; $i < 10; $i++) {
        $travel = new Travel();
        $travel->title = $faker->words(3, true);
        $travel->save();
      }

    }
}
