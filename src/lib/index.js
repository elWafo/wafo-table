import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

/** ******************************************************* */
/** Componente Datatable */
/** ******************************************************* */

const Datatable = ({ tableProps, datatableClass, total, activePage, size, updateTable, paginacionEvent }) => {
  const { columns, data, configTable, tableClass } = tableProps;
  let pages = 1; // num of pages based on total and how many items per page.

  function generatePagination() {
    pages = Math.ceil(total / size);
    const helper = [];
    for (let i = (activePage - 3); i <= (activePage + 3); i++) {
      if (i > 0 && i <= pages) {
        helper.push(i);
      }
    }
    return helper.map((btn, index) => (
      <li key={index} className={(btn === activePage) ? 'page-item active' : 'page-item'}>
        <button type="button" className="page-link" onClick={() => { paginacionEvent('page', btn); }}>{btn}</button>
      </li>
    ));
  }

  return (
    <div className={datatableClass}>
      <div className="controls">
        <form className="form-inline">
          <div className="form-group">
            <label htmlFor="size">Número de registros</label>
            <select id="size" className="form-control form-control-sm" value={size}
              onChange={(event) => { paginacionEvent('size', event.target.value); }}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </form>
        <button type="button" className="btn btn-sm btn-light" onClick={updateTable}>Actualizar tabla</button>
      </div>

      <Table columns={columns} data={data}
        configTable={configTable} tableClass={tableClass} />

      {(total > 0) &&
        (
          <div className="pagination-wrapper">
            <p className="description">
              Mostrando registros
              del {(activePage - 1) * size + 1} al {`${activePage * size}`} de {`${total} `}
              registros.
            </p>
            <nav>
              <ul className="pagination pagination-sm">
                <li className="page-item">
                  <button type="button" className="page-link" disabled={activePage === 1}
                    onClick={() => { paginacionEvent('page', 'prev'); }}>
                    Anterior
                  </button>
                </li>
                {generatePagination()}
                <li className="page-item">
                  <button type="button" className="page-link" disabled={activePage === pages}
                    onClick={() => { paginacionEvent('page', 'next'); }}>
                    Siguiente
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )
      }
    </div>
  );
};

Datatable.propTypes = {
  tableProps: PropTypes.shape({
    columns: PropTypes.array,
    data: PropTypes.array,
    configTable: PropTypes.shape({
      columnDef: PropTypes.any,
      columnStyle: PropTypes.any,
    }),
    tableClass: PropTypes.string,
  }),
  total: PropTypes.number,
  activePage: PropTypes.number,
  size: PropTypes.number,
  datatableClass: PropTypes.string,
  updateTable: PropTypes.func,
  paginacionEvent: PropTypes.func,
};

/**
 * configTable = {
 *   columnDef: {'key': function(): any { return 'value'; } },
 *   columnStyle: {'key': {property: 'value'} },
 * };
 */
Datatable.defaultProps = {
  tableProps: {
    columns: [],
    data: [],
    configTable: { columnDef: {}, columnStyle: {} },
    tableClass: 'table',
  },
  total: 0,
  activePage: 1,
  size: 10,
  datatableClass: 'datatable-wrapper',
  updateTable: () => { },
  paginacionEvent: () => { },
};

/** ******************************************************* */
/** Componente Table */
/** ******************************************************* */

export const Table = ({ columns, data, configTable, tableClass }) => {
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

export default Datatable;
