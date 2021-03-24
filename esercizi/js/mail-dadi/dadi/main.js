var min = 1;
var max = 6;
// Genera numero pc
var pc = Math.floor(Math.random() * (max - min + 1)) + min;

//Genera numero utente
var utente = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(pc, utente);
var risultatoDOM = document.getElementById('risultato');
//Controllo numero più alto
if (pc > utente) {
  //stampo risultato
  risultatoDOM.innerHTML = "Il pc vince!";
} else if (utente > pc) {
  risultatoDOM.innerHTML = "L'utente vince!";
} else {
  risultatoDOM.innerHTML = "Finita con pareggio!";
}
