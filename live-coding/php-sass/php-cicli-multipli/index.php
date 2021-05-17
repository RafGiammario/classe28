<?php
  $array = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  ];

  for ($i=0; $i < count($array); $i++) {
    $array_num = $array[$i];
    for ($j=0; $j < count($array_num); $j++) {
      echo $array_num[$j] . '<br>';
    }
  }
?>
