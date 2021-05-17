<?php
  $email = $_GET['email'];

  $result = filter_var($email, FILTER_VALIDATE_EMAIL );
  $result_at = strpos($email, '@');
  $result_dot = strpos($email, '.');

  var_dump($result_dot);

  if ($result === false || $result_at === false || $result_dot === false) {
?>

<div class="">
  <?= 'La mail: ' . $email . ' è KO!'; ?>
</div>

<?php } else { ?>

<div class="">
  <?= 'La mail: ' . $email . ' è OK!'; ?>
</div>

<?php } ?>
