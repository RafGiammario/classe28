@extends('layouts.app')

@section('main')
  <main class="vertical">
    <h2>{{$pasta->titolo}}</h2>
    <img src="{{$pasta->src}}" alt="{{$pasta->titolo}}">
    <h5> <span class="tipo">{{$pasta->tipo}}</span> {{$pasta->peso}} g - {{$pasta->cottura}} min</h5>
    <p>{!! $pasta->descrizione !!}</p>

    <a href="{{route('pastas.edit', ['pasta' => $pasta->id])}}">Edit</a>
    <a href="{{route('pastas.destroy', ['pasta' => $pasta->id])}}">Delete</a>
    <a href="{{route('pastas.index')}}">Torna indietro</a>
    <a href="{{route('home')}}">Home</a>
  </main>
@endsection
