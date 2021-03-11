//far aprire e chiudere l'hamburger-Menu
var iconaApertura = $('.header-right i.fa-bars');
var iconaChiusura = $('.hamburger-menu .close');
var hamburger = $('.hamburger-menu');

// far aprire l'hamburger
iconaApertura.click(function () {
  hamburger.addClass('active');
});

// far chiudere l'hamburger
iconaChiusura.click(function () {
  hamburger.removeClass('active');
})
