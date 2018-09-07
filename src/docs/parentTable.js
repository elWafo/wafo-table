import React, { Component } from 'react';
import Datatable from "../../lib";
import './parentTable.css';

const initialState = {
  columns: ['Columna 1', 'Columna 2', 'Columna 3', 'Columna 4'],
  data: [{ a: 'col 1', b: 'col 2', c: 'col 3', d: 'col 4' }, { a: 'col 1', b: 'col 2', c: 'col 3', d: 'col 4' }],
  total: 100,
  activePage: 1,
  size: 10,
};

class ParentTable extends Component {
  constructor() {
    super();
    this.changeData = this.changeData.bind(this);
    this.paginacion = this.paginacion.bind(this);

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

  /** Ejemplo leve de paginacion handler */
  paginacion(event, value) {
    const { activePage } = this.state;
    let pagina;

    switch (event) {
      case 'page':
        if (value === 'prev') {
          pagina = (activePage - 1);
        } else if (value === 'next') {
          pagina = (activePage + 1);
        }
        this.setState({ activePage: pagina || value });
        break;
      case 'size':
        this.setState({ size: parseInt(value, 10) });
        break;
      default:
        break;
    }
  }

  render() {
    const { data, columns, total, activePage, size } = this.state;
    return (
      <div className="TableParent">
        <Datatable updateTable={this.changeData} paginacionEvent={this.paginacion}
          total={total} activePage={activePage} size={size} tableProps={{ columns, data }} />
      </div>
    );
  }
}

export default ParentTable;
