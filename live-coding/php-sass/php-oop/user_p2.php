<?php
trait Auth
{
  private $username;
  private $password;

  public function login($username, $password)
  {
    if ($username == $this->username && $password == $this->password) {
      return true;
    } else {
      return false;
    }
  }

  public function setUsername($username = '')
  {
    if ($username == '') {
      throw new Exception("Username must be not empty string");
    }
    $this->username = $username;
  }

  public function setPassword($password = '')
  {
    if ($password == '') {
      throw new Exception("Password must be not empty string");
    }
    $this->password = $password;
  }

  public static function authWithPassword()
  {
    return true;
  }
}

class User {

  use Auth;

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
    return $this;
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

$pippo = new User('pippo', 'inzaghi', 45);

try {
  $pippo->setUsername();
  $pippo->setPassword();
} catch (Exception $e) {
  var_dump($e->getMessage());
}

var_dump($pippo->login('pippolino', 'password'));
// die();

$pippo->setPassword('pppp');

var_dump($pippo->login('pippolino', 'password'));

var_dump(Auth::authWithPassword());

var_dump($pippo);
$pippo->setNome('pluto')->setCognome('plutini');
var_dump($pippo);
