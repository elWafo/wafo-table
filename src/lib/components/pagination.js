import React from 'react';
import PropTypes from 'prop-types';
import locales from '../locales.json';

const Pagination = ({ locale, page, size, pages, rowsLength, onPageChange, onSizeChange }) => {
  return (
    <div className="pagination-wrapper">
      <div className="left">
        <div className="form-group">
          {/* <label htmlFor="size">{locales[locale]['table-size-label']}</label> */}
          <select id="size" name="size" className="form-control form-control-sm" value={size} onChange={onSizeChange}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <p className="description">
          {`
            ${locales[locale]['table-pagination-desc-1']} 
            ${(page - 1) * size + 1} 
            ${locales[locale]['table-pagination-desc-2']} 
            ${page * size} ${locales[locale]['table-pagination-desc-3']} 
            ${rowsLength} 
            ${locales[locale]['table-pagination-desc-4']}
          `}
        </p>
      </div>
      <nav>
        <ul className="pagination pagination-sm">
          <li className="page-item">
            <button
              type="button"
              className="page-link"
              disabled={page === 1}
              onClick={() => {
                onPageChange('prev');
              }}
            >
              {locales[locale]['table-pagination-prev']}
            </button>
          </li>
          {pages.map((btn, index) => (
            <li key={index} className={btn === page ? 'page-item active' : 'page-item'}>
              <button
                type="button"
                className="page-link"
                onClick={() => {
                  onPageChange(btn);
                }}
              >
                {btn}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button
              type="button"
              className="page-link"
              disabled={page === Math.ceil(rowsLength / size)}
              onClick={() => {
                onPageChange('next');
              }}
            >
              {locales[locale]['table-pagination-next']}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  locale: PropTypes.string,
  page: PropTypes.number,
  size: PropTypes.string,
  pages: PropTypes.array,
  rowsLength: PropTypes.number,
  onPageChange: PropTypes.func,
  onSizeChange: PropTypes.func,
};

Pagination.defaultProps = {
  locale: 'en',
  page: 1,
  size: 10,
  pages: [],
  rowsLength: 0,
  onPageChange: f => f,
  onSizeChange: f => f,
};

export default Pagination;
