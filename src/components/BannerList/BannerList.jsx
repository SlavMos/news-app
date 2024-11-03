import withSkeleton from "../../helpers/hocs/withSkeleton";
import NewsBanner from "../NewsBanner/NewsBanner";
import s from "./bannerList.module.css";

const BannerList = ({ banners, isLoading }) => {
  return (
    <ul className={s.banners}>
      {banners?.map((banners) => {
        return <NewsBanner key={banners.id} item={banners} />;
      })}
    </ul>
  );
};

const BannerListWitchSkeleton = withSkeleton(BannerList, "banner", 5, "row");

export default BannerListWitchSkeleton;
