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
