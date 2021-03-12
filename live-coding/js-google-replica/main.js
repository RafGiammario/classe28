$(document).ready(function () {
  var iconDrop = $('.with-dropdown a i.fa-bars');

  iconDrop.click(function () {
    $(this).parent().next().toggleClass('active');
  })

});
