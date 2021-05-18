<?php

require_once 'Prodotto.php';
require_once 'Utente.php';
require_once 'UtentePremium.php';
require_once 'CartaDiCredito.php';
require_once 'Ordine.php';


$felpa = new Prodotto('felpa', 'una felpa da corsa', 12.35, true, 'F9000');
$pantalone = new Prodotto('pantalone', 'pantalone sportivo', 22.35, true, 'P8000');


$utente1 = new UtentePremium('Utente', 'Uno', '2021-03-12', 'user', 'name', 'PREM2021');

$carta_credito = new CartaDiCredito('1231988423736479', 'boolean', 'Utente Uno', '2023-12', '789');

$utente1->setCartaCredito($carta_credito);

$utente1->aggiungiAlCarello($felpa, 2);
$utente1->aggiungiAlCarello($pantalone, 1);

$ordine1 = new Ordine($utente1->getCarrello(), $utente1->getCodiceSconto());

var_dump($ordine1);
