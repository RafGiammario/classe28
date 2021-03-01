var nome = prompt("Dimmi il tuo nome:");

var cognome = prompt("Dimmi il tuo cognome:")

var colorePreferito = prompt("Dimmi il tuo colore preferito");

var password = nome + cognome + colorePreferito + 21;

//document.getElementById('password').innerHTML += password;

//BONUS
document.getElementById('password').innerHTML +=
"<span style=\"color:" + colorePreferito +"\">" + password + "</span>";
