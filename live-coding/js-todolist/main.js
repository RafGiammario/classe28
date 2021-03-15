// On click su un item verrà cancellata la riga.
// Una volta che l’item è nascosto,
// far comparire un modal: “Item Cancellato”
// e farlo scomparire subito dopo.

$(document).ready(function () {
  //clicco su span X e display none
  //faccio comparire modal
  var chiusura = $('#todos li span');

  chiusura.click(function () {
    $(this).parent().hide('slow');

    setTimeout(function () {
      var messagio = $('#modal');
      messagio.addClass('active');

      setTimeout(function () {
        messagio.removeClass('active');
      }, 1000);
    }, 750);
  });
});
