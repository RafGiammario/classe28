// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

var somma = 0;
for (var i = 0; i < 10; i++) {
  var numero = parseInt(prompt("Dammi un numero:"));
  somma = somma + numero;
}

console.log(somma);
