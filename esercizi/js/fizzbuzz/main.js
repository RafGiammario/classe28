//Scrivi un programma che stampi i numeri da 1 a 100,
//ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
var numeriDOM = document.getElementById('numeri');

//Conto fino a cento
// for (var i = 1; i <= 100; i++) {
//   //Controllo se multiplo di 3/5/entrambi
//   //Stampo 3=>Fizz, 5=>Buzz, 15=>FizzBuzz
//   if (!(i%15)) { //3 => true => ! => false
//     numeriDOM.innerHTML += '<li>FizzBuzz</li>';
//   } else if (!(i%3)) { //0 => false => ! => vero
//     numeriDOM.innerHTML += '<li>Fizz</li>';
//   } else if (!(i%5)) { //2 => true => ! => false
//     numeriDOM.innerHTML += '<li>Buzz</li>';
//   } else {
//     numeriDOM.innerHTML += '<li>' + i + '</li>';
//   }
// }

//BONUS
var i = 1
while (i <= 100) {
  //Controllo se multiplo di 3/5/entrambi
  //Stampo 3=>Fizz, 5=>Buzz, 15=>FizzBuzz
  if (!(i%15)) { //3 => true => ! => false
    numeriDOM.innerHTML += '<li>FizzBuzz</li>';
  } else if (!(i%3)) { //0 => false => ! => vero
    numeriDOM.innerHTML += '<li>Fizz</li>';
  } else if (!(i%5)) { //2 => true => ! => false
    numeriDOM.innerHTML += '<li>Buzz</li>';
  } else {
    numeriDOM.innerHTML += '<li>' + i + '</li>';
  }

  i++
}
