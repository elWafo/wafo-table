import React from 'react';
import PropTypes from 'prop-types';
import Controls from './controls';
import Table from './table';
import Pagination from './pagination';
import useDebounce from '../hooks/useDebounce';
import locales from '../locales.json';

const LocalTable = ({
  // Base table props
  columns,
  rows,
  tableClass,
  onHeaderClick,
  noRowsMessage,
  columnsConfig,
  rowsStyle,
  // Local table props
  locale,
  tableWrapperClass,
  keepPage, // keep the current page when rows change?
  controls, // Children to controls header
  updateTable,
}) => {
  const [size, setSize] = React.useState('10');
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState('');

  const debouncedSearch = useDebounce(search, 300);

  /** ******************************** */
  /** Prep rows to render and pagination */
  /** ******************************** */
  const filteredRows = React.useMemo(() => {
    if (debouncedSearch) {
      return rows.filter(row => {
        let passes = false;
        const { rowData = row } = row;
        Object.keys(rowData).forEach(key => {
          if (passes) {
            return;
          }
          switch (typeof rowData[key]) {
            case 'string':
              if (rowData[key].toLowerCase().indexOf(debouncedSearch.toLowerCase()) !== -1) {
                passes = true;
              }
              break;
            case 'number':
              if (rowData[key].toString().indexOf(debouncedSearch) !== -1) {
                passes = true;
              }
              break;
            default:
              break;
          }
        });
        return passes;
      });
    }
    return rows;
  }, [debouncedSearch, rows]);

  const renderRows = React.useMemo(() => {
    return filteredRows.slice(size * (page - 1), size * page);
  }, [filteredRows, page, size]);

  const pages = React.useMemo(() => {
    let pagesNumber = Math.ceil(filteredRows.length / size);
    const pages = [];
    for (let i = page - 3; i <= page + 3; i++) {
      if (i > 0 && i <= pagesNumber) {
        pages.push(i);
      }
    }
    return pages;
  }, [page, filteredRows, size]);

  /** ******************************** */
  /** Reset pagination bois */
  /** ******************************** */

  React.useEffect(() => {
    if (page > Math.ceil(filteredRows.length / size)) {
      setPage(1);
    }
  }, [filteredRows, page, size]);

  React.useEffect(() => {
    setPage(1);
  }, [debouncedSearch]);

  React.useEffect(() => {
    if (!keepPage) {
      setPage(1);
    }
  }, [rows, keepPage]);

  /** ******************************** */
  /** Functions */
  /** ******************************** */

  function orderByColumn(colIndex) {
    // TODO: Sometime.
  }

  function handlePageChange(value) {
    let newPage = value;
    if (value === 'prev') {
      newPage = page - 1;
    } else if (value === 'next') {
      newPage = page + 1;
    }
    setPage(newPage);
  }

  return (
    <div className={`wafotable ${tableWrapperClass}`}>
      <Controls
        locale={locale}
        search={search}
        onSearchChange={({ target: { value } }) => setSearch(value)}
        updateTable={() => updateTable({ size, page, search })}
      >
        {controls}
      </Controls>
      <Table
        columns={columns}
        rows={renderRows}
        tableClass={tableClass}
        onHeaderClick={onHeaderClick ? onHeaderClick : orderByColumn}
        noRowsMessage={noRowsMessage ? noRowsMessage : locales[locale]['table-noentries']}
        columnsConfig={columnsConfig}
        rowsStyle={rowsStyle}
      />
      {rows.length > 0 && (
        <Pagination
          locale={locale}
          page={page}
          size={size}
          pages={pages}
          rowsLength={rows.length}
          onPageChange={handlePageChange}
          onSizeChange={({ target: { value } }) => setSize(value)}
        />
      )}
    </div>
  );
};

LocalTable.propTypes = {
  // Table props
  columns: PropTypes.array,
  rows: PropTypes.oneOfType([
    PropTypes.shape({
      data: PropTypes.any,
      config: PropTypes.any,
    }),
    PropTypes.any,
  ]),
  tableClass: PropTypes.string,
  onHeaderClick: PropTypes.func,
  noRowsMessage: PropTypes.string,
  columnsConfig: PropTypes.any,
  rowsStyle: PropTypes.any,
  // LocalTable props
  locale: PropTypes.string,
  tableWrapperClass: PropTypes.string,
  keepPage: PropTypes.bool,
  controls: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  updateTable: PropTypes.func,
};

LocalTable.defaultProps = {
  // Table props
  columns: [],
  rows: [],
  tableClass: 'table',
  onHeaderClick: null,
  noRowsMessage: 'No data to show',
  columnsConfig: {},
  rowsStyle: {},
  // LocalTable props
  locale: 'en',
  tableWrapperClass: 'table-wrapper',
  keepPage: false,
  controls: null,
  updateTable: f => f,
};

export default LocalTable;
