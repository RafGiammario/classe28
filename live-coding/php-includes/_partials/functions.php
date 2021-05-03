<?php
  function stampa($faqs) {
    for ($i=0; $i < count($faqs); $i++) {
      $faq = $faqs[$i];
      $tag = $faq['title']['tag'];
      $title = $faq['title']['content'];
      echo "<$tag> $title </$tag>";
      for ($j=0; $j < count($faq['content']) ; $j++) {
       $content = $faq['content'][$j];
       $tag = $content['tag'];
       $content_detail = $content['content'];

       echo "<$tag> $content_detail </$tag>";
     }
   }
  }
?>
