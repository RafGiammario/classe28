<?php
  include_once __DIR__.'/../db.php';

  header('Content-Type: application/json');

  if (!empty($_GET) && $_GET['id']) {
    $id = $_GET['id'];
    $result = [];

    $stmt = $conn->prepare("SELECT * FROM stanze WHERE id = ?"); //prepara la query
    $stmt->bind_param("i", $id); //sotituisce i dati della chiamata ajax

    // set parameters and execute
    $stmt->execute(); //esegue il codice SQL
    $rows = $stmt->get_result(); //Salva i risultati in una variabile
    while($row = $rows->fetch_assoc()) { // cicla i risultati e li trasforma in array associativi
      $result[] = $row; //push dell'array associativo in un array di risultati
    }

    echo json_encode([
      "response" => $result,
      "success" => true,
    ]);
  } else {
    $sql = "SELECT * FROM stanze";
    $rows = $conn->query($sql);

    $result= [];

    if ($rows && $rows->num_rows > 0) {
     // output data of each row
     while($row = $rows->fetch_assoc()) {
       $result[] = $row;
     }
   }

    echo json_encode([
      "response" => $result,
      "success" => true,
    ]);
  }


  $conn->close();
?>
