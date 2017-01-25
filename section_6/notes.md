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
