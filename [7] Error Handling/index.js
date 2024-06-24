"use strict";

function accessProperty(obj, property) {
  try {
    let value = obj[property];
    console.log(`Значение свойства '${property}': ${value}`);
  } catch (error) {
    if (error instanceof TypeError) {
      console.error(
        `Ошибка: Невозможно получить доступ к свойству '${property}' у неопределенного объекта.`
      );
    } else {
      console.error(`Неизвестная ошибка: ${error.message}`);
    }
  }
}

const definedObject = { name: "Alice", age: 25 };
const undefinedObject = undefined;

accessProperty(definedObject, "name");

accessProperty(undefinedObject, "name");
