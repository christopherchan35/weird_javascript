(function(global, $){
  var Greetr = function(firstName, lastName, language){
    return new Greetr.init(firstName, lastName, language);
    }

  // this acts as a private variable because it isn't exposed to the outside world through Greetr but can still be used through Greetr objects because its lexical environment is the entire function which includes supportedLangs
  var supportedLangs = ['en', 'es'];

  // inside prototype is where we put methods that we will want to use in the object that is returned from Greetr
  Greetr.prototype = {};

  // use self so we don't need to worry about what the current value of 'this' is
  Greetr.init = function(firstName, lastName, language){
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';
  }
  // objects created by Greetr.init have their prototype pointed at Greetr.init.prototype. Here we make it point to Greetr.prototype created above
  Greetr.init.prototype = Greetr.prototype;

  // add Greetr to global object so that it can be called anywhere like jQuery or $
  global.Greetr = global.G$ = Greetr;

}(window, jQuery));
