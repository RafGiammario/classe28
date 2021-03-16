// La pagina espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire,
// uno alla volta, i numeri che ha visto precedentemente,
// tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali
// dei numeri da indovinare sono stati individuati.
$(document).ready(function () {
  var numeriRandom = [];
  for (var i = 0; i < 5; i++) {
    numeriRandom.push(randomNumberInRange(1, 100));
  }
  $('#random').text(numeriRandom);

  setTimeout(function () {
    $('#random').hide();

    setTimeout(function () {
      var numeriUtente = [];
      for (var i = 0; i < numeriRandom.length; i++) {
        var numero = prompt('Inserisci un numero che hai visto:');

        numeriUtente.push(numero);
      }
      compareArrays(numeriRandom, numeriUtente);
    }, 1000);
  }, 1000)

});


//FUNCTIONS
function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function compareArrays(array1, array2) {
  var numeriEq = [];
  for (var i = 0; i < array2.length; i++) {
    if (array1.includes(parseInt(array2[i]))) {
      numeriEq.push(array2[i]);
    }
  }

  $('#random')
  .text('Questi erano i numeri: ' + array1)
  .show();
  $('#utente').text('Questi sono i tuoi numeri: ' + array2);
  $('#result').text('Questi sono i numeri che hai indovinato: ' + numeriEq);
}
