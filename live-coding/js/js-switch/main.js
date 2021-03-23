// var selezione = prompt("a=addizione, s=sottrazione, m=moltiplicazione, d=divisione");
//
// switch (selezione) {
//   case 'a':
//     console.log('addizione');
//     break;
//   case 's':
//     console.log('sottrazione');
//     break;
//   case 'm':
//     console.log('moltiplicazione');
//     break;
//   case 'd':
//     console.log('divisione');
//     break;
//   default:
//     console.log('Non conosco questa operazione!');
//     break;
// }

var continua = true;
while(continua) {
  var selezione = prompt("a=addizione, s=sottrazione, m=moltiplicazione, d=divisione, q=quit");

  var num1;
  var num2;

  switch (selezione) {
    case 'a':
      prendiNumeri();
      console.log(somma(num1, num2));
      break;
    case 's':
      prendiNumeri();
      console.log(differenza(num1, num2));
      break;
    case 'm':
      prendiNumeri();
      console.log(prodotto(num1, num2));
      break;
    case 'd':
      prendiNumeri();
      console.log(divisione(num1, num2));
      break;
    case 'q':
      continua = false;
      break;
  }
}

//FUNCTIONS
function prendiNumeri() {
  num1 = parseFloat(prompt('Dammi un numero:'));
  num2 = parseFloat(prompt('Dammi un numero:'));
}

function somma(numero1, numero2) {
  return (numero1 + numero2);
}

function differenza(numero1, numero2) {
  return (numero1 - numero2);
}

function prodotto(numero1, numero2) {
  return (numero1 * numero2);
}

function divisione(numero1, numero2) {
  return (numero1 / numero2);
}
