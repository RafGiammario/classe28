<?php

class Prodotto {
  private $prezzo;
  private $disponibile;
  private $descrizione;
  private $nome;
  private $codice_negozio;


  public function __construct($nome, $descrizione, $prezzo, $disponibile, $codice_negozio)
  {
    $this->nome = $nome;
    $this->descrizione = $descrizione;
    $this->prezzo = $prezzo;
    $this->disponibile = $disponibile;
    $this->codice_negozio = $codice_negozio;
  }

  public function getPrezzo()
  {
    return $this->prezzo;
  }
}
