//creare array di cognomi
var cognomi = ['Bianchi', 'Rossi', 'Perlari', 'Lodigiani', 'Mastrobattista', 'Verdi'];

//prendere un cognome col prompt
var cognomeUtente = prompt("Dammi il tuo cognome:");

//pushare la variabile nell'array
cognomi.push(cognomeUtente);

//clonare e ordinare l'array, slice() clona, sort() ordina
var cognomiSorted = cognomi.slice().sort();

var trovato = false;
//Stampare array ordinato
for (var i = 0; i < cognomiSorted.length; i++) {
  document.getElementById('cognomi').innerHTML += "<li>" + cognomiSorted[i] + "</li>"
  if (cognomiSorted[i] == cognomeUtente && !trovato){
    var indexCognome = i + 1;
    trovato = true;
  }
}

//stampare posizione elemento in array, versione "umana"
//var indexCognome = cognomiSorted.indexOf(cognomeUtente) + 1;

document.getElementById('posizione').innerHTML += indexCognome;
