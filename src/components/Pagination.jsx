export const Pagination = ({
  totalItems,
  numberOfPages,
  currentPage,
  setCurrentPage,
}) => {
  const nextPage = () => {
    if (currentPage !== numberOfPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const isDisabled =
    currentPage === numberOfPages || currentPage === 1 ? "true" : "false";

  return (
    <div className="pagination">
      <div className="pagination__container">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="pagination__button"
        >
          Prev
        </button>
        <span className="pagination__current">{currentPage}</span>
        <button
          onClick={nextPage}
          disabled={currentPage === numberOfPages && true}
          className="pagination__button"
        >
          Next
        </button>
      </div>
    </div>
  );
};
