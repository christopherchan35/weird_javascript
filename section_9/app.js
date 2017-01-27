// want to be able to use Greetr similar to jQuery in how the 'new' keyword is not used
// var g = G$(firstname, lastname, language);

// gets a new object (the architecture allows us to not have to use the 'new' keyword here)
var g = G$('John', 'Doe');

// use our chainable method
// g.greet().setLang('es').greet(true);

// will error out because 'fr' is not a supportedLang
// g.setLang('fr');

// g.HTMLGreeting('#greeting', true);

// let's use our object on the click of the login button
$('#login').click(function() {
  // create a new 'Greetr' object
  var loginGrtr = G$('John', 'Doe');
  $('#logindiv').hide();

  // fire off an HTML greeting, passing the '#greeting' as the selector and chosen language, and log the welcome
  loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})
