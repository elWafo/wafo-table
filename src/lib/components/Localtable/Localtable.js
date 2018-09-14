import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Localtable.css';

import Table from '../Table';

const initialState = {
  columnOrder: { name: '', order: '' }, // Helper to know by what column is the data order and in which direction
  data: [],                             // Subset of the data in props. The data that is going into Table aka the UI
  size: 10,                             // Number of rows per page, it can be change from props
  activePage: 1,                        // current active page
};

class LocalTable extends Component {
  constructor(props) {
    super(props);

    this.generatePagination = this.generatePagination.bind(this);
    this.orderByColumn = this.orderByColumn.bind(this);
    this.returnDisplayData = this.returnDisplayData.bind(this);
    this.pagination = this.pagination.bind(this);
    this.sizeChange = this.sizeChange.bind(this);

    const { data, size } = this.props; // original dataset from parent and rows per page.
    this.state = {
      ...initialState,
      data: data.slice(0, size),
      size,
    };
  }

  componentDidUpdate(prevProps) {
    // var t0 = performance.now();

    // checks if the data in props (from the parent) has changed and updates the state to show new data from page 1.
    if (JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data)) {
      const { data, size } = this.props;
      this.setState({
        data: this.returnDisplayData(data, size, 1),
        size,
        activePage: 1,
      });
    }
    // var t1 = performance.now();
    // console.log("Ese if tomo " + (t1 - t0) + " milliseconds.");
  }

  /**
   * Generates the button elements for pagination
   * takes into account the data from props (fulldataset), page size and active page.
   * Gets call every render of the component.
   */
  generatePagination() {
    const { size, activePage } = this.state;
    const { data } = this.props;

    let pages = Math.ceil(data.length / size);
    const helper = [];
    for (let i = (activePage - 3); i <= (activePage + 3); i++) {
      if (i > 0 && i <= pages) {
        helper.push(i);
      }
    }
    return helper.map((btn, index) => (
      <li key={index} className={(btn === activePage) ? 'page-item active' : 'page-item'}>
        <button type="button" className="page-link" onClick={() => { this.pagination(btn); }}>{btn}</button>
      </li>
    ));
  }

  /**
   * Orders an array of objects. (The full dataset from props)
   * Based on the column index of the table and the current order (from state columnOrder).
   * @param {number} columnIndex column index.
   */
  orderByColumn(columnIndex) {
    const { columnOrder, size, activePage } = this.state;
    const { data } = this.props
    if (!data.length) return;

    const prop = Object.keys(data[0])[columnIndex]; // property name based on the column index
    switch (typeof data[0][prop]) {                 // different sort method based on the typeof element
      case 'string':
        if (columnOrder.name === prop && columnOrder.order === 'asc') { // if column was alredy used to sort and is in asc direction
          data.sort((a, b) => (b[prop] > a[prop]) - (b[prop] < a[prop]));
          columnOrder.order = 'desc';
        } else {
          data.sort((a, b) => (a[prop] > b[prop]) - (a[prop] < b[prop]));
          columnOrder.order = 'asc';
        }
        break;
      case 'number':
        if (columnOrder.name === prop && columnOrder.order === 'asc') {
          data.sort((a, b) => parseFloat(b[prop]) - parseFloat(a[prop]));
          columnOrder.order = 'desc';
        } else {
          data.sort((a, b) => parseFloat(a[prop]) - parseFloat(b[prop]));
          columnOrder.order = 'asc';
        }
        break;
      default:
        // ayylmao
        break;
    }
    columnOrder.name = prop;

    // Updating state aka ui with the data now ordered
    this.setState({ columnOrder, data: this.returnDisplayData(data, size, activePage) });
  }

  /**
   * Handles the change of page.
   * Updates activepage and display data on the state.
   * @param {*} value new activepage number
   */
  pagination(value) {
    const { activePage, size } = this.state;
    const { data } = this.props;
    let pagina;
    if (value === 'prev') {
      pagina = (activePage - 1);
    } else if (value === 'next') {
      pagina = (activePage + 1);
    }
    this.setState({
      activePage: pagina || value,
      data: this.returnDisplayData(data, size, pagina || value),
    });
  }

  /**
   * Handles the change in page size.
   * Updates size per page, data and activepage on the state.
   * @param {number} newSize
   */
  sizeChange(newSize) {
    const { activePage } = this.state;
    const { data } = this.props;

    // If current activepage is greater than the number of pages, go back to 1.
    let page, pages = Math.ceil(data.length / newSize);
    if (activePage > pages) {
      page = 1;
    } else {
      page = activePage;
    }

    this.setState({
      data: this.returnDisplayData(data, newSize, page),
      size: parseInt(newSize, 10),
      activePage: page,
    });
  }

  /**
   * Returns a subset of the full data (props).
   * Based on the page size and current activepage.
   * Usually called when updating the state.
   * @param {*} data array of data
   * @param {number} size size per page
   * @param {number} activePage current activepage
   */
  returnDisplayData(data, size, activePage) {
    return data.slice((size * (activePage - 1)), (size * activePage));
  }

  render() {
    // dataState contains the data thats gonna be displayed on the table
    // dataProp contains the full set of data (from the parent/props)
    const { data: dataState, activePage, size } = this.state;
    const { data: dataProp, columns, configTable, tableClass, localtableClass } = this.props;

    return (
      <div className={localtableClass}>
        {/* Table header and control of page size */}
        <div className="controls">
          <form className="form-inline">
            <div className="form-group">
              <label htmlFor="size">Número de registros</label>
              <select id="size" className="form-control form-control-sm" value={size}
                onChange={(event) => { this.sizeChange(event.target.value); }}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </form>
        </div>

        <Table columns={columns} data={dataState} configTable={configTable} tableClass={tableClass} headerClick={this.orderByColumn} />
        
        {/* If data show the pagination controls */}
        {(dataProp.length > 0) &&
          <div className="pagination-wrapper">
            <p className="description">
              Mostrando registros
              del {(activePage - 1) * size + 1} al {`${activePage * size}`} de {`${dataProp.length} `}
              registros.
            </p>
            <nav>
              <ul className="pagination pagination-sm">
                <li className="page-item">
                  <button type="button" className="page-link" disabled={activePage === 1}
                    onClick={() => { this.pagination('prev'); }}>
                    Anterior
                  </button>
                </li>
                {this.generatePagination()}
                <li className="page-item">
                  <button type="button" className="page-link" disabled={activePage === Math.ceil(dataProp.length / size)}
                    onClick={() => { this.pagination('next'); }}>
                    Siguiente
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        }
      </div>
    );
  }
}

LocalTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  configTable: PropTypes.shape({
    columnDef: PropTypes.any,
    columnStyle: PropTypes.any,
  }),
  tableClass: PropTypes.string,
  localtableClass: PropTypes.string,  // used for the entire table (controls and everything)
  size: PropTypes.number,             // optional page size
};

LocalTable.defaultProps = {
  columns: [],
  data: [],
  configTable: { columnDef: {}, columnStyle: {} },
  tableClass: 'table',
  localtableClass: 'localtable-wrapper',
  size: 10,
};

export default LocalTable;
