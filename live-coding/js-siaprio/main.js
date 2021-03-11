$(document).ready(function () {
  sipario()
});


function sipario() {
  var btn = $('#sipario-azione');
  var tende = $('.tenda');

  btn.click(function () {
    if (tende.hasClass('active')) {
      tende.removeClass('active').addClass('de-active');
    } else {
      tende.removeClass('de-active').addClass('active');
    }
  })
}
