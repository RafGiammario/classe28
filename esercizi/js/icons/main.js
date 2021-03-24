// milestone 1:
// definire un array di oggetti;
// ogni oggetto rappresenta un'icona,
// che è caratterizzata da: nome, prefisso,
// tipo e famiglia.
//
// Utilizzando la funzione forEach e
// il template literal,
// visualizzare in pagina tutte
// le icone con il proprio nome.

// console.log(dati);

//cicliamo dati
// dati.forEach((item, i) => {
//   // guardo cos'è item
//   //console.log(item);
//
//   let nomeEl = `<span>${item.name}</span>`;
//   let iconEl = `<i class="${item.family} ${item.prefix}${item.name}"></i>`
//   let element = `<div>${iconEl} ${nomeEl}</div>`;
//   $('#icone').append(element);
// });

// milestone 2:
// definire un array di colori e
// associare ad ogni tipo di icona un colore.
//
// Visualizzare le icone di colore
// diverso in base al tipo.
const colori = [
  'blue',
  'orange',
  'purple'
];

const datiColors = dati.map((item, i, array) => {
 if (item.type == "animal") {
   let obj = {
     ...item,
     color: colori[0]
   };
   return obj;
 } else if (item.type == "vegetable") {
   let obj = {
     ...item,
     color: colori[1]
   };
   return obj;
 } else {
   let obj = {
     ...item,
     color: colori[2]
   };
   return obj;
 }
});

// console.log(datiColors);
// ricreo le icone con il colore
// datiColors.forEach((item, i) => {
//   // guardo cos'è item
//   // console.log(item);
//
//   let nomeEl = `<span>${item.name}</span>`;
//   let iconEl = `<i class="${item.family} ${item.prefix}${item.name} color-${item.color}"></i>`
//   let element = `<div>${iconEl} ${nomeEl}</div>`;
//   $('#icone').append(element);
// });
print(datiColors);

// milestone 3:
// aggiungere una select per filtrare le icone in base al tipo.
//
// Popolare le options della select dinamicamente e,
// ogni volta che cambia il valore selezionato,
// visualizzare le icone corrispondenti.

// aggiungere una select per filtrare le icone in base al tipo.
$('select').change(function () {
   let selected = $(this).val();

   let datiFiltered;
   if (selected) {
    datiFiltered  = datiColors.filter((item) => item.type == selected);
   } else {
    datiFiltered = datiColors;
   }

   print(datiFiltered);
});


function print(array) {
  $('#icone').html('');
  array.forEach((item, i) => {
    // guardo cos'è item
    // console.log(item);

    let nomeEl = `<span>${item.name}</span>`;
    let iconEl = `<i class="${item.family} ${item.prefix}${item.name} color-${item.color}"></i>`
    let element = `<div>${iconEl} ${nomeEl}</div>`;
    $('#icone').append(element);
  });
}
