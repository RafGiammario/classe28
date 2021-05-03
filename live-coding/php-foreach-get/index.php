<?php
  //var_dump($_GET);

  if (!empty($_GET)) {
    foreach ($_GET as $key => $value) {
      echo 'La chiave è: <strong>' . $key .'</strong> e il valore è: <strong>' . $value . '</strong><br>';
    }
  }
?>
