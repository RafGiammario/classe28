<?php
  //$testo = 'Fabio Parisi';
  //var_dump($_GET['nome']);
  $testo = $_GET['nome'] . ' ' . $_GET['cognome'];
?>

<?php echo 'Pippo';
  echo 'Pluto'; ?>

<div class="">
  <?php //var_dump($testo) ?>
  Ciao <?php echo $testo; ?>
</div>


<?php
//Stringhe
$testo = "Supercali fragilisti";

$testo_esploso = explode(' ', $testo);
var_dump($testo_esploso);


$testo = " <br>Desossidoribonucleico ";
echo trim($testo);

echo str_replace('Desossido', 'Scarpa', $testo);

echo strlen($testo);

echo strpos($testo, 'ribo');

$testo = trim($testo);
echo $testo;

$testo = "sono andato al mare!";
echo ucfirst($testo);
echo '<br>';
echo ucwords($testo);

$numero1 = 12;
$numero2 = 24;

$numero1 += 3;
$numero2 -= 15;

$numero1 *= 3;
$numero2 /= 3;
?>
