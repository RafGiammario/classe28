var x = 1;

var y = 5;

if (x => 1 && y <= 5) {
  console.log("ok");
} else if (x == 1 && y == 5) {
  console.log("ok, ma potevi fare meglio");
} else {
  console.log("Non hai rispettato le condizioni");
}

var booleana = true;

if (!booleana) {
  console.log('si!');
}

console.log("Questa è stringa", isNaN("Questa è stringa"));
console.log(3, isNaN(3));
console.log(false, isNaN(false));
console.log(null, isNaN(null));

var eta = prompt("Qual è la tua età?");

if (!isNaN(eta)) {
  console.log("Grazie che mi hai dato un numero");
}
