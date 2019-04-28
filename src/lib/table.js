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
    const readyRows = rows.map(row => (
      Object.keys(row).map((key) => {
        if (configTable && Object.prototype.hasOwnProperty.call(configTable, key)) {
          return {
            value: configTable[key].def ? configTable[key].def(row[key]) : row[key],
            style: configTable[key].style ? configTable[key].style : {},
          };
        }
        return { value: row[key], style: {} };
      })
    ));
    return readyRows.map((obj, index) => <TableRow key={index} data={obj} />);
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
  rows: PropTypes.array,
  tableClass: PropTypes.string,
  headerClick: PropTypes.func,
  noRowsMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  configTable: PropTypes.any,
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
const TableRow = ({ data }) => (
  <tr>
    {data.map((obj, index) => (
      <td key={index} style={obj.style}>{obj.value}</td>
    ))}
  </tr>
);

TableRow.propTypes = {
  data: PropTypes.array,
};

TableRow.defaultProps = {
  data: [],
};

export default Table;
