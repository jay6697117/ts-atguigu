"use strict";
exports.__esModule = true;
var m1_1 = require("./m1");
function sum(a, b) {
    return a + b;
}
var obj = { name: "孙悟空", age: 33 };
console.log(obj);
obj.age = 18;
console.log(obj);
console.log(sum(123, 456));
console.log('哈哈');
console.log(m1_1.hi);
var fn = function (a, b) { return a + b; };
fn(123, 456);
fn(77, 22);
