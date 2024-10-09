import { useEffect } from "react";
import NewsBanner from "../components/NewsBanner/NewsBanner";
import s from "./main.module.css";
import { getNews } from "../../src/api/apiNews";
const Main = ({ item }) => {
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const news = await getNews();
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={s.main}>
      <NewsBanner />
    </main>
  );
};

export default Main;
