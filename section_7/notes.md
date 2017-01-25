# Section 7: Odds and Ends

When an error is ```unexpected token {``` or something similar, it usually means you've missed a comma or some small punctuation

The following code will not return an error
```Javascript
var person;

persom = {}
console.log(persom);
```
To avoid small errors like these, begin your JS file or at the beginning of a function with ```"use strict";``` which will throw an error with the above code.
