@extends('layouts.app')

@section('main')
  @foreach ($rooms as $room)
  {{$room->id}}
  {{$room->room_number}}
  {{$room->floor}}
  <br>
  @endforeach
@endsection
