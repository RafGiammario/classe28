//scrivo in input e appare in p all'invio

$('#value').keypress(function (e) {
  console.log(e);

  var value = $(this).val();

  if (e.which == 13) {
    $(this).val('');
  }

  if (value.length >= 5) {
    $("#screen").text(value);
  }

})
