import { useEffect, useState } from "react";
import NewsBanner from "../components/NewsBanner/NewsBanner";
import s from "./main.module.css";
import { getCategories, getNews } from "../api/apiNews";
import NewsList from "../components/NewsList/NewsList";
import Skeleton from "../components/Skeleton/Skeleton";
import Pagination from "../components/Pagination/Pagination";
import Categories from "../components/Categories/Categories";

const Main = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // Устанавливаем `loading` в `true` изначально
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1); // Начинаем с первой страницы
  const totalPages = 10; // Количество страниц (максимум)
  const pageSize = 10; // Количество новостей на одной странице

  const fetchNews = async (currentPage) => {
    setLoading(true);
    try {
      // Вызываем API для получения новостей с указанием текущей страницы и размера страницы
      const response = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategory === "All" ? null : selectedCategory,
      });
      setNews(response.news); // Сохраняем полученные новости в стейт
    } catch (error) {
      console.log(error); // Обрабатываем ошибки при загрузке данных
    } finally {
      setLoading(false); // Устанавливаем, что данные загружены (или произошла ошибка)
    }
  };

  const fetchCategories = async () => {
    try {
      // Вызываем API для получения категорий
      const response = await getCategories(); // Сохраняем полученные данные в стейт
      setCategories(["All", ...response.categories]);
      console.log(response.categories);
    } catch (error) {
      console.log(error); // Обрабатываем ошибки при загрузке данных
    } finally {
      // Устанавливаем, что данные загружены (или произошла ошибка)
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  // 3. Хук useEffect — вызываем fetchNews при изменении currentPage
  useEffect(() => {
    fetchNews(currentPage); // Загружаем новости для текущей страницы при изменении currentPage
  }, [currentPage, selectedCategory]); // Когда currentPage изменяется, useEffect снова срабатывает

  const handleNextPage = () => {
    // для погинации чтобы при клике на > <  меняла страница
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePreviousPage = () => {
    // а тут назад
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handlePageClick = (pageNumber) => {
    // для погинации чтобы при клике на [1,2,3,4,5,6,]  меняла страница
    setCurrentPage(pageNumber);
  };

  return (
    <main className={s.main}>
      <Categories
        selectedCategory={selectedCategory}
        categories={categories}
        setSelectedCategory={setSelectedCategory}
      />
      {news.length > 0 && !loading ? ( // Проверяем, если новости есть и `loading` false
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type={"banner"} /> // Показываем скелетон, если новости ещё загружаются
      )}
      <Pagination
        currentPage={currentPage}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        totalPages={totalPages}
        handlePageClick={handlePageClick}
      />
      {!loading ? ( // Проверяем `loading` для списка новостей
        <NewsList news={news} />
      ) : (
        <Skeleton type={"item"} count={10} /> // Показываем скелетоны для списка новостей, пока идет загрузка
      )}
      <Pagination
        currentPage={currentPage}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        totalPages={totalPages}
        handlePageClick={handlePageClick}
      />
    </main>
  );
};

export default Main;
