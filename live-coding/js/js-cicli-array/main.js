var nomi = ["Claudio", "Leonardo", "Francesco", "Nik"];

// console.log(nomi[0]);
// console.log(nomi[1]);
// console.log(nomi[2]);
// console.log(nomi[3]);
var nome = prompt("Dammi un nome:");

nomi.push(nome);

for (var i = 0; i < nomi.length; i++) {
  console.log(nomi[i]);
}

//Creo array
var numeri = [12, 25, 33, 48, 62, 55]
//Scorro array
for (var i = 0; i < numeri.length; i++) {
  //controllo che è dispari
  //stampa 25 33 55
  if (numeri[i]%2) {
    console.log(numeri[i]);
  }
}

//Creo array
var numeri = [12, 25, 33, 48, 62, 55]

var numero = prompt("Dammi un numero"); // 12

var soldatino = false;
//Scorro array
for (var i = 0; i < numeri.length; i++) {
  if (numeri[i] == numero) {
    soldatino = true;
  }
}

if (soldatino) {
  console.log("Il numero c'è")
} else {
  console.log("Il numero non c'è")
}
