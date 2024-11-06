import { GetLastNews } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import BannerList from "../BannerList/BannerList";
import s from "./latestnews.module.css";

const LatestNews = () => {
  const { data, Loading } = useFetch(GetLastNews);
  return (
    <section className={s.section}>
      <BannerList banners={data && data.news} isLoading={Loading} />
    </section>
  );
};

export default LatestNews;
