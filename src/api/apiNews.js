import axios from "axios";

const BASE_URL = process.env.REACT_APP_NEWS_BASE_API_URL;
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export const getNews = async ({
  page_number,
  page_size,
  category,
  keywords,
}) => {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        apiKey: API_KEY,
        page_number,
        page_size,
        category,
        keywords,
      },
    });
    // console.log(response);
    // Выводим весь ответ в консоль

    // Возвращаем данные
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
  }
};
// category в getNews и функция getCategories выполняют разные задачи:

// Одна получает новости по конкретной категории,
// Другая получает список всех возможных категорий для выбора.
export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}available/categories`, {
      params: {
        apiKey: API_KEY,
      },
    });

    // Выводим весь ответ в консоль

    // Возвращаем данные
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
  }
};

// import axios from "axios"; // Импортируем axios для выполнения HTTP-запросов
// // Получаем базовый URL для API из переменных окружения
// const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
// // Получаем API-ключ для аутентификации запросов из переменных окружения
// const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

// export const getNews = async () => {
//   try {
//     // Выполняем GET-запрос к API с помощью axios
//     const response = await axios.get(`${BASE_URL}latest-news`, {
//       // Параметры запроса, включая API-ключ для аутентификации
//       params: {
//         apiKey: API_KEY,
//       },
//     });
//     // Возвращаем данные из ответа API
//     return response.data;
//   } catch (error) {
//     // Ловим и выводим ошибки, если запрос не удался
//     console.log(error);
//   }
// };
