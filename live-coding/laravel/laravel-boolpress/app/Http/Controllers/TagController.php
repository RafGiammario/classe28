<?php

namespace App\Http\Controllers;

use App\Tag;
use App\Post;
use Illuminate\Http\Request;

class TagController extends Controller
{
  public function index(string $slug)
  {
    // voglio stampare tutti i post di una data categoria
    $tag = Tag::with('posts')->where('slug', '=', $slug)->first();

    return view('guests.posts.index')->with('posts', $tag->posts);
  }
}
