(function(global, $){
  var Greetr = function(firstName, lastName, language){
    return new Greetr.init(firstName, lastName, language);
    }
  }
  Greetr.init = function(firstName, lastName, language){
    this.firstName = firstName;
    this.lastName = lastName;
    this.language = language || 'en';
  }
    // function init(firstName, lastName, language){
    //   this.firstname = firstname;
    //   this.lastname = lastname;
    //
    // }



}(window, jQuery));
