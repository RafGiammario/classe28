// somma(5, 10);
// somma(2, 5);
// somma(5, 7);
//
// console.log(numeroRandomInRange(1, 16));
// console.log(numeroRandomInRange(1, 6));
// console.log(numeroRandomInRange(1, 6));
//
// // FUNCTIONS
// function somma(num1, num2) {
//   var num3 = 0.2;
//   console.log(num1 + num2 * num3);
// }
//
// function numeroRandomInRange(min, max) {
//   if (isNaN(min) || isNaN(max)) {
//     console.log("Non sono numeri");
//   } else {
//     var numero = Math.floor(Math.random() * (max - min + 1)) + min;
//     return numero;
//   }
// }
var variabileGlobale = 'pippo';
var num1 = parseInt(prompt("Dammi un numero:"));
var num2 = parseInt(prompt("Dammi un numero:"));
var risultato = somma(num1, num2);
var risultato2 = somma(num1, num2);

document.getElementById('somma').innerHTML = risultato;
console.log(risultato);

//FUNCTIONS
function somma(numero1, numero2) {
  return (numero1 + numero2);
}

console.log(variabileGlobale);
