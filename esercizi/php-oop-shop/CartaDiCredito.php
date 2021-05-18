<?php

class CartaDiCredito
{
  private $numero;
  private $circuito;
  private $intestatario;
  private $scadenza;
  private $cvv;

  public function __construct($numero, $circuito, $intestatario, $scadenza, $cvv)
  {
    $this->numero = $numero;
    $this->circuito = $circuito;
    $this->intestatario = $intestatario;
    $this->scadenza = $scadenza;
    $this->cvv = $cvv;
  }
}
