//Chiedo numero chilometri
var km = parseFloat(prompt("Quanti km vuoi percorrere?"));

//Chiedo età passegero
var eta = parseInt(prompt("Quanti hanni hai?"));


if (isNaN(km) || isNaN(eta)) {
  document.getElementById('prezzoBiglietto').innerHTML = "dammi dei numeri"
} else {
  document.getElementById('numeroTreno').innerHTML = Math.floor(Math.random() * (1100 - 1000 + 1)) + 1000;

  //Calcolo prezzo viaggio 0.21€/km
  var prezzo = km * 0.21;

  var sconto;
  //Controllo età
  if (eta < 18) {
    //Calcolo sconto
    sconto = prezzo * 0.2;
    document.getElementById('categoria').innerHTML = "Minorenne"
  } else if (eta > 65) {
    sconto = prezzo * 0.4;
    document.getElementById('categoria').innerHTML = "Over 65"
  } else {
    sconto = 0;
    document.getElementById('categoria').innerHTML = "Basic"
  }
  //Stampa prezzo a cliente
  document.getElementById('prezzoBiglietto').innerHTML = (prezzo - sconto) + ' €';
  document.getElementById('sconto').innerHTML = sconto + " €"
}
