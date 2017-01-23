# Section 4: Objects and Functions

Objects can contain:
  - Primitives aka 'property'
  - Objects aka 'property'
  - Functions aka 'method'

Object literal :
``` Javascript
var person = {
  firstname: 'Chris',
  lastname: 'Chan'
};
```

Namespace: container for variables and functions

Javascript doesn't have namespaces, so instead they can use object containers to 'fake namespaces'.
``` Javascript
var english = {
  greetings: {
    basic: 'Hello!'
  }
};

console.log(english.greetings.basic);
```
Then we would expect this to print out 'Hello!'.

In JS, you can convert an object to a JSON string
``` Javascript
var objectLiteral = {
  firstname: 'Mary',
  isAProgrammer: true
}

// converts an object into JSON string
console.log(JSON.stringify(objectLiteral));

// converts the string into a JSON object
var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }');
```

In Javascript, functions are a special type of object. You can add primitives, properties, objects, and other functions to them.
``` Javascript
function greet() {
  console.log('hi');
}

greet.language = 'english';
console.log(greet.language);
```
Then the last console.log will output ```english```.

An anonymous function is called in the same way you would call a regular function. But they cannot be hoisted since variables are set to ```undefined``` during the creation phase.
```Javascript
var anonymousGreet = function() {
  console.log('hi');
}

anonymousGreet();
```

You can also pass functions into functions
```Javascript
function log(a) {
  a();
}

log(function() {
  console.log('hi');
});
```
Then this will output ```hi```.

by Value vs. by Reference
```Javascript
// by Value(primitives)
var a = 1;
var b;
b = a
a = 2;
// b now has a copy of a's original value, a primitive value. but when a is set to 2, b is still pointing to 1.

// by Reference(all objects, including functions)
var c = { greeting: 'hi' };
var d;
d = c;
c.greeting = 'hello';
// d now points to the same object in memory that c is pointing to. so if c is set to another object, d would also point to the same object

// except the equals operator sets up a new memory space
c = { greeting: 'howdy' };
// so c would not point to howdy while d still points to hello
```
