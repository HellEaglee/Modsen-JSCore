"use strict";

// Функция задержки
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchWithTimeout(url, timeout) {
  const controller = new AbortController();
  const signal = controller.signal;

  const timeoutPromise = new Promise((_, reject) => {
    const timer = setTimeout(() => {
      controller.abort();
      reject(new Error("Запрос отменен из-за тайм-аута"));
    }, timeout);
  });

  try {
    const fetchPromise = (async () => {
      const response = await fetch(url, { signal });
      await delay(10000); // задержка
      return response;
    })();

    const response = await Promise.race([fetchPromise, timeoutPromise]);

    if (!response.ok) {
      throw new Error(`Ошибка при загрузке данных: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      console.error("Запрос был отменен:", error.message);
    } else {
      console.error("Произошла ошибка:", error.message);
    }
    throw error;
  }
}

const url = "https://jsonplaceholder.typicode.com/posts/1";
const timeout = 5000;

fetchWithTimeout(url, timeout)
  .then((data) => {
    console.log("Данные из API:", data);
  })
  .catch((error) => {
    console.error("Ошибка при выполнении запроса:", error);
  });
