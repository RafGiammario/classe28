<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
  public function index()
  {
    $title_page = 'Home';
    return view('home', compact('title_page'));
    // return view('home')->with('title_page', $title_page);
  }
}
