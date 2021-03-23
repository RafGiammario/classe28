// function somma(a, b) {
//   return a + b;
// }

// console.log(this);
// const somma = (a, b) => {
//   console.log(this);
//   return a + b;
// };

// console.log(somma(1,2));

// console.log(this);
// document.getElementById('btn').addEventListener('click', (e) => {
//   console.log(e);
//   $(e.target)
// });
//
// $('#btn').click(function () {
//   console.log(this);
//   $('#paragraph').click(() => {
//     console.log(this);
//   })
// })

const somma = (...args) => {
  console.log(args);
  let somma = 0;
  for (let i = 0; i < args.length; i++) {
    somma += args[i]
  }
  return somma;
}

console.log(somma(1,2,3,4));

const sommaDiv = (...args) => {
  let somma = 0;
  for (let i = 0; i < args.length - 1; i++) {
    somma += args[i]
  }
  return somma/args[args.length - 1];
}

console.log(sommaDiv(15,12,24,62,3));

const pippo = [1,2,3,4,5];
const pluto = [6,7,8,9,10];

const topolino = [...pippo, ...pluto];

console.log(topolino);

const obj = {
  name: 'Fabio',
  surname: 'Parisi'
}

const newObj = {
  ...obj,
  eta: 12
}

console.log(newObj);

// const newObj = {};
// for (var key in obj) {
//   console.log(key, obj[key]);
//   newObj[key] = obj[key];
//   console.log(newObj);
// }
// newObj.eta = 12;
//
// console.log(newObj);


const studenti = ['Dora', 'Andrea', 'Andrea', 'Giuseppe'];

studenti.forEach((elemento, index, array) => {
  console.log(elemento, array);
});

const students = [
  {
    name: 'Dora',
    gender: 'F',
  },
  {
    name: 'Andrea',
    gender: 'M',
  },
  {
    name: 'Giuditta',
    gender: 'F',
  }
];

students.forEach((item) => {
  console.log(`${item.name} è ${item.gender}`);
});


const newStudenti = studenti.map((element, i, array) => {
  if (i%2) {
    return '';
  }

  return element;
});

console.log(newStudenti);

const newStudents = students.map((element, i, array) => {
  console.log(i);
  let obj = {
    ...element,
    iscritto: true
  }
  return obj;
});

let pippo = 'Pippo';
students.map((element, i, array) => {
  console.log(this); //Pippo
  let obj = {
    ...element,
    iscritto: true
  }

  array[i] = obj;
}, pippo);

console.log(students);

// creo studentsNew
const studentsNew = []
// ciclo students
students.forEach((item) => {
  //item è di volta in volta un elemento di students
  //lo pusho in studentsNew
  studentsNew.push(item);
});

console.log(studentsNew);

const zucchine = [
  {
    peso: 0.3,
    lunghezza: 9
  },
  {
    peso: 0.6,
    lunghezza: 18
  },
  {
    peso: 0.2,
    lunghezza: 5
  },
  {
    peso: 1,
    lunghezza: 20
  }
];

//filtro le zucchine e se lunghezza > 15 copia element in zucchineLunghe (la condizione è vera)
// se condizione falsa salta
const zucchineLunghe = zucchine.filter((element) => element.lunghezza > 15 );
// stessa cosa di sopra con zucchine corte, cambio la condizione
const zucchineCorte = zucchine.filter((element) => element.lunghezza <= 15 );


console.log(zucchineLunghe);
console.log(zucchineCorte);
