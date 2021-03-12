$(document).ready(function () {
  //text
  var text = $('p').text();

  text += 'epaapaprepero';

  $('p').text(text);

  //html
  var html = $('p').html();

  html += "<span>Pippo</span>";

  $('p').html(html);

  //val
  var value = $('input').val();

  console.log(value);

  $('input').val(15);

  //attr
  var type = $('input').attr('type');

  console.log(type);

  if(type == 'number') {
    var value = parseInt($('input').val());
  }
  console.log(value);

  $('input').attr('type', 'text');
  type = $('input').attr('type');
  console.log(type);

  var type = 'number' //number
  var input = $('input'); //indirizzo di casa di input

  type = 'text'

  input.attr('type')

  //css
  var width = $('p').css('width');

  console.log(width);

  // $('p').css('width', '300px');
  // $('p').css('height', '300px');
  $('p').css('opacity', '300px');
  $('p').css('background-color', '300px');

  $('p').css({
    // 'width' : '300px',
    // 'height': '300px',
    'opacity': '0.5',
  });

  //each
  $('div p').each(function () {
    //$(this).prepend('<span> Appeso </span>');
    //$('<span> Appeso </span>').prependTo(this);
    $('<span> Appeso </span>').appendTo(this);
  });

  var container = $('.container');
  for (var i = 0; i < 10; i++) {
    var number = randomNumberInRange(1,100);
    var div = '<div>' + number + '</div>';

    // $(div).appendTo(container);
    container.append(div);
  }

  container.html("");

  for (var i = 1; i <= 10; i++) {
    var div = $("<div></div>");
    console.log(div);
    if (i%2) {
      div.addClass('green');
    } else {
      div.addClass('red');
    }
    container.append(div);
  }
});

//FUNCTIONS
function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
