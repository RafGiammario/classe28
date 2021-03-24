$(document).ready(function () {
  $('input.nuovo').keyup(function (e) {
    if (e.which == 13) {
      aggiunta(this);
    }
  });

  $('button').click(function () {
    aggiunta($('input.nuovo'));
  });

  $(document).on('click', '.lista li .fa-check', function () {
    $(this).parent().remove();
  });

  $(document).on('click', '.lista li .fa-edit', function () {
    if ($(this).hasClass('active')) {
      $(this).siblings('input').hide();
      var title = $(this).siblings('input').val();
      $(this).siblings('span.todo').text(title).show();

      $(this).removeClass('active');
    } else {
      $(this).siblings('span.todo').hide();
      var title = $(this).siblings('span.todo').text();

      $(this).siblings('input').val(title).show();

      $(this).addClass('active');
    }

    // $(this).toggleClass('active');
  });

  $(document).on('keyup', '.lista li input', function (e) {
    if (e.which == 13) {
      $(this).hide();
      var title = $(this).val();
      $(this).siblings('span.todo').text(title).show();

      $(this).siblings('i.fa-edit').removeClass('active');
    }
  })
});


//FUNCTIONS
function aggiunta(inputEl) {
  var template = $('div.template li').clone();

  var nuovo = $(inputEl).val();

  if (nuovo) {
    $(inputEl).val('');

    template.children('span.todo').text(nuovo);
  }

  var todos = $('ul.lista');

  todos.append(template);
}
