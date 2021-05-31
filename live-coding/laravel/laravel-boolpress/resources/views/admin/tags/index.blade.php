@extends('layouts.admin.app')

@section('content')
<div class="container">
    <div class="row">
      <div class="col-md-12">
        <a class="btn btn-primary" href="{{route('admin.tags.create')}}">Nuovo tag</a>
      </div>
    </div>
    <div class="row justify-content-center">
      @foreach ($tags as $tag)
        <div class="col-md-3">
            <div class="card">
                <div class="card-header">{{$tag->name}}</div>

                <div class="card-body">
                  <div class="">
                    <a class="btn btn-info" href="{{route('admin.tags.show', ['tag' => $tag->id])}}">Show</a>
                    <a class="btn btn-primary" href="{{route('admin.tags.edit', ['tag' => $tag->id])}}">Edit</a>
                    <a class="btn btn-danger" onclick="event.preventDefault();
                                  this.nextElementSibling.submit();">Delete</a>
                    <form action="{{route('admin.tags.destroy', ['tag' => $tag->id])}}" method="POST" style="display: none;">
                        @csrf
                        @method('DELETE')
                    </form>
                  </div>
                </div>
            </div>
        </div>
      @endforeach
    </div>
</div>

@endsection
