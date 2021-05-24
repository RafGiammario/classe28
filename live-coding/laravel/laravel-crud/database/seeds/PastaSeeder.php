<?php

use Illuminate\Database\Seeder;
use App\Pasta;

class PastaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $pastas = config('pastas');

      for ($i=0; $i < count($pastas); $i++) {
        $pasta = $pastas[$i];

        $pasta_obj = new Pasta();
        $pasta_obj->src = $pasta['src'];
        $pasta_obj->titolo = $pasta['titolo'];
        $pasta_obj->tipo = $pasta['tipo'];
        $pasta_obj->cottura = intval($pasta['cottura']);
        $pasta_obj->peso = intval($pasta['peso']);
        $pasta_obj->descrizione = $pasta['descrizione'];
        $pasta_obj->save();
      }

    }
}
