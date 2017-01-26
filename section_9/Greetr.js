(function(global, $){
  var Greetr = function(firstName, lastName, language){
    return new Greetr.init(firstName, lastName, language);
    }
  }

  Greetr.prototype = {};

  // use self so we don't need to worry about what the current value of 'this' is
  Greetr.init = function(firstName, lastName, language){
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';
  }
}(window, jQuery));
