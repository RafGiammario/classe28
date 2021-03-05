var numero = parseInt(prompt("Dammi un numero:"));

if (isNaN(numero)) {
  console.log("Ti avevo chiesto un numero!");
} else {
  for (var i = 1; i <= numero; i++) {
    var cubo = Math.pow(i, 3);
    console.log(cubo);
  }
}
