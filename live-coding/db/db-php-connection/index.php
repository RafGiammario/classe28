<?php

$servername = "localhost";
$username = "laravel";
$password = "laravelDevApp";
$dbname = "db_hotel";

// Connect
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn && $conn->connect_error) {
 echo "Connection failed: " . $conn->connect_error;
}


if ($_GET['id']) {

  $stmt = $conn->prepare("SELECT * FROM stanze WHERE id = ?");
  $stmt->bind_param("i", $_GET['id']);

  // set parameters and execute
  $stmt->execute();
  $result = $stmt->get_result();
  while($row = $result->fetch_assoc()) { ?>
  <div class="">
    <div class="">
      <strong> id </strong> <?= $row['id'] ?>
    </div>
    <div class="">
      <strong> room number </strong> <?= $row['room_number'] ?>
    </div>
    <div class="">
      <strong> floor </strong> <?= $row['floor'] ?>
    </div>
    <div class="">
      <strong> beds </strong> <?= $row['beds'] ?>
    </div>

  </div>
  <?php }


} else {
?>



<table>
  <thead>
    <tr>
      <th>id</th>
      <th>room_number</th>
    </tr>
  </thead>
  <tbody>


<?php

  $sql = "SELECT * FROM stanze";
  $result = $conn->query($sql);

  if ($result && $result->num_rows > 0) {
     // output data of each row
     while($row = $result->fetch_assoc()) { ?>
      <tr>
        <td><?= $row['id'] ?></td>
        <td><a href="/classe-28/live-coding/db-php-connection/?id=<?= $row['id'] ?>"><?= $row['room_number'] ?></a></td>
      </tr>
    <?php }
  } elseif ($result) { ?>
    <tr>
      <td colspan="6">Nessun risultato</td>
    </tr>
  <?php } else { ?>
    <tr>
      <td colspan="6">Errore nella selezione</td>
    </tr>
  <?php }
?>
</tbody>
</table>
<?php }

$conn->close(); ?>
