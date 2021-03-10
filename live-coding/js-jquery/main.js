var btn = $('#btn');

btn.click(function () {
  var paragraphs = $('p.toro');

  // if (paragraphs.hasClass("active")) {
  //   paragraphs.removeClass("active");
  // } else {
  //   paragraphs.addClass("active");
  // }
  paragraphs.toggleClass("active");
});

//Prendo il bottone
var btnHover = $("#hover");

//Prendere evento hover
btnHover.mouseenter(function () {
  //qua faccio quello che serve quando entra il mouse
  btnHover.addClass("btn-active");
});

btnHover.mouseleave(function() {
  //qua faccio quello che serve quando esce il mouse
  btnHover.removeClass("btn-active");
});

btnHover.dblclick(function () {
  //qua faccio quello che serve quando doppio click il mouse
  btnHover.html("Cliccato");
});
