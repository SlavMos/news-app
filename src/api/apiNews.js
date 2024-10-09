import axios from "axios"; // Импортируем axios для выполнения HTTP-запросов
// Получаем базовый URL для API из переменных окружения
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
// Получаем API-ключ для аутентификации запросов из переменных окружения
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async () => {
  try {
    // Выполняем GET-запрос к API с помощью axios
    const response = await axios.get(`${BASE_URL}latest-news`, {
      // Параметры запроса, включая API-ключ для аутентификации
      params: {
        apiKey: API_KEY,
      },
    });
    // Возвращаем данные из ответа API
    return response.data;
  } catch (error) {
    // Ловим и выводим ошибки, если запрос не удался
    console.log(error);
  }
};
