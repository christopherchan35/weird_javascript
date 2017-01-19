var person = new Object();
// there are better ways to create objects but this is a very simple example

// brackets can be referred to as computed member access operator
person['firstname'] = 'Chris';
person['lastname'] = 'Chan';

// console.log(person.firstname);
// console.log(person['firstname']);

console.log(person);

var firstNameProperty = 'firstname';

console.log(person[firstNameProperty]);
