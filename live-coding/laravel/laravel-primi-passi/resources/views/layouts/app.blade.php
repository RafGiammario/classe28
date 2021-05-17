<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>HOME</title>
    <link rel="stylesheet" href="/css/app.css">
    <link rel="stylesheet" href="/css/{{$pagina}}.css">
  </head>
  <body>
    @include('partials.header')
    <main>
      @yield('main')
    </main>
    <footer>

    </footer>
  </body>
</html>
