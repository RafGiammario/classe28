<?php
require_once 'Utente.php';

class UtentePremium extends Utente {
  private $codice_sconto;

  public function __construct($nome, $cognome, $data_nascita, $username, $password, $codice_sconto)
  {
    parent::__construct($nome, $cognome, $data_nascita, $username, $password);
    $this->codice_sconto = $codice_sconto;
  }

  public function getCodiceSconto()
  {
    return $this->codice_sconto;
  }
}
