import { useEffect, useState } from "react";
import NewsBanner from "../components/NewsBanner/NewsBanner";
import s from "./main.module.css";
import { getNews } from "../api/apiNews";
import NewsList from "../components/NewsList/NewsList";
import Skeleton from "../components/Skeleton/Skeleton";

const Main = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true); // Устанавливаем `loading` в `true` изначально

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news); // После получения данных сохраняем их в стейт
      } catch (error) {
        console.log(error); // Обрабатываем ошибки
      } finally {
        setLoading(false); // Важно: `loading` ставим в `false` только после загрузки данных или ошибки
      }
    };

    fetchNews(); // Вызываем функцию загрузки данных
  }, []); // Пустой массив зависимостей означает, что эффект будет выполнен только один раз при монтировании

  return (
    <main className={s.main}>
      {news.length > 0 && !loading ? ( // Проверяем, если новости есть и `loading` false
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type={"banner"} /> // Показываем скелетон, если новости ещё загружаются
      )}
      {!loading ? ( // Проверяем `loading` для списка новостей
        <NewsList news={news} />
      ) : (
        <Skeleton type={"item"} count={10} /> // Показываем скелетоны для списка новостей, пока идет загрузка
      )}
    </main>
  );
};

export default Main;
