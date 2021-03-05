var numero = prompt("Dammi un numero:");

var somma = 0;
for (var i = 0; i < numero.length; i++) {
  var numeroParsato = parseInt(numero[i]); //NaN
  if (!isNaN(numeroParsato))
    somma = somma + numeroParsato;
  else {
    break;
  }
}

console.log(somma);
