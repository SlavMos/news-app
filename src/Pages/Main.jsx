import NewsBanner from "../components/NewsBanner/NewsBanner";
import s from "./main.module.css";

const Main = ({ item }) => {
  return (
    <main className={s.main}>
      <NewsBanner />
    </main>
  );
};

export default Main;
