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
  return view('home');
});

Route::get('/chi-siamo', function () {
  return view('chi-siamo')->with('pagina', 'chi-siamo');
});

Route::get('/info', function () {
  return view('info')->with('pagina', 'info');
});

Route::get('/login', function () {
  return view('login');
});

Route::get('/dischi', function () {
  $database = config('dischi');

  return view('dischi')->with('dischi', $database);
});
