@extends('layouts.app')

@section('title')
  Home
@endsection

@section('main')
  <div class="container-flex">
    @foreach ($comics as $index => $comic)
      <a href="{{route('detail', ['id' => $index])}}" class="card"> <!-- /single/0 ... 11-->
        <div>
          <div class="thumb">
            <img src="{{$comic['thumb']}}" alt="">
          </div>
          <h5>{{$comic['series']}}</h5>
        </div>
      </a>
    @endforeach

  </div>
@endsection
