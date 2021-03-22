// milestone 1:
// definire un array di oggetti;
// ogni oggetto rappresenta un gatto,
// che è caratterizzato da: nome, età, colore e sesso.
//
// Tramite la funzione forEach,
// stampare in pagina tutti i gattini,
// ciascuno con il proprio colore e il proprio nome.

//definisco un array di gatti
const gatti = [
  {
    nome: 'Numero',
    eta: 10,
    colore: 'nero',
    sesso: 'Maschio'
  },
  {
    nome: 'Virgola',
    eta: 18,
    colore: 'giallo',
    sesso: 'Femmina'
  },
  {
    nome: 'Apicetta',
    eta: 30,
    colore: 'verde',
    sesso: 'Maschio'
  },
  {
    nome: 'Livia',
    eta: 50,
    colore: 'blu',
    sesso: 'Femmina'
  }
];

// gatti.forEach((gatto) => {
//   $('#gatti').append(`<li> Il gatto di nome ${gatto.nome} è di colore ${gatto.colore} </li>`);
// });

//milestone 2:
// dividere i gatti in due contenitori
// distinti in base al sesso e aggiungere
// a fianco di ogni gattino un fiocco
// colorato di rosa se femmina o di blu se maschio.
//
// Il colore del fiocco deve essere
// più tenue se il gatto è più giovane,
// più scuro se il gatto è più vecchio.

const maschi = gatti.filter((gatto) => gatto.sesso == "Maschio");

const femmine = gatti.filter((gatto) => gatto.sesso == "Femmina");

gatti.forEach((gatto) => {
  let colore;
  if (gatto.sesso == 'Maschio') {
    colore = "azzurro";
  } else {
    colore = "rosa";
  }

  let opacita;
  if (gatto.eta < 25) {
    opacita = 'chiara';
  } else if (25 < gatto.eta && gatto.eta < 50) {
    opacita = 'media'
  } else {
    opacita = 'scura';
  }

  $('#gatti').append(`<li class="${colore}"> Il gatto di nome ${gatto.nome} è di colore ${gatto.colore} <i class="fas fa-ribbon ${opacita}"></i> </li>`);
});

// milestone 3:
// creare un nuovo array con prima tutti i gattini
// femmina e poi tutti i gattini maschio,
// inserendo solamente nome e colore e
// opacità del fiocco per ogni gatto.

const gattiOrdinati = [ ...femmine, ...maschi];

const newGatti = gattiOrdinati.map((gatto, index, array) => {
  const {nome, colore} = gatto;

  let coloreFiocco;
  if (gatto.sesso == 'Maschio') {
    coloreFiocco = "azzurro";
  } else {
    coloreFiocco = "rosa";
  }

  let opacita;
  if (gatto.eta < 25) {
    opacita = 'chiara';
  } else if (25 < gatto.eta && gatto.eta < 50) {
    opacita = 'media'
  } else {
    opacita = 'scura';
  }

  let obj = {
    nome,
    colore,
    opacita,
    coloreFiocco
  }

  // array[index] = obj
  return obj;
});

console.log(newGatti);
