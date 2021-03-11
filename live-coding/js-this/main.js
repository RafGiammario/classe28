$(document).ready(function () {
  cardToggle();
});

function cardToggle() {
  //al click sul titolo slideUp/slideDown di body, riferito alla card
  var cardTitle = $('.card .card-title');

  cardTitle.click(function () {
    $(this).siblings(".card-body").slideToggle();
  })
}
