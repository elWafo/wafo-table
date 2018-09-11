import React, { Component } from 'react';
import Datatable from "../../lib";
import './parentTable.css';

const initialState = {
  columns: ['Columna 1', 'Columna 2', 'Columna 3', 'Columna 4'],
  data: [{ a: 'col 1', b: 'col 2', c: 'col 3', d: 'col 4' }, { a: 'col 1', b: 'col 2', c: 'col 3', d: 'col 4' }],
  tableClass: '',
  total: 100,
  activePage: 1,
  size: 10,
  datatableClass: '',
};

class ParentTable extends Component {
  constructor() {
    super();
    this.updateData = this.changeData.bind(this);
    this.paginationHandler = this.paginationHandler.bind(this);

    this.state = initialState;
  }

  changeData() {
    this.setState({
      data: [
        { a: 'col 2-1', b: 'col 2-2', c: 'col 2-3', d: 'col 2-4' },
        { a: 'col 2-1', b: 'col 2-2', c: 'col 2-3', d: 'col 2-4' },
      ],
    });
  }

  /** Example of a method to update data */
  updateData() {
    // get your new data here.
    // update the state to show new data or next page.
    this.setState({
      data: [
        { a: 'col 2-1', b: 'col 2-2', c: 'col 2-3', d: 'col 2-4' },
        { a: 'col 2-1', b: 'col 2-2', c: 'col 2-3', d: 'col 2-4' },
      ],
    });
  }

  /**
   * Method to handle the pagination events from the table.
   * @param {string} event 'page' || 'size'
   * @param {any} value
   */
  paginationHandler(event, value) {
    const { activePage } = this.state;
    let pagina;

    switch (event) {
      case 'page': // table page changing event
        if (value === 'prev') {
          pagina = (activePage - 1);
        } else if (value === 'next') {
          pagina = (activePage + 1);
        }
        this.setState({ activePage: pagina || value });
        // update data
        break;
      case 'size': // table size per page changing event.
        this.setState({ size: parseInt(value, 10) });
        // update data
        break;
      default:
        // nothing.
        break;
    }
  }

  render() {
    const { data, columns, total, activePage, size } = this.state;
    return (
      <div className="TableParent">
        <Datatable updateTable={this.updateData} paginacionEvent={this.paginationHandler}
          total={total} activePage={activePage} size={size} tableProps={{ columns, data }} />
      </div>
    );
  }
}

export default ParentTable;
