var cane = {
  razza: 'pastore tedesco',
  colore: ['nero', 'marrone', 'verde'],
  tipo: 'quadrupede',
  vaccinato: true,
}

console.log(cane);

cane.ringhia = false;

cane['morde'] = false;

console.log(cane);

cane.ringhia = true;

console.log(cane);

cane.colore.push('azzurrino');

console.log(cane);

for (var i = 0; i < cane.colore.length; i++) {
  console.log(cane.colore[i]);
}

var tmp = cane.tipo;

cane.tipo = [tmp, 'bipede'];

console.log(cane);

function pippo(num1, num2) {
  var numeri = {
    num1: num1,
    num2: num2
  }

  return numeri;
}

console.log(pippo(1,2));

console.log(document.getElementById('prova').innerHTML);

console.log($('#prova'));
//
// cane.abbaia = function () {
//   console.log(this);
//   console.log('wuf wuf!');
// }
//
// cane.abbaia();
//
// var paragrafo = document.getElementById('prova');
//
// paragrafo.append = function (stringa) {
//   this.innerHTML += stringa;
// }
//
// paragrafo.append("stringa da appendere");

for (var key in cane) {
  console.log(key, cane[key]);
}

//array di array
var iscritti = ['Raffa', 'Fabio', 'Fede'];
var iscritti2 = ['Leo', 'Claudio', 'Nik'];
var iscritti3 = ['Roy', 'Fabio', 'Lorenzo'];
var iscritti4 = ['Andrea', 'Giuseppe', 'Alessandro'];

var classi = [iscritti, iscritti2];
var classi1 = [iscritti3, iscritti4];
var boolean = [classi, classi1]


for (var i = 0; i < boolean.length; i++) {
  for (var j = 0; j < boolean[i].length; j++) {
    for (var k = 0; k < boolean[i][j].length; k++) {
      console.log(boolean[i][j][k]);
    }
  }
}

var canile = [
  {
    nome: 'Pluto',
    razza: 'pastore tedesco',
    colore: ['nero', 'marrone', 'verde'],
    tipo: 'quadrupede',
    vaccinato: true,
  },
  {
    nome: 'Kobi',
    razza: 'pastore tedesco',
    colore: ['nero', 'marrone', 'verde'],
    tipo: 'quadrupede',
    vaccinato: true,
  }
];

console.log(canile);

for (var i = 0; i < canile.length; i++) {
  console.log(canile[i].nome + ' ' + canile[i].razza);
}

$('#add').click(function () {
  //$("input[name='nome']")
  var nome = $("#nome").val();
  var razza = $("#razza").val();
  var vaccinato = $("#vaccinato").prop('checked');

  if (vaccinato) {
    var cane = {
      nome: nome,
      razza: razza,
      vaccinato: 'si',
    }
  } else {
    var cane = {
      nome: nome,
      razza: razza,
      vaccinato: 'no',
    }
  }  

  canile.push(cane);

  console.log(canile);
})
