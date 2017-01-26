(function(global, $){
  var Greetr = function(firstName, lastName, language){
    return new Greetr.init(firstName, lastName, language);
    }

  // this acts as a private variable because it isn't exposed to the outside world through Greetr but can still be used through Greetr objects because its lexical environment is the entire function which includes supportedLangs
  var supportedLangs = ['en', 'es'];

  var greetings = {
    en: 'Hello',
    es: 'Hola'
  };

  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };

  var logMessages = {
    en: 'Logged in',
    es: 'Inició sesión'
  }

  // inside prototype is where we put methods that we will want to use in the object that is returned from Greetr
  Greetr.prototype = {
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    },

    validate: function() {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw 'Invalid language";'
      }
    },

    greeting: function() {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + ' ' + this.fullName();
    },

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
      this.language = lang;
      this.validate();
      return this;
    },
    HTMLGreeting: function(selector, formal) {
      if (!$) {
        throw 'jQuery not loaded';
      }
      if (!selector) {
        throw 'missing jQuery selector';
      }

      var msg;
      if (formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }

      $(selector).html(msg);
      return this;
    }
  };

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
