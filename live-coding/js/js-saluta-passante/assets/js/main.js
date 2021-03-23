//chiedo nome e salvo in variabile
var nome = prompt("Dimmi il tuo nome");
console.log(nome);

//stampo nome nel DOM nell'elemento con id saluto
document.getElementById('saluto').innerHTML = "Ciao " + nome;

//chiedo anno nascita
var annoNascita = prompt("Quando sei nato? es 1995"); //"1981" il rsultato è una stringa

//calcolo età
var eta = 2021 - annoNascita;
console.log(eta);

//stampo età nel DOM nell'elemento con id anno
document.getElementById('anno').innerHTML = "Secondo me hai " + eta + " anni";
