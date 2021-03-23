var nomiInvitati = ["Alessandro", "Wassim", "Walter", "Vssevolod"];

var nomeUtente = prompt("Prego, il suo nome?");

var trovato = false;
for (var i = 0; i < nomiInvitati.length && !trovato; i++) {
  if (nomiInvitati[i] == nomeUtente) {
    trovato = true;
  }
}

if(trovato) {
  console.log("Le auguro una buona serata!");
} else {
  console.log("Mi dispiace lei non è in lista!");
}
