$(document).ready(function() {
  $('#fullpage').fullpage();
  var typed = new Typed('.type', {
    strings: ['I am a Web Developer.', 'I am a gamer.', 'I am a hiker.', 'I am a home barista.', 'I am a pharmacist.', 'I am a lifelong learner.'],
    typeSpeed: 40,
    smartBackspace: true,
    loop: true
  });

  // const typed = new Typed('.type', {
  //   strings: ['I am a web developer.', 'I am a gamer.', 'I am a hiker.'],
  //   typeSpeed: 90
  // });

  // $('.type').typed({
  //   strings: ['I am a web developer.', 'I am a gamer.', 'I am a hiker.'],
  //   typeSpeed: 90
  // });

});

//
// $(function(){
//   $('.type').typed({
//     strings: ['I am a web developer.', 'I am a gamer.', 'I am a hiker.'],
//     typeSpeed: 90
//   });
// });
