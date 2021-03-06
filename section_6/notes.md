# Section 6: Building Objects

Function Constructors: function that is used to construct objects
```Javascript
function Person(firstname, lastname) {
  this.firstname = 'firstname';
  this.lastname = 'lastname';
}

var chris = new Person('Chris', 'Chan');
console.log(chris);
// returns Person {firstname: 'Chris', lastname: 'Chan'}

var john = new Person('John', 'Doe');
```

A functions prototype can only be used by the new operator.
```Javascript
Person.prototype.getFullName = function() {
  return this.firstname + ' ' + this.lastname;
}

Person.prototype.getFormalFullName = function() {
  return this.lastname + ', ' + this.firstname;
}

console.log(chris.getFormalFullName());
// outputs Chan, Chris
```

```___proto___``` is the actual object that is used in the lookup chain to resolve methods, etc.
```prototype``` is the object that is used to build ```___proto___``` when you create an object with ```new```.
```Javascript
( new Foo ).__proto__ === Foo.prototype
( new Foo ).prototype === undefined
```

It's better to put your methods on the prototype because each object takes up memory space, while a prototype method is only taking up space one time and used whenever it is called.

Any function that is meant to be a function constructor should start with a capital
```Javascript
function Person(fn, ln) {
  this.fn = fn;
  this.ln = ln;
}
```

It can be dangerous to use function constructors on primitives
``` Javascript
var a = 3;
var b = new Number(3);
a === b;
// returns false because a is a primitive and b is an object
```

Avoid using for-in with arrays, arrays are objects and prototypes can throw you off

Prototypal Inheritance:
```Javascript
var person = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function() {
    return 'Hi ' + this.firstname;
  }
}

var chris = Object.create(person);
chris.firstname = 'Chris';
console.log(chris.greet());
// outputs 'Hi Chris'
```

Polyfill: code that adds a feature that the engine may lack
The following is an example of a polyfill, if the browser has a JS create function, then no need to refer to the polyfill. Otherwise it can use this one if it lacks that functionality.
```Javascript
if (!Object.create) {
  Object.create = function(o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation only accepts the first parameter.');
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}
```

Classes in ES6: in most programming languages ```class``` is a template to create objects from. But in JS it's an object itself from which we create additional objects.
The ```extends``` keyword sets the Protoype(__proto__)
```Javascript
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    return 'Hi ' + firstname;
  }
}

class InformalPerson extends Person {
  constructor(firstname, lastname) {
    super(firstname, lastname);
  }
  // overrides the greet method from Person
  greet() {
    return 'Yo ' + firstname;
  }
}
```
