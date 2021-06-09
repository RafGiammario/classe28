<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sport extends Model
{
  protected $fillable = [
    'name',
    'description',
    'with_ball'
  ];
}
