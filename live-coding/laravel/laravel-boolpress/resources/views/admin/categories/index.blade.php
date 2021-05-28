@extends('layouts.admin.app')

@section('content')
<div class="container">
    <div class="row">
      <div class="col-md-12">
        <a class="btn btn-primary" href="{{route('admin.categories.create')}}">Nuovo categoria</a>
      </div>
    </div>
    <div class="row justify-content-center">
      @foreach ($categories as $category)
        <div class="col-md-3">
            <div class="card">
                <div class="card-header">{{$category->name}}</div>

                <div class="card-body">
                  <div class="">
                    <a class="btn btn-info" href="{{route('admin.categories.show', ['category' => $category->id])}}">Show</a>
                    <a class="btn btn-primary" href="{{route('admin.categories.edit', ['category' => $category->id])}}">Edit</a>
                    <a class="btn btn-danger" onclick="event.preventDefault();
                                  this.nextElementSibling.submit();">Delete</a>
                    <form action="{{route('admin.categories.destroy', ['category' => $category->id])}}" method="POST" style="display: none;">
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
