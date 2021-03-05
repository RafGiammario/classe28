var numeri = [1,5,3,7,2,11];

//1
//2
//3
//5
//7
//11

console.log(numeri);

for (var i = 0; i < numeri.length - 1; i++) {
  for (var j = i + 1; j < numeri.length; j++) {
    if (numeri[i] > numeri[j]) {
      var numeroTemp = numeri[i]; //salvo valore in variabile temporanea
      numeri[i] = numeri[j]; // salvo successivo su precedente
      numeri[j] = numeroTemp; //salvo temporanea su successivo
    }
  }
}

console.log(numeri);
