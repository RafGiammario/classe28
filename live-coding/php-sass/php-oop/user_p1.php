<?php

class User {
  private $nome;
  private $cognome;
  private $eta;

  public function __construct($nome, $cognome, $eta)
  {
    $this->nome = $nome;
    $this->cognome = $cognome;
    $this->eta = $eta;
  }

  public function identificati() {
    echo $this->nome . ' ' . $this->cognome . ' ' . $this->eta;
  }

  public function getNome()
  {
    return $this->nome;
  }

  public function setNome($nome)
  {
    $this->nome = $nome;
  }

  public function getCognome()
  {
    return $this->cognome;
  }

  public function setCognome($cognome)
  {
    $this->cognome = $cognome;
  }

  public function getEta()
  {
    return $this->eta;
  }

  public function setEta($eta)
  {
    $this->eta = $eta;
  }

}

// $pippo = new User();
// $pippo->setNome('Pippo');
// var_dump($pippo);
// $pippo->setNome('Pippo');
//$pippo->cognome = 'Inzaghi';
// $pippo->setCognome('Inzaghi');
//$pippo->eta = 40;
// $pippo->setEta(40);

// $pluto = new User();
// $pluto->nome = 'Pluto';
// $pluto->cognome = 'Cartonio';
// $pluto->eta = 65;


// $pippo = new User('Pippo', 'Inzaghi', 40);

// $pippo->setCognome('Baudo');

// $pippo->identificati();
// $pluto->identificati();

// var_dump($pippo->getName());


class Student extends User {
  public $bocciato;

  // public function __construct($nome, $cognome, $eta, $bocciato)
  // {
  //   $this->nome = $nome;
  //   $this->cognome = $cognome;
  //   $this->eta = $eta;
  //   $this->bocciato = $bocciato;
  // }

  // public function identificati()
  // {
  //   echo $this->nome . ' ' . $this->cognome . ' ' . $this->eta . ' ' . $this->bocciato;
  // }
}

// $fede = new Student('Fede', 'Figi', 25, true);

// var_dump($fede);
// $fede->identificati();

$fede = new Student();
$fede->setNome('Fede');

var_dump($fede);
