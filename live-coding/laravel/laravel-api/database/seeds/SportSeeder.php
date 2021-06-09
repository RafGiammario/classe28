<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
use App\Sport;

class SportSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
      for ($i=0; $i < 10; $i++) {
        $sport = new Sport();

        $sport->name = $faker->word();
        $sport->description = $faker->text();
        $sport->with_ball = $faker->boolean();

        $sport->save();
      }
    }
}
