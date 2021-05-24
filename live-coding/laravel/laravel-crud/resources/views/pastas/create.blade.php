@extends('layouts.app')

@section('main')
  <main class="vertical" id="create">
    @if ($errors->any())
       <div class="alert alert-danger">
           <ul>
               @foreach ($errors->all() as $error)
                   <li>{{ $error }}</li>
               @endforeach
           </ul>
       </div>
    @endif

    <form class="" action="{{route('pastas.store')}}" method="post">
      @csrf
      @method('POST')
      <input type="text" name="titolo" value="" placeholder="Titolo">
      <input type="text" name="src" value="" placeholder="Immagine">
      <input type="text" name="descrizione" value="" placeholder="Descrizione">
      <input type="number" name="cottura" value="" placeholder="Cottura">
      <input type="text" name="tipo" value="" placeholder="Tipo">
      <input type="number" name="peso" value="" placeholder="Peso">

      <input type="submit" name="" value="Invia">
    </form>
  </main>
@endsection
