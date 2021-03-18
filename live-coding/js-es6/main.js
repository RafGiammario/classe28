// const mioArray = [];
//
// //errore
// // mioArray = [1, 100, 'Pippo'];
//
// mioArray.push(1);
// mioArray.push(100);
// mioArray.push('Pippo');
//
// mioArray[3] = 'Casa';
// mioArray[1] = 1000;
//
// console.log(mioArray);
//
// const mioObj = {};
//
// //errore
// // mioObj = {
// //   numero: 1000
// // }
//
// mioObj.numero = 1000;
//
// console.log(mioObj);
//
// if (mioObj.numero == 1000) {
//   var prova = true;
//
//   let test = true;
//   const constant = 'pippo';
// }
//
// console.log(prova); //true
// // console.log(test); //error
// // console.log(constant); //error
//
// for (let i = 0; i < mioArray.length; i++) {
//   console.log(mioArray[i]);
// }
//
// //console.log(i); //error
//
// var nome = "Roy"
// var cognome = "Naim"
//
// var saluto = `Ciao ${nome} ${cognome}`;
// console.log(saluto);
//
// nome = 'Alessandro';
// cognome = 'Benigni';
//
// saluto = `Ciao ${nome} ${cognome}`;
// console.log(saluto);
//
// var nome = "Fra";
// var cognome = "Livio";
//
// var studente = {
//   nome: nome,
//   cognome: cognome,
// }
//
// console.log(studente);
//
// nome = "Nicolò";
// cognome = "Alvernini";
//
// var studente = {
//   nome, //nome: 'Fra'
//   cognome,
// }
//
// console.log(studente);
//
// let peso =  0.3;
// let lunghezza = 15;
//
// //definizione chiavi oggetto
// const dimKey = 'dimensione';
// const pesoKey = 'quantita';
//
// const zucchina = {
//   [pesoKey]: peso,
//   [dimKey]: lunghezza
// };
//
// console.log(zucchina);
//
//
// const studenteNuovo = {};
//
// let key = prompt('Come chiamiamo la caratteristica dello studente?');
//
// let value = prompt('Quanto vale quella caratteristica?');
//
// studenteNuovo[key] = value;
//
// console.log(studenteNuovo);
//
//
// var studente = {
//   nomeStu: 'Michaelo',
//   cognomeStu: 'Casubolo',
// }
//
// let {nomeStu, cognomeStu} = studente;
//
// console.log(nomeStu, cognomeStu);
//
//
// const fruits = ['mango', 'mela', 'pera', 'banana'];
//
// let [ , fruit2, , bho] = fruits;
// //
// // let fruit2 = fruits[1];
// // let bho = fruits[3];
//
// console.log(fruit2, bho);

var bikes = [];

bikes.push({
  nome: 'Mountain bike',
  peso: 3
});


bikes.push({
  nome: 'BMX',
  peso: 4
});


bikes.push({
  nome: 'Graziella',
  peso: 2
});

var min = bikes[0].peso;
var index = 0;
for (var i = 1; i < bikes.length; i++) {
  if (bikes[i].peso < min) {
    min = bikes[i].peso;
    index = i;
  }
}

console.log("La bici con il peso minore è: " + bikes[index].nome);
