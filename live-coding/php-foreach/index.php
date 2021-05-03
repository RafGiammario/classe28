<?php
$posts = [

    '10/01/2019' => [
        [
            'title' => 'Post 1',
            'author' => 'Michele Papagni',
            'text' => 'Testo post 1'
        ],
        [
            'title' => 'Post 2',
            'author' => 'Michele Papagni',
            'text' => 'Testo post 2'
        ],
    ],
    '10/02/2019' => [
        [
            'title' => 'Post 3',
            'author' => 'Michele Papagni',
            'text' => 'Testo post 3'
        ]
    ],
    '15/05/2019' => [
        [
            'title' => 'Post 4',
            'author' => 'Michele Papagni',
            'text' => 'Testo post 4'
        ],
        [
            'title' => 'Post 5',
            'author' => 'Michele Papagni',
            'text' => 'Testo post 5'
        ],
        [
            'title' => 'Post 6',
            'author' => 'Michele Papagni',
            'text' => 'Testo post 6'
        ]
    ],
];

foreach ($posts as $date => $posts_by_date) {
  // echo $date;
  // var_dump($posts_by_date);

  foreach ($posts_by_date as $post) {
    ?>

      <div class="">
        <h4><?= $post['title'] ?></h4>
        <h6><?= $post['author'] ?> ha scritto il <?= $date ?></h6>
        <p><?= $post['text'] ?></p>
      </div>

    <?php
  }
}
?>

<?php
  $classData = [
     'teachers' => ['Fabio', 'Michele'],
     'nStudents' => 10,
     'students' => ['Fabio', 'Leo', 'Sonia', 'Giuditta', 'Fede'],
  ];

  foreach ($classData as $info => $value_by_info) {
    echo '<h4>'.$info . '</h4>';
    if (is_array($value_by_info)) {
      //var_dump($value_by_info);
      foreach ($value_by_info as $value) {
        echo $value .'<br>';
      }
    } else {
      echo $value_by_info . '<br>';
    }
  }
?>
