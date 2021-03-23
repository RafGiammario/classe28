// setTimeout(saluto1, 3000);
// setTimeout(saluto2, 2000);
// setTimeout(saluto3, 5000);
//
// function saluto1() {
//   console.log('Ciao 1');
// }
//
// function saluto2() {
//   console.log('Ciao 2');
// }
//
// function saluto3() {
//   console.log('Ciao 3');
// }
//
// var setIntervalId = setInterval(saluto, 3000);
// var count = 1;
//
// function saluto() {
//   if (count >= 10) {
//     console.log('Buongiornissimo caffè');
//     clearInterval(setIntervalId);
//   } else {
//     console.log('Buongiorno');
//   }
//
//   count++;
// }

// Il programma chiede all’utente
// quanti secondi mancano alla cottura della pasta.
// Dopo il tempo indicato, appare un alert()
// var tempoCottura = prompt("Quanti secondi mancano alla cottura?");
//
// console.log(tempoCottura);
//
// setTimeout(function () {
//   alert('Buon appetito');
// }, tempoCottura*1000);

// Simulare un countdown di 10 secondi
// che alla fine dice buon anno
var count = 10;
var id = setInterval(function () {
  if (count > 0) {
    $('#count').text(count);
  } else {
    clearInterval(id);
    $('#count').text("Buon anno");
  }

  count--;
}, 1000);
