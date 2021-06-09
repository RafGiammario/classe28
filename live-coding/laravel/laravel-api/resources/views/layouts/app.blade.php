<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    @yield('head')
  </head>
  <body>
    @yield('content')
    @yield('foot-script')
  </body>
</html>
