var numeri = [];

for (var i = 0; i < 6; i++) {
  var numero = parseInt(prompt("Dammi un numero:"));

  if (!isNaN(numero) && numero%2) {
    numeri.push(numero);
  }
}
