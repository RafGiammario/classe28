<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pasta extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    'titolo',
    'src',
    'descrizione',
    'cottura',
    'tipo',
    'peso'
  ];
}
