// mouse enter
  // nascondo i dropdown active
  // mostro il dropdown corrispondente all'li
$('.parent-dropdown').mouseenter(function () {
  $('.dropdown').removeClass('active');
  $(this).children('.dropdown').addClass('active');
})

// al click sul document
  // nascondo i dropdown active
$(document).click(function () {
  $('.dropdown').removeClass('active');  
})
