import { useEffect, useState } from "react";
import NewsBanner from "../components/NewsBanner/NewsBanner";
import s from "./main.module.css";
import { getNews } from "../api/apiNews";
import NewsList from "../components/NewsList/NewsList";
const Main = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);
  return (
    <main className={s.main}>
      {news.length > 0 ? <NewsBanner item={news[6]} /> : null}
      <NewsList />
    </main>
  );
};

export default Main;
