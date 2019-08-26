import React from 'react';
import PropTypes from 'prop-types';

/**
 * Generates a simple table from props.
 * @param {*} configTable Object with a func and style object to customize columns.
 * configTable: { 'key': {def: (value) => value, styles: {} }}
 */
const Table = ({ columns, rows, tableClass, headerClick, noRowsMessage, configTable }) => {
  function configHeaders() {
    return columns.map((column, index) => (
      <th key={index} onClick={() => headerClick(index)}>{column}</th>
    ));
  }

  function configRows() {
    const tableColumns = configTable.columns ? configTable.columns : configTable;
    const rowsConfig = configTable.rows ? configTable.rows : {};

    return rows.map((row, i) => {
      const data = row.rowData ? row.rowData : row;
      const rowConfig = (row.rowConfig && row.rowConfig.row) ? row.rowConfig.row : rowsConfig;

      const columns = (row.rowConfig && row.rowConfig.columns) ? row.rowConfig.columns : tableColumns;

      const rowObj = Object.keys(data).map((key) => {
        if (columns && Object.prototype.hasOwnProperty.call(columns, key)) {
          return {
            value: columns[key].def ? columns[key].def(data[key]) : data[key],
            style: columns[key].style ? columns[key].style : {},
          };
        }
        return {
          value: data[key],
          style: {},
        };
      });

      return <TableRow key={i} data={rowObj} rowConfig={rowConfig} />;
    });
  }

  return (
    <table className={tableClass}>
      <thead>
        <tr>
          {configHeaders()}
        </tr>
      </thead>
      <tbody>
        {configRows()}
        {
          rows.length === 0
          && <tr><td colSpan="100%" style={{ textAlign: 'center' }}>{noRowsMessage}</td></tr>
        }
      </tbody>
    </table>
  );
};

Table.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.oneOfType([
    PropTypes.shape({
      rowData: PropTypes.any,
      rowConfig: PropTypes.any,
    }),
    PropTypes.any,
  ]),
  tableClass: PropTypes.string,
  headerClick: PropTypes.func,
  noRowsMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  configTable: PropTypes.shape({
    rows: PropTypes.any,
    columns: PropTypes.any,
  }),
};

Table.defaultProps = {
  columns: [],
  rows: [],
  tableClass: 'table',
  headerClick: f => f,
  noRowsMessage: 'No data to show.',
  configTable: {},
};

/**
 * Generate a row for the table.
 * @param {*} data Array with the data for each column. 
 * data: [{value: "", style: {...}}]
 */
const TableRow = ({ data, rowConfig }) => (
  <tr style={rowConfig}>
    {data.map((obj, index) => (
      <td key={index} style={obj.style}>{obj.value}</td>
    ))}
  </tr>
);

TableRow.propTypes = {
  data: PropTypes.array,
  rowConfig: PropTypes.any,
};

TableRow.defaultProps = {
  data: [],
  rowConfig: {}
};

export default Table;
