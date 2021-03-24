// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


//Creo lista email valide
var emails = ['pippo@libero.it', 'pluto@gmail.com', 'topolino@alice.it', 'minnie@hotmail.it'];

//Chiedo email ad utente
var email = prompt("Dammi la tua mail:");

//Creo sentinella a false
var trovato = false;

//Scorro lista email valide
for (var i = 0; i < emails.length; i++) {
  //Se email == elemento cambio sentinella a true
  if (emails[i] === email) {
    trovato = true;
    i = emails.length;
    //break; //sconsiglitata
  }
}

//Controllo sentinella
if (trovato) {
  //Stampo risultato
  document.getElementById('risultato').innerHTML = "Accesso consentito!";
} else {
  document.getElementById('risultato').innerHTML = "Permesso negato!";
}
