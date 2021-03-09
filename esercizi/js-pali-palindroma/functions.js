function createPalindroma(parola) {
  var palindroma = "";

  for (var i = parola.length - 1; i >= 0 ; i--) {
    palindroma += parola[i];
  }

  return palindroma;
}

function palindroma() {
  var parolaUtente = prompt("Dammi una parola");

  if (parolaUtente === createPalindroma(parolaUtente)) {
    console.log("La parola è palindroma");
  } else {
    console.log("La parola non è palindroma");
  }
}

function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function isOdd(numero) {
  if (numero%2) {
    return true;
  } else {
    return false;
  }
}

function oddOrEven() {
  var controllo = true;

  while (controllo) {
    var numeroUtente = parseInt(prompt("Dammi un numero tra 1 e 5"));

    if (!isNaN(numeroUtente) && 1 <= numeroUtente && numeroUtente <= 5) {
      controllo = false;
    }
  }

  controllo = true;
  while (controllo) {
    var sceltaUtente = prompt("Vuoi scegliere pari o dispari?");

    if (sceltaUtente === "dispari" || sceltaUtente === "pari") {
      controllo = false;
    }
  }

  var numeroComputer = randomNumberInRange(1, 5);

  //sommo numeroUtente e numeroComputer
  var somma = numeroUtente + numeroComputer;

  if (sceltaUtente == 'dispari') {
    if (isOdd(somma)) {
      return "Hai Vinto!";
    } else {
      return "Hai Perso!";
    }
  } else {
    if (!isOdd(somma)) {
      return "Hai Vinto!";
    } else {
      return "Hai Perso!";
    }
  }
}
