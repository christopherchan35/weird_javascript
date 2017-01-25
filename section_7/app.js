var a = 3;
console.log(typeof a);
// outputs number not Number

var b = 'Hello';
console.log(typeof b);
// outputs string

var c = {};
console.log(typeof c);
// outputs object

var d = [];
console.log(typeof d); // weird
// outputs object
console.log(Object.prototype.toString.call(d)); // better
// outputs [object Array]

function Person(name) {
  this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);
// outputs object
console.log(e instaceof Person);
// outputs true

console.log(typeof undefined);
// outputs undefined
console.log(typeof null);
// outputs object
