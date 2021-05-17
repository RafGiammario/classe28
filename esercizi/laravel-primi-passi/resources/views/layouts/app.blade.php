<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <link rel="stylesheet" href="/css/app.css">
    </head>
    <body>
      @include('partials.header')
      <main>
        @yield('main')
      </main>
      @include('partials.footer')
      <script src="/js/app.js" charset="utf-8"></script>
    </body>
</html>
