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

//last News

export const GetLastNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}latest-news`, {
      params: {
        apiKey: API_KEY,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};
