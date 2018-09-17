import React, { Component } from 'react';
import { Datatable } from '../../../../lib';
import './dataTable.css';

const initialState = {
  columns: ['Estatus', 'Cuenta', 'Descripcion', 'Tipo de cuenta', 'Compañia', 'Segmento', 'Fecha', 'Opciones'],
  data: [
    {
      "estado": 1,
      "cuenta": "commodo cillum voluptate",
      "descripcion": "ad tempor",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 2,
      "fecha": "2014-03-01T08:50:25 +07:00",
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "voluptate minim esse",
      "descripcion": "aliqua nostrud",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 1,
      "fecha": "2014-12-28T04:31:19 +07:00",
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "dolor consequat incididunt",
      "descripcion": "incididunt esse",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 4,
      "fecha": "2018-06-15T05:27:19 +07:00",
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "culpa amet culpa",
      "descripcion": "aliqua eiusmod",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 1,
      "fecha": "2015-07-04T12:56:20 +07:00",
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "excepteur cupidatat dolore",
      "descripcion": "pariatur minim",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 5,
      "fecha": "2018-06-01T07:25:07 +07:00",
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "nisi ipsum labore",
      "descripcion": "et dolor",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 4,
      "fecha": "2014-03-11T11:32:21 +07:00",
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "do do sunt",
      "descripcion": "fugiat elit",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 4,
      "fecha": "2015-04-15T01:42:29 +07:00",
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "est voluptate non",
      "descripcion": "deserunt reprehenderit",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 5,
      "fecha": "2015-06-13T10:19:50 +07:00",
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "sint adipisicing cillum",
      "descripcion": "consectetur ullamco",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 3,
      "fecha": "2016-04-22T12:14:22 +07:00",
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "esse eiusmod excepteur",
      "descripcion": "ut voluptate",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 5,
      "fecha": "2016-06-29T06:00:58 +07:00",
      "id": 4
    },
    
  ],
  total: 10,
  activePage: 1,
  size: 10,
};

class DataTableExample extends Component {
  constructor() {
    super();
    this.updateData = this.updateData.bind(this);
    this.paginationHandler = this.paginationHandler.bind(this);

    this.state = initialState;
  }

  updateData() {
    // get data and update state.
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
    const { columns, data, total, activePage, size } = this.state;
    return (
      <div className="Tabla">
        <Datatable tableProps={{ columns, data }} total={total} activePage={activePage} size={size}
          updateTable={this.updateData} paginacionEvent={this.paginationHandler} />
      </div>
    );
  }
}

export default DataTableExample;
