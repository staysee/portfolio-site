//Sticky Nav
$(document).ready(function(){
  $(window).bind('scroll', function() {
    var navHeight = $( window ).height() - 70;
    if ($(window).scrollTop() > navHeight) {
     $('nav').addClass('fixed');
    }
    else {
     $('nav').removeClass('fixed');
    }
  });
});


var section = $('section');
var nav = $('nav');
var navHeight = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  section.each(function() {
    var top = $(this).offset().top - navHeight,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      section.removeClass('active');

      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

