<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class UserController extends Controller
{
  public function profile()
  {
    $user = Auth::user();

    return view('admin.profile', compact('user'));
  }

  public function generateToken()
  {
    $user = Auth::user();

    $user->api_token = Str::random(80);

    $user->update();

    return redirect()->route('admin.profile');
  }
}
