import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ columns, rows, tableClass, onHeaderClick, noRowsMessage, columnsConfig, rowsStyle }) => {
  const readyRows = React.useMemo(() => {
    return rows.map(row => {
      // Allows to pass the column data directly or adding a css object for the row.
      let { rowData = row, rowStyle = rowsStyle } = row;

      const columns = Object.keys(rowData).map(key => {
        if (Object.prototype.hasOwnProperty.call(columnsConfig, key)) {
          return {
            // If column config includes the key but there is no render function prop, assume the function is passed directly
            value: columnsConfig[key].render
              ? columnsConfig[key].render(rowData[key])
              : columnsConfig[key](rowData[key]),
            style: columnsConfig[key].style ? columnsConfig[key].style : {},
          };
        }
        return {
          value: rowData[key],
          style: {},
        };
      });

      return { columns, rowStyle };
    });
  }, [rows, columnsConfig, rowsStyle]);

  return (
    <table className={tableClass}>
      <thead>
        <tr>
          {columns.map((column, i) => (
            <th key={i} onClick={() => onHeaderClick(i)}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {readyRows.map((row, i) => (
          <tr key={i} style={row.rowStyle}>
            {row.columns.map((column, j) => (
              <td key={j} style={column.style}>
                {column.value}
              </td>
            ))}
          </tr>
        ))}
        {rows.length === 0 && (
          <tr>
            <td colSpan="100%" style={{ textAlign: 'center' }}>
              {noRowsMessage}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

Table.propTypes = {
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
};

Table.defaultProps = {
  columns: [],
  rows: [],
  tableClass: 'table',
  onHeaderClick: f => f,
  noRowsMessage: 'No data to show',
  columnsConfig: {},
  rowsStyle: {},
};

export default Table;
