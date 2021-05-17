@extends('layouts.app')

@section('main')
  <table>
    <thead>
      <tr>
        <th>Titolo</th>
        <th>Autore</th>
        <th>Anno</th>
      </tr>
    </thead>
    <tbody>
      @foreach ($dischi as $disco)
        <tr>
          <td> {{ $disco['title'] }} </td>
          <td> {{ $disco['author'] }} </td>
          <td> {{ $disco['year'] }} </td>
        </tr>
      @endforeach
    </tbody>
  </table>

@endsection
