# Section 3

Javascript uses dynamic typing, which means the following code is valid:
``` Javascript
var testVar = 'test';
testVar = true;
testVar = 1
```
but some languages use static typing so the variable can only hold the type of value it was declared with.

Primitive Types:
  - Undefined - represents lack of existence, but don't set a variable to this
  - Null - represents lack of existence, you can set your variables to this value
  - Boolean - ```true``` or ```false```
  - Number - floating point number, there's always some decimal
  - String - sequence of characters
  - Symbol - used in ES6

You can think of the ```+``` operator as a function.
``` Javascript
var num = 3 + 4;

function +(a, b) {
  return a + b;
}

+(3, 4);
```

But calling the function as such would be quite inconvenient so we can use 'infix notation' which is what we are used to:
``` Javascript
3 + 4;
```
There is also an option called 'prefix notation:
``` Javascript
+3 4;
```
and even 'postfix notation':
``` Javascript
3 4+;
```
But let's just focus on infix notation while using Javascript

The triple equals/strict equality ```===``` is great for checking if the values are what is strictly specified.

Javascript is different from many other programming languages in how it won't error out if you try to use a variable that is ```undefined```.
``` Javascript
function greet(name) {
  console.log('Hello ' + name);
}
```
will output 'Hello undefined'
