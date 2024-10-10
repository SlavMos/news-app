import NewsItem from "../NewsItem/NewsItem";
import s from "./newList.module.css";

const NewsList = ({ news }) => {
  return (
    <ul className={s.list}>
      {news.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default NewsList;
