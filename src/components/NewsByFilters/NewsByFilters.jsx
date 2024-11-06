import { useMemo, useState } from "react";
import { PAGE_SIZES, TOTAL_PAGES } from "../../constants/constants";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import s from "./newsByFilters.module.css";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getNews } from "../../api/apiNews";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";

const NewsByFilters = () => {
  const [filters, setFilters] = useState({
    page_number: 1,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 500);
  // Функция для обновления отдельного поля в фильтрах
  const changeFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const args = useMemo(
    () => ({
      page_number: filters.page_number,
      page_size: PAGE_SIZES,
      category: filters.category === "All" ? null : filters.category,
      keywords: debouncedKeywords,
    }),
    [filters, debouncedKeywords]
  );

  const { data, loading } = useFetch(getNews, args);

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
    <div className={s.section}>
      <NewsFilters changeFilter={changeFilter} filters={filters} />
      <PaginationWrapper
        top
        bottom
        currentPage={filters.page_number}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        totalPages={TOTAL_PAGES}
        handlePageClick={handlePageClick}
      >
        <NewsList news={data?.news} isLoading={loading} />
      </PaginationWrapper>
    </div>
  );
};

export default NewsByFilters;
