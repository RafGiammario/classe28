<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home')->with('comics', config('comics'));
})->name('home');

Route::get('/single/{id}', function ($id) {
  $comics = config('comics');
  return view('single')->with('comic', $comics[$id]);
})->name('detail');
