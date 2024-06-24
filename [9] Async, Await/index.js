"use strict";

// Асинхронная функция для загрузки данных с одного сервера и использования их для запроса к другому серверу
async function fetchDataAndUseIt() {
  try {
    // Первый запрос для получения данных с первого сервера
    const firstResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!firstResponse.ok) {
      throw new Error(
        `Ошибка при загрузке данных с первого сервера: ${firstResponse.statusText}`
      );
    }
    const firstData = await firstResponse.json();

    // Использование данных из первого запроса для выполнения второго запроса
    const userId = firstData.userId;
    const secondResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!secondResponse.ok) {
      throw new Error(
        `Ошибка при загрузке данных со второго сервера: ${secondResponse.statusText}`
      );
    }
    const secondData = await secondResponse.json();

    // Возвращаем данные второго запроса
    return secondData;
  } catch (error) {
    console.error("Произошла ошибка:", error);
    throw error;
  }
}

// Примеры использования:
fetchDataAndUseIt()
  .then((data) => {
    console.log("Данные со второго сервера:", data);
  })
  .catch((error) => {
    console.error("Ошибка при выполнении запросов:", error);
  });
