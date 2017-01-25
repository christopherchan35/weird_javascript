# Section 5: Object-Oriented Javascript and Prototypal Inheritance

Classical Inheritance vs Prototypal Inheritance
  - classic is very verbose and uses a lot of keywords like private, public, interface.
  - prototypal is flexible, extensible, and easy to understand

Every object has prototypes that can hold values and also additional prototypes.

Reflection: an object can look at itself, listing and changing its properties and methods
```Javascript
var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;  
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;

// reflection
for (var prop in john) {
    // without the if statement, it would also log the getFullName function from the proto
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
}
```

Extends is a method of the underscore library that allows the combination of functions of different objects into one
```Javascript
var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;  
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

var jane = {
    address: '123 Main St.',
    getFormalFullName: function() {
      return this.lastname + ', ' + this.firstname;
    }
}

var jim = {
  getFirstName: function() {
    return firstname;
  }
}

// using the underscore library
_.extend(john, jane, jim);
// this will add the functions and values of jane and jim into john 
```
