<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ContactMail;

use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
  public function index(Request $request)
  {
    $data = $request->all();

    Mail::to('servizioclienti@boolpress.it')->send(new ContactMail($data['name'], $data['email'], $data['subject'], $data['content']));

    return redirect()->route('index');
  }
}
