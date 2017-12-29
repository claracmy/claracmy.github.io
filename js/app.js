$(document).ready(function() {
  $('#fullpage').fullpage({
    navigation: true,
    navigationTooltips: ['Home', 'About Me', 'Work', 'Contact'],
    showActiveTooltip: true,
    slidesNavigation: true,
    responsiveWidth: 1024,
    responsiveHeight: 700
  });

  var typed = new Typed('.type', {
    strings: ['I am a web developer.', 'I am a gamer.', 'I am a home barista.', 'I am a hiker.', 'I am a pharmacist.', 'I am a lifelong learner.'],
    typeSpeed: 40,
    smartBackspace: true,
    loop: true
  });

  $('.envelope-button').on('click', function() {
    $('.contact-form').slideToggle('slow');
  });
});
