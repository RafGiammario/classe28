<?php
  $paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    In fringilla dolor arcu, eget finibus neque tincidunt vel.
    Sed dignissim, orci nec placerat tempor, justo lorem tempus metus,
    in vehicula mi nibh a odio. Donec vehicula ex eget lectus gravida,
    quis tristique tortor mollis. Nullam luctus urna nibh, at finibus ex tincidunt et.
    Aenean sodales arcu nec justo tristique, id dapibus risus malesuada. Aliquam erat volutpat.
    Donec porta id felis tristique fermentum. Etiam bibendum odio lorem. Sed sed dictum nunc.
    Phasellus efficitur aliquam fringilla. Etiam lectus odio, rhoncus ut hendrerit vitae, varius sed dui.
    Curabitur eleifend risus massa, eu volutpat ante feugiat nec. Nunc eu pellentesque orci.
    Quisque porttitor velit vitae nulla lobortis, in fermentum urna ultrices.';

    $badword = $_GET['badword'];

    $paragraph_eclissed = str_replace($badword, '***', $paragraph);
?>

<p><?= $paragraph_eclissed ?></p>
