var nomi = ["Alessandro", "Andrea", "Sonia", "Andrea"]

// for (var i = 0; i < nomi.length; i++) {
//   console.log(nomi[i]);
// }

var i = 0;
while (i < nomi.length) {
  console.log(nomi[i]);
  i++;
}

var numeri=[];

// var numero = 0;
// while(!isNaN(numero)) {
//   numero = parseInt(prompt("Dammi un numero, oppure interrompi con la lettera q:"));
//   if (!isNaN(numero)) {
//     numeri.push(numero);
//   }
// }
//
// console.log(numeri);

do {
  var numero = parseInt(prompt("Dammi un numero, oppure interrompi con la lettera q:"));
  if (!isNaN(numero)) {
    numeri.push(numero);
  }
} while(!isNaN(numero));

console.log(numeri);

var listaSpesa = [];
do {
  var elemento = prompt("Dammi una cosa da comprare:");
  if (elemento) {
    listaSpesa.push(elemento)
  }
} while(elemento != null);

console.log(listaSpesa);
