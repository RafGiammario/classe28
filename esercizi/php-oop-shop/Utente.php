<?php
require_once 'Authenticable.php';

class Utente {
  use Authenticable;

  protected $nome;
  protected $cognome;
  protected $data_nascita;
  protected $carta_credito;

  protected $carrello = [];

  public function __construct($nome, $cognome, $data_nascita, $username, $password)
  {
    $this->nome = $nome;
    $this->cognome = $cognome;
    $this->data_nascita = $data_nascita;
    $this->username = $username;
    $this->password = $password;
  }

  public function setCartaCredito($carta_credito)
  {
    $this->carta_credito = $carta_credito;
  }

  public function aggiungiAlCarello($prodotto, $quantita)
  {
    $this->carrello[] = [
      'prodotto' => $prodotto,
      'quantita' => $quantita,
    ];
  }

  public function getCarrello()
  {
    return $this->carrello;
  }
}
