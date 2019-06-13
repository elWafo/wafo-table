import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import locales from './locales.json';
import Table from './table';
import TableControls from './tableControls';
import useDebounce from './useDebounce.js';
import './styles.css';
import usePrevious from './usePrevious.js';

const DataTable = ({
  // Table props
  columns, rows, tableClass, configTable, noRowsMessage, headerClick,
  // Datatable props
  tableWrapperClass, updateTable, locale, totalRows, paginationEvent,
}) => {
  const [size, setSize] = useState('10');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]);

  const debouncedSearch = useDebounce(search, 300); // 300 avoids bouncing when holding delete
  const previousSearch = usePrevious(debouncedSearch);

  // Generate pagination
  useEffect(() => {
    let pagesNumber = Math.ceil(totalRows / size);
    const pages = [];
    for (let i = (page - 3); i <= (page + 3); i++) {
      if (i > 0 && i <= pagesNumber) {
        pages.push(i);
      }
    }
    setPages(pages);
  }, [page, totalRows, size]);

  // Fire event
  useEffect(() => {
    if ((debouncedSearch !== previousSearch) && page !== 1) {
      setPage(1);
    } else {
      paginationEvent({
        size,
        page,
        search: debouncedSearch,
      });
    }
  }, [size, page, debouncedSearch, previousSearch]);

  // TODO: Fix pagination on page size change.

  function onSizeChange(event) {
    const { target: { value } } = event;
    setSize(value);
  }

  function onSearchChange(event) {
    const { target: { value } } = event;
    setSearch(value);
  }

  function pageChange(value) {
    let newPage = value;
    if (value === 'prev') {
      newPage = (page - 1);
    } else if (value === 'next') {
      newPage = (page + 1);
    }
    setPage(newPage);
  }

  return (
    <div className={tableWrapperClass}>
      <TableControls
        size={size}
        onSizeChange={onSizeChange}
        search={search}
        onSearchChange={onSearchChange}
        locale={locale}
        updateTable={updateTable ? updateTable : () => { paginationEvent({ size, page, search }); }}
      />
      <Table
        columns={columns}
        rows={rows}
        tableClass={tableClass}
        configTable={configTable}
        noRowsMessage={noRowsMessage}
        headerClick={headerClick}
      />
      {/** Pagination */}
      {(totalRows > 0) && (
        <div className="pagination-wrapper">
          <p className="description">
            {`
              ${locales[locale]['table-pagination-desc-1']} 
              ${(page - 1) * size + 1} 
              ${locales[locale]['table-pagination-desc-2']} 
              ${page * size} ${locales[locale]['table-pagination-desc-3']} 
              ${totalRows} 
              ${locales[locale]['table-pagination-desc-4']}
            `}
          </p>
          <nav>
            <ul className="pagination pagination-sm">
              <li className="page-item">
                <button type="button" className="page-link" disabled={page === 1}
                  onClick={() => { pageChange('prev'); }}>
                  {locales[locale]['table-pagination-prev']}
                </button>
              </li>
              {pages.map((btn, index) => (
                <li key={index} className={(btn === page) ? 'page-item active' : 'page-item'}>
                  <button type="button" className="page-link" onClick={() => { pageChange(btn); }}>{btn}</button>
                </li>
              ))}
              <li className="page-item">
                <button type="button" className="page-link" disabled={page === pages.length}
                  onClick={() => { pageChange('next'); }}>
                  {locales[locale]['table-pagination-next']}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

DataTable.propTypes = {
  // Table props
  columns: PropTypes.array,
  rows: PropTypes.array,
  tableClass: PropTypes.string,
  configTable: PropTypes.any,
  noRowsMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  headerClick: PropTypes.func,
  // Datatable props
  tableWrapperClass: PropTypes.string,
  updateTable: PropTypes.func,
  locale: PropTypes.string,
  totalRows: PropTypes.number,
  paginationEvent: PropTypes.func,
};

DataTable.defaultProps = {
  // Table props
  columns: [],
  rows: [],
  tableClass: 'table',
  configTable: {},
  noRowsMessage: 'No data to show.',
  headerClick: f => f,
  // Datatable props
  tableWrapperClass: 'table-wrapper',
  // updateTable: f => f,
  locale: 'en',
  totalRows: 0,
  paginationEvent: f => f,
};

export default DataTable;
