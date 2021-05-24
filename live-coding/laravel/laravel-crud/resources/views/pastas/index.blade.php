@extends('layouts.app')

@section('main')
  <main id="index">
    @foreach($pastas as $pasta)
      <div class="card">
        <a href="{{route('pastas.show', ['pasta' => $pasta->id])}}">
        <img src="{{$pasta->src}}" alt="{{$pasta->titolo}}">
        <h4>{{$pasta->titolo}}</h4>
        <h5> <span class="tipo">{{$pasta->tipo}}</span> {{$pasta->peso}} g - {{$pasta->cottura}} min</h5>
        <p>{!! $pasta->descrizione !!}</p>
        </a>
        <form action="{{route('pastas.destroy', ['pasta' => $pasta->id])}}" method="post">
          @csrf
          @method('DELETE')
          <input type="submit" name="" value="Delete">
        </form>
        <a href="{{route('pastas.edit', ['pasta' => $pasta->id])}}">Edit</a>
      </div>
    @endforeach
  </main>
  <a href="{{route('pastas.create')}}">Crea pasta</a>

  <script type="text/javascript">
  </script>
@endsection
