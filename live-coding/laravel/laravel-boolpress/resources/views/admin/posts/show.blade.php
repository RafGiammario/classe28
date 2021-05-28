@extends('layouts.admin.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
          <h1>{{$post->title}}</h1>
          <h4>Category:
            @if ($post->category)
            {{$post->category->name}}
            @endif
          </h4>

          <div>
            {{$post->content}}
          </div>
      </div>
    </div>
</div>

@endsection
