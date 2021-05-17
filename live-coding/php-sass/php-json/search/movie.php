<?php
  header('Content-Type: application/json');

  include_once __DIR__.'/db_movies.php'

  if ($_GET['lang'] && $_GET['query']) {
    $movies = []; // cerca nel db i film che hanno query nel nome e torna un array

    foreach ($movies_db as $movie) {
      if(strpos( $movie['title'] , $_GET['query']) !== false) {
        $movies[] = $movie;
      }
    }

    // $movies = [
    //   [
    //     'title' => 'Avangers: End Game',
    //   ],
    // ];

    echo json_encode($movies); //'{{'title':'Avangers: End Game'}}'

  } else {
    echo json_encode([]);
  }
?>
