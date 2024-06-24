"use strict";

async function fetchUrls(urls) {
  try {
    const fetchPromises = urls.map((url) =>
      fetch(url).then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка при загрузке ${url}: ${response.statusText}`);
        }
        return response.text();
      })
    );

    const results = await Promise.all(fetchPromises);
    return results;
  } catch (error) {
    console.error("Произошла ошибка:", error);
    throw error;
  }
}

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

fetchUrls(urls)
  .then((contents) => {
    contents.forEach((content, index) => {
      console.log(`Содержимое URL ${urls[index]}:\n`, content);
    });
  })
  .catch((error) => {
    console.error("Ошибка при загрузке содержимого URL-адресов:", error);
  });
