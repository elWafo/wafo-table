import React from 'react';
import { LocalTable } from '../../lib';

const columnsConfig = {
  id: {
    render: function col(val) {
      return <span>#{val}</span>;
    },
    style: {
      backgroundColor: 'red',
      color: 'black',
    },
  },
  ayylmao: function col(val) {
    return <span>{val ? 'Si' : 'No'}</span>;
  },
};

const rowsStyle = { backgroundColor: '#f5f5f5' };

const ExampleLocalTable = () => {
  const [rows, setRows] = React.useState([
    {
      rowData: {
        id: 1,
        name: 'José Luis',
        age: 25,
        birthdate: '02-12-1993',
        birthplace: 'Hermosillo, Son.',
        ayylmao: true,
      },
      rowStyle: {
        backgroundColor: 'blue',
        color: '#fff',
      },
    },
    {
      id: 2,
      name: 'Jose E. Gaytán',
      age: 24,
      birthdate: '29-08-1994',
      birthplace: 'Hermosillo, Son.',
      ayylmao: true,
    },
    {
      id: 3,
      name: 'Saúl Alejandro',
      age: 25,
      birthdate: '17-12-1993',
      birthplace: 'Hermosillo, Son.',
      ayylmao: false,
    },
    {
      id: 4,
      name: 'Mayra Lepro',
      age: 25,
      birthdate: '18-03-1994',
      birthplace: 'Hermosillo, Son.',
      ayylmao: false,
    },
    {
      id: 5,
      name: 'Lalito',
      age: 25,
      birthdate: '21-03-1994',
      birthplace: 'Hermosillo, Son.',
      ayylmao: true,
    },
    {
      id: 6,
      name: 'Leonor',
      age: 24,
      birthdate: '12-06-1994',
      birthplace: 'Hermosillo, Son.',
      ayylmao: false,
    },
    {
      id: 7,
      name: 'Ramón',
      age: 25,
      birthdate: '28-01-1994',
      birthplace: 'Hermosillo, Son.',
      ayylmao: false,
    },
    {
      id: 8,
      name: 'Carlitos',
      age: 25,
      birthdate: '19-04-1992',
      birthplace: 'Hermosillo, Son.',
      ayylmao: false,
    },
    {
      id: 9,
      name: 'Marcela',
      age: 24,
      birthdate: '15-08-1995',
      birthplace: 'Hermosillo, Son.',
      ayylmao: false,
    },
    {
      id: 10,
      name: 'Roberto',
      age: 33,
      birthdate: '10-10-1986',
      birthplace: 'Hermosillo, Son.',
      ayylmao: true,
    },
    {
      id: 11,
      name: 'Mirai',
      age: 25,
      birthdate: '06-06-1994',
      birthplace: 'Hermosillo, Son.',
      ayylmao: true,
    },
    {
      id: 12,
      name: 'Ana',
      age: 26,
      birthdate: '24-08-1992',
      birthplace: 'Hermosillo, Son.',
      ayylmao: true,
    },
  ]);

  const updateRows = ({ size, page, search }) => {
    setRows([
      {
        id: 1,
        name: 'Wafo',
        age: 25,
        birthdate: '02-12-1993',
        birthplace: 'Hermosillo, Son.',
        ayylmao: true,
      },
      {
        id: 2,
        name: 'El Gaytis',
        age: 24,
        birthdate: '29-08-1994',
        birthplace: 'Hermosillo, Son.',
        ayylmao: true,
      },
      {
        id: 3,
        name: 'Saúl Alejandro',
        age: 25,
        birthdate: '17-12-1993',
        birthplace: 'Hermosillo, Son.',
        ayylmao: false,
      },
      {
        id: 4,
        name: 'Mayra Lepro',
        age: 25,
        birthdate: '18-03-1994',
        birthplace: 'Hermosillo, Son.',
        ayylmao: false,
      },
      {
        id: 5,
        name: 'Lalito',
        age: 25,
        birthdate: '21-03-1994',
        birthplace: 'Hermosillo, Son.',
        ayylmao: true,
      },
      {
        id: 6,
        name: 'Leonor',
        age: 24,
        birthdate: '12-06-1994',
        birthplace: 'Hermosillo, Son.',
        ayylmao: false,
      },
      {
        id: 7,
        name: 'Ramón',
        age: 25,
        birthdate: '28-01-1994',
        birthplace: 'Hermosillo, Son.',
        ayylmao: false,
      },
      {
        id: 8,
        name: 'Carlitos',
        age: 25,
        birthdate: '19-04-1992',
        birthplace: 'Hermosillo, Son.',
        ayylmao: false,
      },
      {
        id: 9,
        name: 'Marcela',
        age: 24,
        birthdate: '15-08-1995',
        birthplace: 'Hermosillo, Son.',
        ayylmao: false,
      },
      {
        id: 10,
        name: 'Roberto',
        age: 33,
        birthdate: '10-10-1986',
        birthplace: 'Hermosillo, Son.',
        ayylmao: true,
      },
      {
        id: 11,
        name: 'Mirai',
        age: 25,
        birthdate: '06-06-1994',
        birthplace: 'Hermosillo, Son.',
        ayylmao: true,
      },
      {
        id: 12,
        name: 'Anabanana',
        age: 26,
        birthdate: '24-08-1992',
        birthplace: 'Hermosillo, Son.',
        ayylmao: true,
      },
    ]);
  };

  return (
    <div>
      <LocalTable
        locale={'en'}
        columns={['Id', 'Nombre', 'Edad', 'Fecha de Nacimiento', 'Lugar de nacimiento', 'Ayylmao']}
        rows={rows}
        columnsConfig={columnsConfig}
        rowsStyle={rowsStyle}
        updateTable={updateRows}
        controls={
          <div className="test">
            <button type="button" onClick={updateRows}>
              Change data
            </button>
          </div>
        }
      />
    </div>
  );
};

export default ExampleLocalTable;
