import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Table from '../Table';

const initialState = {
  columnOrder: { name: '', order: '' },
};

class SortTable extends Component {
  constructor() {
    super();
    this.orderByColumn = this.orderByColumn.bind(this);

    this.state = initialState;
  }

  /**
   * Orders an array of objects. (The full dataset from props)
   * Based on the column index of the table and the current order (from state columnOrder).
   * @param {number} columnIndex column index.
   */
  orderByColumn(columnIndex) {
    const { columnOrder } = this.state;
    const { data } = this.props;
    if (!data.length) return;

    const prop = Object.keys(data[0])[columnIndex];
    switch (typeof data[0][prop]) {
      case 'string':
        if (columnOrder.name === prop && columnOrder.order === 'asc') {
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
        // TODO: add comparacion de dates
        break;
    }
    columnOrder.name = prop;

    // Updating state and passing sorted data upwards.
    this.setState({ columnOrder });
  }

  render() {
    const { columns, data, configTable, tableClass } = this.props;
    return (
      <Table columns={columns} data={data} configTable={configTable} tableClass={tableClass} headerClick={this.orderByColumn} />
    );
  }
}

SortTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  configTable: PropTypes.shape({
    columnDef: PropTypes.any,
    columnStyle: PropTypes.any,
  }),
  tableClass: PropTypes.string,
};

SortTable.defaultProps = {
  columns: [],
  data: [],
  configTable: { columnDef: {}, columnStyle: {} },
  tableClass: 'table',
};

export default SortTable;
