// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

var parola1 = prompt("Dammi la prima parola").trim();

var parola2 = prompt("Dammi la seconda parola").trim();

if (typeof parola1 != "string" || typeof parola1 != "string") {
  console.log("Voglio due parole");
} else {
  if(parola1.length > parola2.length) {
    console.log(parola2);
    console.log(parola1);
  } else {
    console.log(parola1, parola2);
  }
}
