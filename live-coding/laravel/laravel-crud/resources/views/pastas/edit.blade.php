@extends('layouts.app')

@section('main')
  <main class="vertical">
    @if ($errors->any())
       <div class="alert alert-danger">
           <ul>
               @foreach ($errors->all() as $error)
                   <li>{{ $error }}</li>
               @endforeach
           </ul>
       </div>
    @endif
    
    <form class="" action="{{route('pastas.update', ['pasta' => $pasta->id])}}" method="post">
      @csrf
      @method('PATCH')
      <input type="text" name="titolo" value="{{$pasta->titolo}}" placeholder="Titolo">
      <input type="text" name="src" value="{{$pasta->src}}" placeholder="Immagine">
      <input type="text" name="descrizione" value="{{$pasta->descrizione}}" placeholder="Descrizione">
      <input type="number" name="cottura" value="{{$pasta->cottura}}" placeholder="Cottura">
      <input type="text" name="tipo" value="{{$pasta->tipo}}" placeholder="Tipo">
      <input type="number" name="peso" value="{{$pasta->peso}}" placeholder="Peso">

      <input type="submit" name="" value="Invia">
    </form>
  </main>
@endsection
