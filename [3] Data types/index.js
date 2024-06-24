"use strict";

function lastChar(str) {
  if (str.length > 0) {
    console.log(str.charAt(str.length - 1));
  } else {
    console.log("Пустая строка");
  }
}

lastChar("Hello, world!");
lastChar("JavaScript");
lastChar("");
