@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
          <h1>{{$post->title}}</h1>
          <h4>Category:
            @if ($post->category)
            <a href="{{ route('category.index', ['slug' => $post->category->slug])}}">{{$post->category->name}}</a>
            @endif
          </h4>

          <div>
            {{$post->content}}
          </div>

          <div>
            @foreach($post->tags as $tag)
            <a href="{{ route('tag.index', ['slug' => $tag->slug]) }}">#{{$tag->name}}</a>
            @endforeach
          </div>
      </div>
    </div>
</div>

@endsection
