"use strict";

function sumHalf(arr) {
  let result = 0;
  for (let i = 0; i < arr.length / 2; i++) {
    result += arr[i];
  }

  return result;
}

console.log(sumHalf([1, 2, 3, 4, 5]));
console.log(sumHalf([5, 4, 3, 2, 1]));
