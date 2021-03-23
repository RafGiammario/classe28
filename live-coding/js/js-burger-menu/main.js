// Elementi HTML:
// .querySelectorAll()
// .getElementsByClassName()
// .previousElementSibling
//
// Eventi:
// .addEventListener()
// .target
//
// Array:
// .includes()
//
// Input:
// .checked
// .value

var ingredientBtns = document.querySelectorAll('.ingredient-add');

// Al click sul btn add spunto l'elemento corrispondente
for (var i = 0; i < ingredientBtns.length; i++) {
  ingredientBtns[i].addEventListener('click', function(e) {
    e.target.previousElementSibling.checked = true;
  });
}

var calculateBtn = document.getElementById('button');

calculateBtn.addEventListener('click', function(e) {
  //prendere il value di tutti i checkbox che sono checked
  var ingredients = document.getElementsByClassName('ingredient-checkbox')

  var prezzo = 0;
  for (var i = 0; i < ingredients.length; i++) {
    var ingredient = ingredients[i];

    //sommo value se input è checked
    if (ingredient.checked) {
      prezzo += parseFloat(ingredient.value);
    }
  }

  //lista coupon
  var coupons = [
    'NEWACCOUNT',
    '2x1',
  ]

  var coupon = document.getElementById('coupon').value;
  var sconto = 0;

  if(coupons.includes(coupon)) {
    sconto = prezzo * 0.2;
  }

  //prendo price e salvo nell'innerHTML la somma
  document.getElementById('price').innerHTML = prezzo - sconto;
});
