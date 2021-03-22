// milestone 1:
// definire un array di oggetti; ogni oggetto
// rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
//
// Tramite la funzione forEach, stampare in pagina tutti i gattini,
// ciascuno con il proprio colore e il proprio nome.

//definisco array di cats
const cats = [
  {
    nome: 'Numero',
    eta: 10,
    colore: 'nero',
    sesso: 'Maschio'
  },
  {
    nome: 'Virgola',
    eta: 9,
    colore: 'giallo',
    sesso: 'Femmina'
  },
  {
    nome: 'Apicetta',
    eta: 15,
    colore: 'verde',
    sesso: 'Maschio'
  },
  {
    nome: 'Livia',
    eta: 25,
    colore: 'blu',
    sesso: 'Femmina'
  }
];

//forEach dell'array, per ogni ciclo stampo nome e colore del gatto
//inserisco degli li nell'ul#cats
// cats.forEach((item) => {
//   $('#cats').append(`<li>${item.nome} è di colore ${item.colore}</li>`);
// });

// milestone 2:
// dividere i gatti in due contenitori distinti in base al sesso e aggiungere
// a fianco di ogni gattino un fiocco colorato di rosa
// se femmina o di blu se maschio.
//
// Il colore del fiocco deve essere più tenue
// se il gatto è più giovane, più scuro se
// il gatto è più vecchio.

//creo due array filtrati per sesso
// const maschi = cats.filter((item) => item.sesso == 'Maschio');
//
// const femmine = cats.filter((item) => item.sesso == 'Femmina');
//
// console.log(maschi);
// console.log(femmine);
//
// maschi.forEach((item) => {
//   $('#cats').append(`<li class="azzurro">${item.nome} è di colore ${item.colore} <i class="fas fa-ribbon"></i></li>`);
// });
//
// femmine.forEach((item) => {
//   $('#cats').append(`<li class="rosa">${item.nome} è di colore ${item.colore} <i class="fas fa-ribbon"></i></li>`);
// });

//ciclo i gatti
cats.forEach((item) => {
  let colore;
  // verifico se maschio o femmina
  if (item.sesso == 'Maschio') {
    //colore corrispondente
    colore = 'azzurro';
  } else {
    colore = 'rosa';
  }

  //inserisco in html
  $('#cats').append(`<li class="${colore}">${item.nome} è di colore ${item.colore} <i class="fas fa-ribbon"></i></li>`);
});
