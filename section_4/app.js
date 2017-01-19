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
