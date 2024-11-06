import s from "./main.module.css";
import LatestNews from "../components/LatestNews/LatestNews";
import NewsByFilters from "../components/NewsByFilters/NewsByFilters";

const Main = () => {
  return (
    <main className={s.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
};

export default Main;
