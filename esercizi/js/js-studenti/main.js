// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti
// e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 input di aggiungere un nuovo
// oggetto studente inserendo nell’ordine: nome, cognome e età.

var studente = {
  'nome': 'Lorenzo',
  'cognome': 'Bernini',
  'eta': '57',
};

for (var key in studente) {
  console.log(studente[key]);
}

var studenti = [
  {
    'nome': 'Lorenzo',
    'cognome': 'Bernini',
    'eta': '57',
  },
  {
    'nome': 'Dora',
    'cognome': 'Budic',
    'eta': '19',
  },
  {
    'nome': 'Andrea',
    'cognome': 'Gori',
    'eta': '38',
  }
];

$(document).ready(function () {
  for (var i = 0; i < studenti.length; i++) {
    $('#lista').append('<li>' + studenti[i].nome + ' ' + studenti[i].cognome + '</li>')
  }

  $('#btnStudente').click(function () {
    var altroStudente = {};

    altroStudente.nome = $('input[name="nome"]').val();
    altroStudente.cognome = $('input[name="cognome"]').val();
    altroStudente.eta = $('input[name="eta"]').val();

    $('input[name="nome"]').val('ciao');

    studenti.push(altroStudente);

    console.log(studenti);
  });
});
