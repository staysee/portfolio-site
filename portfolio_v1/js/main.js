//Sticky Nav
$(document).ready(function(){


  $(window).bind('scroll', function() {
    var navHeight = $( window ).height() - 50;
    if ($(window).scrollTop() > navHeight) {
     $('nav').addClass('fixed');
      $('.section').each(function(i) {
        if ($(this).position().top <= $(window).scrollTop() - 40){
          $('nav a.active').removeClass('active');
          $('nav a').eq(i).addClass('active');
        }
      })
    } else {
     $('nav').removeClass('fixed');
     $('nav a.active').removeClass('active');
     $('nav a:first').addClass('active');
    }
  });

});

