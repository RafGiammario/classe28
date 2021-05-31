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

/**
*Rotte Guests
*
**/
Route::get('/', 'HomeController@index')->name('index');
Route::get('posts', 'PostController@index')->name('posts.index');
Route::get('posts/{slug}', 'PostController@show')->name('posts.show');
Route::get('categories/{slug}', 'CategoryController@index')->name('category.index');
Route::post('mails', 'ContactController@index')->name('contact');
Route::get('tags/{slug}', 'TagController@index')->name('tag.index');
/**
*Rotte Guests
*
**/

Auth::routes();


/**
*Rotte Admin
*
**/
Route::middleware('auth')->namespace('Admin')->prefix('admin')->name('admin.')
  ->group(function () {
    Route::get('/', 'HomeController@index')->name('index');
    Route::resource('posts', 'PostController');
    Route::resource('categories', 'CategoryController');
    Route::resource('tags', 'TagController');
  });
/**
*Rotte Admin
*
**/
