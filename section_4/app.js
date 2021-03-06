var person = new Object();
// there are better ways to create objects but this is a very simple example

// brackets can be referred to as computed member access operator
person['firstname'] = 'Chris';
person['lastname'] = 'Chan';

// member access operator
// console.log(person.firstname);
// console.log(person['firstname']);

console.log(person);

var firstNameProperty = 'firstname';

console.log(person[firstNameProperty]);

person.address = new Object();
person.address.street = '123 Main St.';
person.address.city = 'San Francisco';
person.address.state ='CA';

console.log(person.address);
console.log(person.address.street);
console.log(person.address.city);
console.log(person['address']['state']);

var person2 = {
  firstname: 'Chris',
  lastname: 'Chan',
  address: {
    street: '123 Main St.',
    city: 'San Francisco',
    state: 'CA'
  }
};

// console.log(person2);

function greet(person) {
  console.log('Hi ' + person.firstname);
}

greet(person2);
greet({
  firstname: 'John',
  lastname: 'Doe'
});

var greet = 'Hello!';
var greet = 'Hola!';
console.log(greet);
// here it would print out 'Hola!' because of the order it executes the lines of code

var fn = 'Chris';
var ln = 'Chan';

(function(firstname, lastname, language, ...other){
  var greeting = 'INSIDE THE IIFE WE GO:';
  language = language || 'en';
  console.log(greeting + ' ' + arguments[0]);
  console.log(firstname + ' ' + lastname + ' ' + language + ' ' + other);
  console.log(other);
}(fn, ln, 'en', 'where', 'are', 'you', 'now', 'that', 'I', 'need', 'you'));
