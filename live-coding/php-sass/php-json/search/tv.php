<?php
  header('Content-Type: application/json');

  if ($_GET['lang'] && $_GET['query']) {
    $tv = [...];

    echo json_encode($tv);

  } else {
    echo json_encode([]);
  }
?>
