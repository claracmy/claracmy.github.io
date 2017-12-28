$(document).ready(function() {
  $('#fullpage').fullpage({
    navigation: true,
    navigationTooltips: ['Home', 'About Me', 'Work', 'Contact'],
    showActiveTooltip: true,
    slidesNavigation: true,
    responsiveSlides: true,
    dragAndMove: 'horizontal',
    interlockedSlides: true,
    scrollHorizontally: true
  });

  var typed = new Typed('.type', {
    strings: ['I am a web developer.', 'I am a gamer.', 'I am a hiker.', 'I am a home barista.', 'I am a pharmacist.', 'I am a lifelong learner.'],
    typeSpeed: 40,
    smartBackspace: true,
    loop: true
  });
});
