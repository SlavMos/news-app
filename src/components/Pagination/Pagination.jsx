import s from "./pagination.module.css";

const Pagination = ({
  totalPages,
  handlePreviousPage,
  handleNextPage,
  handlePageClick,
}) => {
  return (
    <div className={s.pagination}>
      <button onClick={handlePreviousPage} className={s.pagination__button}>
        {"<"}
      </button>
      <div className={s.pagination__pages}>
        {[...Array(totalPages)].map((_, index) => (
          <button
            onClick={() => {
              handlePageClick(index + 1);
            }}
            key={index}
            className={s.pagination__page_button}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button onClick={handleNextPage} className={s.pagination__button}>
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
