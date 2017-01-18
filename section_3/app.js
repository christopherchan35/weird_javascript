var a = 2, b = 3, c = 4;

a = b = c;

console.log(a);
console.log(b);
console.log(c);
// expect all 3 console logs to show the same value

console.log(1 < 2 < 3);
// expect this to be true
console.log(3 < 2 < 1);
// expect this to be false, but returns true
// precedence starts from left to right, so 3 < 2 = false
// therefore it evaluates (false < 1)
