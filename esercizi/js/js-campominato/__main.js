var campoDOM = document.querySelector('#campo');
var div;
var bombsArray = [];
var maxNumber = 100;

bombsArray = createBombs(bombsArray, maxNumber);

for (var i = 1; i <= 100; i++) {
  div = document.createElement('DIV');
  div.classList.add("red");
  div.addEventListener('click', clickSquare);
  campoDOM.appendChild(div);
}


function clickSquare() {
  console.log('ok');
}

function createBombs(array, max) {
  while (array.length < 16) {
    var numero = randomNumberInRange(1, max)

    if (!array.includes(numero)) {
      array.push(numero);
    }
  }

  return array;
}


function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
