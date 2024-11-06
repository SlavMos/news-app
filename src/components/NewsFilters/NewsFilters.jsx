import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import s from "./newsFilters.module.css";

const NewsFilters = ({ filters, changeFilter }) => {
  const { data: dataCategories } = useFetch(getCategories);
  return (
    <div className={s.filers}>
      {dataCategories ? (
        <Categories
          selectedCategory={filters.category}
          categories={dataCategories.categories}
          setSelectedCategory={(category) => changeFilter("category", category)}
        />
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(kwd) => changeFilter("keywords", kwd)}
      />
    </div>
  );
};

export default NewsFilters;
