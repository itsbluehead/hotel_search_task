function Pagination({ currentPage, totalPages, setCurrentPage }) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination" aria-label="Pagination">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          type="button"
          key={page}
          className={page === currentPage ? "active" : ""}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
