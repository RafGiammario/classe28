var bombsArray = [];
var safesArray = [];

var nonSelezionato = true;
while (nonSelezionato) {
  var difficulty = parseInt(prompt("Scegli il livello di difficoltà: [0=>nabbo, 1=>intermedio, 2=>maestro]"));

  nonSelezionato = false;
  switch (difficulty) {
    case 0: //0,1,2,1000, 1.1, -1 //"pipo", "", "pluto" // non mettere isNaN()
      var maxNumber = 100;
      break;
    case 1:
      var maxNumber = 80;
      break;
    case 2:
      var maxNumber = 50;
      break;
    default:
      nonSelezionato = true;
      break;
  }
}

bombsArray = createBombs(bombsArray, maxNumber);

var punteggio = game(bombsArray, safesArray, maxNumber);

//Stampo punteggio
console.log("GAME OVER!");
console.log("Il tuo punteggio è: " + punteggio);


//FUNCTIONS
//contare da 1 a 16
  //generare un numero tra 1 e 100
  // verifico che non in array
function createBombs(array, max) {
  while (array.length < 16) {
    var numero = randomNumberInRange(1, max)

    if (!array.includes(numero)) {
      array.push(numero);
    }
  }

  return array;
}

//contare da 1 e 100 - 16
  //verifico che 1 <= numero <= 100 && !isNaN
  //verifico che non bomba se bomba => termino
function game(bombsArray, safesArray, maxNumber) {
  while (safesArray.length < maxNumber - 16) {
    var numeroUtente = parseInt(prompt("Inserisci un numero e prova a non morire:"));

    if (!isNaN(numeroUtente) && 1 <= numeroUtente && numeroUtente <= maxNumber && !safesArray.includes(numeroUtente)) {
      if (!bombsArray.includes(numeroUtente)) {
        safesArray.push(numeroUtente);
      } else {
        return safesArray.length;
      }
    }
  }
  return safesArray.length
}

function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
