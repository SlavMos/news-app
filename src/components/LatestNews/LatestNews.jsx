import BannerList from "../BannerList/BannerList";
import s from "./latestnews.module.css";

const LatestNews = ({ banners, isLoading }) => {
  return (
    <section className={s.section}>
      <BannerList banners={banners} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
