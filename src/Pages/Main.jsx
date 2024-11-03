import { useState, useMemo } from "react";
import s from "./main.module.css";
import { getNews } from "../api/apiNews";
import { useDebounce } from "../helpers/hooks/useDebounce";
import { PAGE_SIZES } from "../constants/constants";
import { useFetch } from "../helpers/hooks/useFetch";
import LatestNews from "../components/LatestNews/LatestNews";
import NewsByFilters from "../components/NewsByFilters/NewsByFilters";

const Main = () => {
  // const [selectedCategory, setSelectedCategory] = useState("All");
  // const [currentPage, setCurrentPage] = useState(1); // Начинаем с первой страницы
  // const [keywords, setKeywords] = useState("");

  const [filters, setFilters] = useState({
    page_number: 1,
    page_sizes: PAGE_SIZES,
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
      page_size: filters.page_sizes,
      category: filters.category === "All" ? null : filters.category,
      keywords: debouncedKeywords,
    }),
    [filters, debouncedKeywords]
  );

  const { data, loading } = useFetch(getNews, args);

  return (
    <main className={s.main}>
      <LatestNews banners={data && data.news} isLoading={loading} />
      <NewsByFilters
        filters={filters}
        data={data}
        loading={loading}
        changeFilter={changeFilter}
      />
    </main>
  );
};

export default Main;
