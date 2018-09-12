import React from 'react';
import PropTypes from 'prop-types';

/** ******************************************************* */
/** Componente Table */
/** ******************************************************* */

const Table = ({ columns, data, configTable, tableClass }) => {
  function configHeaders() {
    return columns.map((column, index) => (
      <th key={index}>{column}</th>
    ));
  }

  function configRows() {
    const { columnDef, columnStyle } = configTable;

    const dataReady = data.map(row => (
      Object.keys(row).map((key) => {
        // Checking if there is a config function for this column.
        if (Object.prototype.hasOwnProperty.call(columnDef, key)) {
          // return columnDef[key](row); If you want the entire object.
          return {
            value: columnDef[key](row[key]),
            style: columnStyle[key],
          };
        }
        return { value: row[key], style: columnStyle[key] };
      })
    ));

    return dataReady.map((obj, index) => <TableRow key={index} data={obj} />);
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
      </tbody>
    </table>
  );
};

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  configTable: PropTypes.shape({
    columnDef: PropTypes.any,
    columnStyle: PropTypes.any,
  }),
  tableClass: PropTypes.string,
};

/**
 * configTable = {
 *   columnDef: {'key': function(): any { return 'value'; } },
 *   columnStyle: {'key': {property: 'value'} },
 * };
 */
Table.defaultProps = {
  columns: [],
  data: [],
  configTable: { columnDef: {}, columnStyle: {} },
  tableClass: 'table',
};

/** ******************************************************* */
/** Componente TableRow */
/** ******************************************************* */

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

/**
 * data: [{value: "", style: {...} }, {...}, ...]
 * style is the default React style object
 */
TableRow.defaultProps = {
  data: [],
};

/** ******************************************************* */
/** Export */
/** ******************************************************* */

export default Table;

