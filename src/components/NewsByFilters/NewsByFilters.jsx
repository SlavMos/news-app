import { getCategories } from "../../api/apiNews";
import { TOTAL_PAGES } from "../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import Categories from "../Categories/Categories";
import NewsBanner from "../NewsBanner/NewsBanner";
import NewsList from "../NewsList/NewsList";
import Pagination from "../Pagination/Pagination";
import Search from "../Search/Search";
import s from "./newsByFilters.module.css";

const NewsByFilters = ({ filters, changeFilter, data, loading }) => {
  const { data: dataCategories } = useFetch(getCategories);
  const handleNextPage = () => {
    // для погинации чтобы при клике на > <  меняла страница
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filters.page_number + 1);
    }
  };
  const handlePreviousPage = () => {
    // а тут назад
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number - 1);
    }
  };
  const handlePageClick = (pageNumber) => {
    // для погинации чтобы при клике на [1,2,3,4,5,6,]  меняла страница
    changeFilter("page_number", pageNumber);
  };
  return (
    <div>
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

      <Pagination
        currentPage={filters.page_number}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        totalPages={TOTAL_PAGES}
        handlePageClick={handlePageClick}
      />
      <NewsList news={data?.news} isLoading={loading} />

      <Pagination
        currentPage={filters.page_number}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        totalPages={TOTAL_PAGES}
        handlePageClick={handlePageClick}
      />
    </div>
  );
};

export default NewsByFilters;
