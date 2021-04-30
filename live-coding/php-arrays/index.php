<?php
  $array_numbers = [1, 12, 14, 55, 67];

  var_dump($array_numbers);

  $array_numbers[] = 46;

  var_dump($array_numbers[5]);

  $array_persona = [
    'nome' => 'Pippo',
    'cognome' => 'Baudo',
    'age' => 'Eterno'
  ];

  $classe28_students = [
    'Federico Figini' => [
      'nome' => 'Federico',
      'cognome' => 'Figini',
      'eta' => '37',
    ],
    'Alessandro Di Crescenzo' => [
      'nome' => 'Alessandro',
      'cognome' => 'Magno',
      'eta' => 'Deceduto',
    ]
  ];

  $classe28_teachers = [
    'Raffaele Pio Giammario' => [
      'nome' => 'Lello',
      'cognome' => 'Giammario',
      'eta' => '51',
    ]
  ];

  var_dump(array_key_exists('Marco Polo', $classe28_students));
  var_dump(in_array('Federico', $classe28_students['Federico Figini']));
  var_dump(array_keys($classe28_students));
  var_dump(array_merge($classe28_students, $classe28_teachers));
  var_dump(count($classe28_students));

  $array = array(0 => 'blue', 1 => 'red', 2 => 'green', 3 => 'red');
  var_dump(array_search('blue', $array));
  var_dump(array_search('Federico', $classe28_students['Federico Figini']));

  for ($i=0; $i < count($array_numbers); $i++) {
?>
  <div class="">
    <?= $array_numbers[$i]; ?>
  </div>
<?php }

$i = 0;
while ($i < count($array_numbers)) {
  ?>
    <div class="">
      <?= $array_numbers[$i]; ?>
    </div>
  <?php
  $i++;
}

$i = 0;
do {
  ?>
    <div class="">
      <?= $array_numbers[$i]; ?>
    </div>
  <?php
  $i++;
} while ($i < count($array_numbers));
?>
