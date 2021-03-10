//prendo il bottone
var btn = $("button");

//prendo il click
btn.click(function () {
  //prendo il paragrafo inizialmente nascosto
  var p = $("p");

  p.fadeToggle();
})

var circle = $('.live-coding');
var titleOfCircle = $('.live-coding > span');

//hover su circle
//entro
circle.mouseenter(function () {
  //facciamo apparire lo span
  titleOfCircle.show();
});

//esco
circle.mouseleave(function () {
  //facciamo sparire lo span
  titleOfCircle.hide();
});
