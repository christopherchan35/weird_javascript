# Section 8: Examining Famous Frameworks and Libraries

One practice or habit of a good developer is to learn from other's good code, an open source education. You can go through other frameworks and libraries and look into their source code.

A popular Javascript library that is easy to read through with tons of comments to explain the code.
SizzleJS sits inside JQuery, an entire css library.

In method chaining, instead of affecting the thing right before the dot operator, the methods are called upon the parent object. To do this, the last time of a method should be ```return this;``` so that after the method finishes, it'll point to the parent.
``` Javascript
var a = $('ul.oldclass').addclass('newclass').removeclass('oldclass');
```
But keep in mind that if you're relatively new to Javascript, relying on JQuery as a crutch can be helpful in the short-term but definitely look into the source code and understand the underlying Javascript and learn how they are doing things.
