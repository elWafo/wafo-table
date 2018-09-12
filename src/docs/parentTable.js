import React, { Component } from 'react';
import { Datatable } from "../../lib";
import './parentTable.css';

const initialState = {
  columns: ['Estatus', 'Cuenta', 'Descripcion', 'Tipo de cuenta', 'Compañia', 'Segmento', 'Sucursal', 'Opciones'],
  data: [
    {
      "estado": 1,
      "cuenta": "5001-001-005-083-000-009-007-0000",
      "descripcion": "INSTALACIONES DE PROTOTIPOS",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 2,
      "sucursal": 5,
      "id": 11413,
    },
    {
      "estado": 1,
      "cuenta": "5001-001-005-083-000-009-004-0000",
      "descripcion": "REPARACIONES P/ACOPIO",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 2,
      "sucursal": 5,
      "id": 11416,
    },
    {
      "estado": 1,
      "cuenta": "5001-001-005-083-000-009-003-0000",
      "descripcion": "HERRAMIENTAS",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 2,
      "sucursal": 5,
      "id": 11417,
    },
    {
      "estado": 1,
      "cuenta": "5001-001-005-083-000-009-002-0000",
      "descripcion": "REFACCIONES P/ACOPIO",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 2,
      "sucursal": 5,
      "id": 11418,
    },
    {
      "estado": 1,
      "cuenta": "5001-001-005-083-000-009-001-0000",
      "descripcion": "INSUMOS Y MATERIALES",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 2,
      "sucursal": 5,
      "id": 11419,
    }
  ],
  tableClass: '',
  total: 5,
  activePage: 1,
  size: 10,
  datatableClass: '',
};

class ParentTable extends Component {
  constructor() {
    super();
    this.updateData = this.updateData.bind(this);
    this.paginationHandler = this.paginationHandler.bind(this);

    this.state = initialState;
  }

  /** Example of a method to update data */
  updateData() {
    // get your new data here.
    // update the state to show new data or next page.
    /* this.setState({}); */
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
          total={total} activePage={activePage} size={size} tableProps={{ columns, data }} alfabetico={(dasdas) => { this.state = dadsa;} } />
      </div>
    );
  }
}

export default ParentTable;
