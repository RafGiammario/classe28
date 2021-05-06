<?php
  include_once __DIR__.'/../db.php';

  header('Content-Type: application/json');

  if (!empty($_GET) && $_GET['author']) {
    $author = $_GET['author'];
    $filtered_database = [];

    foreach ($database as $disk) {
      if (strpos($disk['author'], $author) !== false) {
        $filtered_database[] = $disk;
      }
    }

    echo json_encode([
      "response" => $filtered_database,
      "success" => true,
    ]);
  } else {
    echo json_encode([
      "response" => $database,
      "success" => true,
    ]);
  }
?>
