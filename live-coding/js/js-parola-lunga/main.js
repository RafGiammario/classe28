var parola1 = prompt("Dammi la prima parola:");

var parola2 = prompt("Dammi la seconda parola:");

var parola1Len = parola1.length;

var parola2Len = parola2.length;

console.log(parola1Len, parola2Len);

if (parola1Len > parola2Len) {
  console.log("La prima parola è più lunga della seconda");
} else if (parola1Len == parola2Len) {
  console.log("La prima parola è lunga quanto la seconda");
} else {
  console.log("La seconda parola è più lunga della prima");
}
