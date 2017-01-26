// want to be able to use Greetr similar to jQuery in how the 'new' keyword is not used
// var g = G$(firstname, lastname, language);

var g = G$('John', 'Doe');

// g.greet().setLang('es').greet(true);
// will error out because 'fr' is not a supportedLang
// g.setLang('fr');

g.HTMLGreeting('#greeting', true);
