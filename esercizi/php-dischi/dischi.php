<?php include_once __DIR__.'/db.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Vue Dischi</title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
  <link rel="stylesheet" href="./master.css">
</head>
<body>
  <div>
    <div class="container">
      <!-- Ciclare card con php -->
      <?php foreach ($database as $disk) { ?>
      <div class="card">
        <div class="card-inner">
          <div
            class="card-cover"
            style="background-image: url('<?= $disk['poster'] ?>');"
            >
          </div>
          <div class="card-container-info">
            <div class="card-info">
              <div>
                <span class="title"><?= $disk['title'] ?></span> -
                <span> <?= $disk['year'] ?> </span>
              </div>
              <span class="author"> <?= $disk['author'] ?> </span>
            </div>
          </div>
        </div>
      </div>
    <?php } ?>
    </div>
  </div>
</body>
</html>
