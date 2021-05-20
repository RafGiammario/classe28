<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
use App\House;

class HousesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
      // $house = new House();
      // $house->reference = 'jfkska';
      // $house->address = 'Via tal dei tali';
      // $house->postal_code = '12345';
      // $house->city = 'Apricena';
      // $house->state = 'Puglia';
      // $house->square_meters = 25;
      // $house->rooms = 1;
      // $house->bathrooms = 1;
      // $house->type = 'monolocale';
      // $house->price = 125.30;
      // $house->save();

      for ($i=0; $i < 10; $i++) {
        $new_house_object = new House();
        $new_house_object->reference = $faker->bothify('??-########');
        $new_house_object->address = $faker->streetAddress();
        $new_house_object->postal_code = $faker->postcode();
        $new_house_object->city = $faker->city();
        $new_house_object->state = $faker->state();
        $new_house_object->square_meters = $faker->numberBetween(30, 1000);
        $new_house_object->rooms = $faker->numberBetween(2, 30);
        $new_house_object->bathrooms = $faker->numberBetween(1, 6);
        $new_house_object->type = $faker->randomElement(['monolocale', 'bilocale', 'appartamento', 'bifamigliare', 'attico', 'casa indipendente', 'villetta']);
        $new_house_object->description = $faker->paragraphs(5, true);
        $new_house_object->price = $faker->randomFloat(2, 20000, 5000000);
        $new_house_object->save();
      }
    }
}
