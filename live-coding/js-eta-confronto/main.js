var eta1 = parseInt(prompt("Dammi la prima età:"));

var eta2 = parseInt(prompt("Dammi la seconda età:"));

if (isNaN(eta1) || isNaN(eta2)) {
  console.log("Non mi hai dato 2 numeri!");
} else {
  if (eta1 > eta2) {
    console.log("La prima età è più grande della seconda");
  } else if (eta1 == eta2) {
    console.log("Le due età sono uguali");
  } else {
    console.log("La seconda età è più grande della prima");
  }
}
