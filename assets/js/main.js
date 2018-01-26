
$(document).ready(function() {
  
    
  window.sr = ScrollReveal();
      sr.reveal('img', {
        duration: 2000,
        origin: 'bottom'
      });

      sr.reveal('.main-text, .sub-text', {
        duration: 2000,
        origin: 'top'
      });
  
  var widthW = $('.wrapper').width();
  if(widthW < 800) {
    $('.ham').on('click', function(e) {
      e.preventDefault();
      var navi = $('.navi');
      var full = $('.full-nav');

      if(navi.hasClass('nav-grid')) {

        navi.toggleClass('nav-grid');
        full.animate({top: '-100%'},400);
        full.animate({left: '-100%'},400);
      } else {
        navi.toggleClass('nav-grid');
        full.animate({left: '0%'},100);
        full.animate({top: '5%'},700);
      }
      $('.navi').addClass('shadow');
      $('.ham > div:nth-child(1)').toggleClass('rotate');
      $('.ham > div:nth-child(2)').toggleClass('hidden-ham');
      $('.ham > div:nth-child(3)').toggleClass('rotate3');

    });

  } else {

    $('.ham').on('click', function(e) {
      e.preventDefault();
      var navi = $('.navi');
      var full = $('.full-nav');

      if(navi.hasClass('slideInRight')) {

        navi.removeClass('animated slideInRight');
        navi.addClass('animated slideInLeft').delay(400);
        navi.toggleClass('nav-grid');
        full.animate({left: '-100%'},400);
      } else {
        navi.addClass('animated slideInRight');
        navi.toggleClass('nav-grid');
        full.animate({left: '0%'},700);
      }
      $('.navi').addClass('shadow');
      $('.ham > div:nth-child(1)').toggleClass('rotate');
      $('.ham > div:nth-child(2)').toggleClass('hidden-ham');
      $('.ham > div:nth-child(3)').toggleClass('rotate3');

    });
  }

});
