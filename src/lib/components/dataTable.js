import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Controls from './controls';
import Table from './table';
import Pagination from './pagination';
import useDebounce from '../hooks/useDebounce';
import locales from '../locales.json';

const DataTable = ({
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
  controls, // Children to controls header
  updateTable,
  initialPage,
  totalRows,
  onPagination,
}, ref) => {
  const [size, setSize] = React.useState('10');
  const [page, setPage] = React.useState(initialPage || 1);
  const [search, setSearch] = React.useState('');

  const debouncedSearch = useDebounce(search, 300);

  /** ******************************** */
  /** Pagination bois */
  /** ******************************** */

  const pages = React.useMemo(() => {
    let pagesNumber = Math.ceil(totalRows / size);
    const pages = [];
    for (let i = page - 3; i <= page + 3; i++) {
      if (i > 0 && i <= pagesNumber) {
        pages.push(i);
      }
    }
    if (pagesNumber && pagesNumber < page) {
      setPage(1);
    }
    return pages;
  }, [page, totalRows, size]);

  React.useEffect(() => {
    onPagination({
      size,
      page,
      search: debouncedSearch,
    });
  }, [size, page, debouncedSearch, onPagination]);

  /** ******************************** */
  /** Functions */
  /** ******************************** */

  function handlePageChange(value) {
    let newPage = value;
    if (value === 'prev') {
      newPage = page - 1;
    } else if (value === 'next') {
      newPage = page + 1;
    }
    setPage(newPage);
  }

  React.useImperativeHandle(ref, () => ({
    forceUpdate() {
      onPagination({
        size,
        page,
        search: debouncedSearch,
      });
    },
  }));

  return (
    <div className={`wafotable ${tableWrapperClass}`}>
      <Controls
        locale={locale}
        search={search}
        onSearchChange={({ target: { value } }) => setSearch(value)}
        updateTable={
          updateTable ? () => updateTable({ size, page, search }) : () => onPagination({ size, page, search })
        }
      >
        {controls}
      </Controls>
      <Table
        columns={columns}
        rows={rows}
        tableClass={tableClass}
        onHeaderClick={onHeaderClick}
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
          rowsLength={totalRows}
          onPageChange={handlePageChange}
          onSizeChange={({ target: { value } }) => setSize(value)}
        />
      )}
    </div>
  );
};

DataTable.propTypes = {
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
  // DataTable props
  locale: PropTypes.string,
  tableWrapperClass: PropTypes.string,
  controls: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  updateTable: PropTypes.func,
  initialPage: PropTypes.number,
  totalRows: PropTypes.number,
  onPagination: PropTypes.func,
};

DataTable.defaultProps = {
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
  controls: null,
  updateTable: null,
  initialPage: 1,
  totalRows: 0,
  onPagination: f => f,
};

export default forwardRef(DataTable);
// export default DataTable;
