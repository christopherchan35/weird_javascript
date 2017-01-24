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

'This' on the global scope refers to the Window
```Javascript
function a() {
  console.log(this);
}

a();
// will console.log the Window

var c = {
  name: 'The c object',
  log: function() {
    this.name = 'updated c object';
    console.log(this);

    // here is a potential problem with JS
    var setname = function(newname) {
      this.name = newname;
    }
    setname('here is the new name');
    console.log(this);
    // instead of changing the object c's name to 'here is the new name', this will instead change the name of the Window object, even though you are trying to set it inside the object itself.
  }
}

c.log();
// but there 'this' points to the c object because it was called from a method of that object
```
A common work around is to use a method equal to ```this``` and using it in place of this.
```Javascript
var c = {
  name: 'The c object',
  log: function() {
    var self = this;
    self.name = 'updated c object';
    console.log(self);

    var setname = function(newname){
      self.name = newname;
    }

    setname('here is the new name');
    console.log(self);
  }
}
```

arguments is an array-like variable that holds the values being passed into a function
```Javascript
function greet(firstname, lastname, language, ...other){
  language = language || 'en';

  if (arguments.length === 0) {
    console.log('Missing parameters!');
    return;
  }
  console.log(firstname);
  console.log(arguments);
  console.log(arguments[0]);
}

greet(); // will output an error
greet('Chris'); // arguments will have firstname and default language
greet('Chris', 'Chan', 'en', 'other', 'parameters'); // everything after the language argument will be put into an array variable as I've named 'other'
```
Watch out for: Automatic Semicolon Insertion
```Javascript
// always put in your own semicolons so JS doesn't do it for you and give
// unexpected results
function getPerson() {
  return
  {
    firstname: 'Chris'
  }
}

console.log(getPerson());
// but this will console.log undefined
// because it sees a carriage return after the return key-word
// instead the curly braces should be put on the same line

  return {
    firstname: 'Chris'
  }
```

Immediately Invoked Function Expressions (IFFEs):
```Javascript
var greeting = function(name) {
  console.log('Hello ' + name);
}('Chris');
// the parenthesis after the curly brackets run the function at the time of creation
console.log(greeting);
```

To have a function expression sitting around instead of a function statement:
```Javascript
var firstname = 'Chris';

// just wrap your function with parenthesis
(function(name) {
  var greeting = 'INSIDE IIFE: Hello'
  console.log(greeting + ' ' + name);
}(firstname));
// it can also be invoked immediately if it is followed by parenthesis
```

IIFEs wrapped in parenthesis can be designed to not collide with code outside of it because the fact that it's an anonymous function means it gets its own execution content stack. Therefore any variables in the anonymous function should not interfere with those outside of its scope. You can intentionally crash into objects outside of its scope by passing it in as an argument.

Closures: (closing in all the variables a context is supposed to have access to)
```Javascript
function greet(whattosay){
  return function(name){
    console.log(whattosay + ' ' + name);
  }
}

greet('Hi'); // this will return a function
greet('Hi')('Chris'); // this will invoke the returned function

// alternatively
var sayHi = greet('Hi');
sayHi('Chris');
// this is possible due to closures
```

Tricky Closures:
```Javascript
function buildFunctions() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);   
            })
    }
    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();
```
One would expect this to print out 0, 1, 2. But instead it prints out 3, 3, 3. This is because the console is not invoked when it is pushed into the array, but instead invoked when called with fs[0](); and same with 1 and 2. Then the i at the latest execution of the loop was 3, which caused it to break out of the for loop. And that is why it prints out the number 3 for each element of the array.

But let's say you did want to print out 0, 1, 2. This can be done with ```let``` in ES6. Otherwise, if you are using ES5, an IIFE can serve the same purpose.
```Javascript
function buildFunctions2() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    // the let holds the value of i within the scope of the block
    let j = i;
    arr.push(
      function() {
        console.log(j);
      })
  }
}

var fs2 = buildFunctions();

fs2[0];
fs2[1];
fs2[2];
```

Factory: function that makes or returns other things
```Javascript
function makeGreeting(language) {
    return function(firstname, lastname) {
        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);   
        }
        if (language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);   
        }
    }  
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');
```
Both greetEnglish and greetSpanish contain the same function but each have a different execution content and different language enclosed in its closure. Therefore they will console.log different results.
