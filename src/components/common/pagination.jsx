import React from "react";
import { PropTypes } from "prop-types";
import _ from "lodash";

const Pagination = props => {
  const { currentPage, pageSize, totalItem } = props;
  const pagesCount = Math.ceil(totalItem / pageSize);

  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li
          className={currentPage === 1 ? "page-item disabled" : "page-item"}
          onClick={props.onPreviousPage}
        >
          <a className="page-link cursor-pointer" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pages.map(page => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
            onClick={() => props.onPageChange(page)}
          >
            <a className="page-link cursor-pointer">{page}</a>
          </li>
        ))}
        <li
          className={
            currentPage === pagesCount ? "page-item disabled" : "page-item"
          }
          onClick={props.onNextPage}
        >
          <a className="page-link cursor-pointer" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  totalItem: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onPreviousPage: PropTypes.func.isRequired,
  onNextPage: PropTypes.func.isRequired
};

export default Pagination;
