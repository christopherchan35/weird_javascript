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