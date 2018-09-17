import React from 'react';
import PropTypes from 'prop-types';
import './Datatable.css';

import Table from '../Table';

const Datatable = ({ tableProps, datatableClass, total, activePage, size, updateTable, paginacionEvent }) => {
  const { columns, data, configTable, tableClass } = tableProps;
  let pages = 1;

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

  function returnDisplayData() {
    return data.slice(0, size);
  }

  return (
    <div className={datatableClass}>
      {/* controles */}
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

      <Table columns={columns} data={returnDisplayData()} configTable={configTable} tableClass={tableClass} />

      {/* pagination */}
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

export default Datatable;
