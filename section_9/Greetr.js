(function(global, $){
  // 'new' an object
  var Greetr = function(firstName, lastName, language){
    return new Greetr.init(firstName, lastName, language);
    }

  // this acts as a private variable because it isn't exposed to the outside world through Greetr but can still be used through Greetr objects because its lexical environment is the entire function which includes supportedLangs

  // hidden within the scope of the IIFE and never directly accessible
  var supportedLangs = ['en', 'es'];

  // informal greetings
  var greetings = {
    en: 'Hello',
    es: 'Hola'
  };

  // formal greetings
  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };

  // logger messages
  var logMessages = {
    en: 'Logged in',
    es: 'Inició sesión'
  }

  // inside prototype is where we put methods that we will want to use in the object that is returned from Greetr

  // prototype holds methods (to save memory space)
  Greetr.prototype = {
    // 'this' refers to the calling object at execution time
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    },

    validate: function() {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw 'Invalid language";'
      }
    },

    // retrieve messages from object by referring to properties using [] syntax
    greeting: function() {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + ' ' + this.fullName();
    },

    // chainable methods return their own containing object
    greet: function(formal) {
      var msg;

      // if undefined or null it will be coerced to 'false'
      if (formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }
      // 'this' refers to the calling object at execution time and makes the method chainable
      return this;
    },
    log: function() {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }
      return this;
    },
    setLang: function(lang) {
      // set the language
      this.language = lang;
      // validate
      this.validate();
      // make chainable
      return this;
    },
    HTMLGreeting: function(selector, formal) {
      if (!$) {
        throw 'jQuery not loaded';
      }
      if (!selector) {
        throw 'missing jQuery selector';
      }

      // determine the message
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }

      // inject the message in the chosen place in the DOM
      $(selector).html(msg);
      // make chainable
      return this;
    }
  };

  // use self so we don't need to worry about what the current value of 'this' is
  // the actual object is created here, allowing us to 'new' an object without calling 'new'
  Greetr.init = function(firstName, lastName, language){
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';

    self.validate();
  }
  // objects created by Greetr.init have their prototype pointed at Greetr.init.prototype. Here we make it point to Greetr.prototype created above

  // trick borrowed from jQuery so we don't have ot use the 'new' keyword
  Greetr.init.prototype = Greetr.prototype;

  // add Greetr to global object so that it can be called anywhere like jQuery or $

  // attach our Greetr to the global object, and provide a shorhand '$G'
  global.Greetr = global.G$ = Greetr;

}(window, jQuery));
