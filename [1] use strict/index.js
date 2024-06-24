"use strict";

function check(arr, val) {
  return arr.includes(val);
}

console.log(check([1, 2, 3, 4, 5], 3));
console.log(check([1, 2, 3, 4, 5], 6));
