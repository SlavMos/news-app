import s from "./pagination.module.css";

const Pagination = ({
  totalPages,
  handlePreviousPage,
  handleNextPage,
  handlePageClick,
  currentPage,
}) => {
  return (
    <div className={s.pagination}>
      <button
        disabled={currentPage <= 1}
        onClick={handlePreviousPage}
        className={s.pagination__button}
      >
        {"<"}
      </button>
      <div className={s.pagination__pages}>
        {[...Array(totalPages)].map((_, index) => (
          <button
            onClick={() => {
              handlePageClick(index + 1);
            }}
            disabled={index + 1 === currentPage}
            key={index}
            className={`${s.pagination__page_button} ${
              currentPage === index + 1 ? s.active : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
        className={s.pagination__button}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
