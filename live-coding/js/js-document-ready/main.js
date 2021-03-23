$(document).ready(function () {
  cardToggle();
});


function cardToggle() {
  //al click sul titolo slideUp/slideDown di body, riferito alla card
  var cardTitle = $('.card .card-title');
  var cardBody = $('.card .card-body');

  cardTitle.click(function () {
    cardBody.slideToggle('1000', function () {
      var icon = $('.card .card-title i.fas');

      if (icon.hasClass('fa-chevron-down')) {
        icon.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      } else {
        icon.removeClass('fa-chevron-up').addClass('fa-chevron-down');
      }
    });
  })
}
