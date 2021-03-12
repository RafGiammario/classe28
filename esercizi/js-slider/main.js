$(document).ready(function () {
  slider();
});

//FUNCTIONS
function slider() {
  generateDots();

  //selezionare gli elementi
  var nextBtn = $('.slider-wrapper .next');
  var prevBtn = $('.slider-wrapper .prev');
  var dots = $('.slider-wrapper .nav i');

  //definisco click su next
  nextBtn.click(function () {
    next();
  });

  prevBtn.click(function () {
    prev();
  });

  //prendiamo evento tasto premuto su tastiera
  $(document).keyup(function (e) {
    //verifico qual è il tasto pigiato
    if (e.keyCode == "39") {
      next();
    }

    if (e.keyCode == "37") {
      prev();
    }
  });

  dots.click(function () {
    var dotPos = dots.index(this);
    var images = $('.slider-wrapper .images img');
    //rimuovo active
    dots.removeClass('active');
    images.removeClass('active');
    //metto active su this
    $(this).addClass('active');
    images.eq(dotPos).addClass('active');
  })
}

function next() {
  // funzione attivata all'evento
  // prendo l'attuale active
  var activeImg = $('.slider-wrapper .images img.active');
  var activeDot = $('.slider-wrapper .nav i.active');

  // rimuovo active dall'elemento
  activeImg.removeClass('active');
  activeDot.removeClass('active');

  if (activeImg.hasClass('last')) {
    //comportamento se ultima
    $('.slider-wrapper .images img.first').addClass('active');
    $('.slider-wrapper .nav i.first').addClass('active');
  } else {
    // next assegno active
    activeImg.next().addClass('active');
    activeDot.next().addClass('active');
  }
}

function prev() {
  var activeImg = $('.slider-wrapper .images img.active');
  var activeDot = $('.slider-wrapper .nav i.active');

  activeImg.removeClass('active');
  activeDot.removeClass('active');

  if (activeImg.hasClass('first')) {
    $('.slider-wrapper .images img.last').addClass('active');
    $('.slider-wrapper .nav i.last').addClass('active');
  } else {
    activeImg.prev().addClass('active');
    activeDot.prev().addClass('active');
  }
}

function generateDots() {
  var nav = $('.slider-wrapper .nav');
  var imagesLen = $('.slider-wrapper .images img').length;

  for (var i = 0; i < imagesLen; i++) {
    if (i == 0) {
      var html = nav.html() + '<i class="fas fa-circle active first"></i>';
    } else if (i == imagesLen - 1) {
      var html = nav.html() + '<i class="fas fa-circle last"></i>';
    } else {
      var html = nav.html() + '<i class="fas fa-circle"></i>';
    }
    
    nav.html(html);
  }
}
