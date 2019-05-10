import React from 'react';
import { LocalTable } from '../../lib';

const columns = ['Id', 'Nombre', 'Edad', 'Fecha de Nacimiento', 'Lugar de nacimiento', 'Ayylmao'];

const configTable = {
  ayylmao: {
    def: (val) => {
      const td = <span>{val ? 'Si' : 'No'}</span>;
      return td;
    },
    style: {
      backgroundColor: '#333',
      color: '#fff',
    },
  },
};

const LocalTableExample = () => {
  const [rows, setRows] = React.useState([
    {
      id: 1,
      name: 'José Luis',
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
      name: 'Ana',
      age: 26,
      birthdate: '24-08-1992',
      birthplace: 'Hermosillo, Son.',
      ayylmao: true,
    },
  ]);

  const updateRows = () => {
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
    <div className="localtable-example">
      <LocalTable
        columns={columns}
        rows={rows}
        locale={'en'}
        configTable={configTable}
        updateTable={updateRows}
        keepPage={false}
      />
    </div>
  );
}

export default LocalTableExample;
