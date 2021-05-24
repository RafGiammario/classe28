<?php

namespace App\Http\Controllers;

use App\Pasta;
use Illuminate\Http\Request;

class PastaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $pastas = Pasta::all();

      return view('pastas.index', compact('pastas'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
      return view('pastas.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $request->validate([
        'titolo' => 'required|unique:pastas|string|max:255',
        'src' => 'string',
        'tipo' => 'required|string',
        'cottura' => 'required|integer',
        'peso' => 'required|integer',
        'descrizione'=> 'required|string'
      ]);

      $data = $request->all();

      $pasta_obj = new Pasta();
      $pasta_obj->src = $data['src'];
      $pasta_obj->titolo = $data['titolo'];
      $pasta_obj->tipo = $data['tipo'];
      $pasta_obj->cottura = intval($data['cottura']);
      $pasta_obj->peso = intval($data['peso']);
      $pasta_obj->descrizione = $data['descrizione'];
      $pasta_obj->save();

      $pasta = Pasta::orderBy('id', 'desc')->first();

      return redirect()->route('pastas.show', compact('pasta'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Pasta  $pasta
     * @return \Illuminate\Http\Response
     */
    public function show(Pasta $pasta)
    {
      return view('pastas.show', compact('pasta'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Pasta  $pasta
     * @return \Illuminate\Http\Response
     */
    public function edit(Pasta $pasta)
    {
        return view('pastas.edit', compact('pasta'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Pasta  $pasta
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pasta $pasta)
    {
      $request->validate([
        'titolo' => 'required|string|max:255',
        'src' => 'string',
        'tipo' => 'required|string',
        'cottura' => 'required|integer',
        'peso' => 'required|integer',
        'descrizione'=> 'required|string'
      ]);

      $data = $request->all();
      $pasta->update($data);

      return redirect()->route('pastas.show', compact('pasta'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Pasta  $pasta
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pasta $pasta)
    {
      $pasta->delete();

      return redirect()->route('pastas.index');
    }
}
