import React, { Component } from 'react';
import { LocalTable } from '../../../../lib';
import './localTable.css';

const initialState = {
  columns: ['Estatus', 'Cuenta', 'Descripcion', 'Tipo de cuenta', 'Compañia', 'Segmento', 'Sucursal', 'Opciones'],
  data: [
    {
      "estado": 5,
      "cuenta": "elit cupidatat laboris",
      "descripcion": "veniam ullamco",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 3,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "velit exercitation ex",
      "descripcion": "sit ex",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 3,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "aliqua ut qui",
      "descripcion": "cupidatat cillum",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 5,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "qui proident ullamco",
      "descripcion": "ut est",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 2,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "nisi cillum et",
      "descripcion": "ut irure",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 2,
      "sucursal": 3,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "nisi cupidatat do",
      "descripcion": "duis excepteur",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 2,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "cupidatat adipisicing ipsum",
      "descripcion": "fugiat non",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 4,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "nulla ea aliquip",
      "descripcion": "esse qui",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 2,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "nisi adipisicing labore",
      "descripcion": "elit ex",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 1,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "commodo nostrud pariatur",
      "descripcion": "cillum sint",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 4,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "exercitation officia nisi",
      "descripcion": "pariatur consequat",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 4,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "sunt eiusmod elit",
      "descripcion": "id ullamco",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 2,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "occaecat excepteur irure",
      "descripcion": "in irure",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 5,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "velit consectetur occaecat",
      "descripcion": "irure qui",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 5,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "laboris reprehenderit excepteur",
      "descripcion": "dolor magna",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 1,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "ullamco reprehenderit labore",
      "descripcion": "qui aliquip",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 1,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "aliquip aliquip irure",
      "descripcion": "consectetur id",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 1,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "ullamco ad veniam",
      "descripcion": "adipisicing anim",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 1,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "non officia cillum",
      "descripcion": "magna consequat",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 2,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "amet quis cillum",
      "descripcion": "aute fugiat",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 2,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "minim culpa laborum",
      "descripcion": "nisi cillum",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 1,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "occaecat commodo deserunt",
      "descripcion": "cupidatat laborum",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 3,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "qui non ipsum",
      "descripcion": "eiusmod nostrud",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 1,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "qui deserunt mollit",
      "descripcion": "in amet",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 4,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "fugiat tempor laborum",
      "descripcion": "labore exercitation",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 1,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "et amet tempor",
      "descripcion": "mollit nisi",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 2,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "cillum cillum sint",
      "descripcion": "et aute",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 3,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "aliqua mollit minim",
      "descripcion": "tempor cillum",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 2,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "exercitation quis aliquip",
      "descripcion": "qui aute",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 3,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "non tempor consectetur",
      "descripcion": "enim aliqua",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 4,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "cillum esse voluptate",
      "descripcion": "cupidatat aute",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 2,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "ea exercitation ex",
      "descripcion": "ex veniam",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 4,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "do ea aute",
      "descripcion": "fugiat laboris",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 5,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "dolore officia veniam",
      "descripcion": "sint adipisicing",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 1,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "amet duis qui",
      "descripcion": "deserunt eu",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 5,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "aliqua mollit enim",
      "descripcion": "voluptate ipsum",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 3,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "sint esse exercitation",
      "descripcion": "laboris quis",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 3,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "fugiat veniam laborum",
      "descripcion": "exercitation adipisicing",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 1,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "do ex sunt",
      "descripcion": "nulla amet",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 4,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "mollit minim dolor",
      "descripcion": "aliqua cillum",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 1,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "ad consectetur ullamco",
      "descripcion": "ut et",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 2,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "dolor laborum eu",
      "descripcion": "commodo duis",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 1,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "dolore dolore voluptate",
      "descripcion": "velit mollit",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 5,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "voluptate excepteur est",
      "descripcion": "aliqua sunt",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 1,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "enim Lorem officia",
      "descripcion": "do cillum",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 2,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "nisi mollit nisi",
      "descripcion": "aliqua sunt",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 3,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "qui deserunt aute",
      "descripcion": "est culpa",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 3,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "occaecat do exercitation",
      "descripcion": "ex ex",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 1,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "deserunt consequat nisi",
      "descripcion": "elit enim",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 5,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "ullamco culpa ipsum",
      "descripcion": "laborum ex",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 2,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "anim quis nulla",
      "descripcion": "sunt aliqua",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 1,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "nulla dolore incididunt",
      "descripcion": "id sit",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 1,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "cillum exercitation qui",
      "descripcion": "sint quis",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 3,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "mollit minim enim",
      "descripcion": "elit esse",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 3,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "consequat labore incididunt",
      "descripcion": "sint sunt",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 3,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "deserunt duis adipisicing",
      "descripcion": "dolor ipsum",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 3,
      "sucursal": 3,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "mollit commodo officia",
      "descripcion": "esse excepteur",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 3,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "officia magna magna",
      "descripcion": "dolore magna",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 2,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "laboris eiusmod Lorem",
      "descripcion": "do ullamco",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 2,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "Lorem irure in",
      "descripcion": "culpa esse",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 3,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "ea elit proident",
      "descripcion": "culpa magna",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 3,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "Lorem sint in",
      "descripcion": "in et",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 5,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "ea Lorem qui",
      "descripcion": "mollit qui",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 4,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "excepteur est ad",
      "descripcion": "deserunt do",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 1,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "ad et fugiat",
      "descripcion": "qui pariatur",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 4,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "officia velit aute",
      "descripcion": "elit fugiat",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 3,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "ullamco occaecat aliqua",
      "descripcion": "qui cillum",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 4,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "laboris ullamco cupidatat",
      "descripcion": "non esse",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 5,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "duis sit in",
      "descripcion": "ut ipsum",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 4,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "quis magna ipsum",
      "descripcion": "dolore sint",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 1,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "commodo aliquip duis",
      "descripcion": "occaecat magna",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 3,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "qui sint minim",
      "descripcion": "enim ipsum",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 4,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "nostrud cillum pariatur",
      "descripcion": "commodo incididunt",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 3,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "sunt mollit veniam",
      "descripcion": "amet consectetur",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 5,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "elit Lorem proident",
      "descripcion": "aliquip magna",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 4,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "irure laborum excepteur",
      "descripcion": "sunt est",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 4,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "et proident proident",
      "descripcion": "eiusmod laboris",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 2,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "est excepteur excepteur",
      "descripcion": "adipisicing velit",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 5,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "culpa cillum fugiat",
      "descripcion": "sint esse",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 1,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "consectetur ullamco fugiat",
      "descripcion": "laboris laboris",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 5,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "commodo ipsum ipsum",
      "descripcion": "ut magna",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 1,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "do non deserunt",
      "descripcion": "ea aliquip",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 1,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "voluptate non nisi",
      "descripcion": "aliqua anim",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 5,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "anim ex enim",
      "descripcion": "incididunt nostrud",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 2,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "Lorem laboris laborum",
      "descripcion": "do ea",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 1,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "qui veniam nisi",
      "descripcion": "excepteur enim",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 2,
      "sucursal": 3,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "amet amet esse",
      "descripcion": "voluptate velit",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 1,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "reprehenderit non adipisicing",
      "descripcion": "incididunt nostrud",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 4,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "cillum culpa in",
      "descripcion": "quis ullamco",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 5,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "magna proident dolore",
      "descripcion": "amet ut",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 1,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "aliqua magna ipsum",
      "descripcion": "veniam aliquip",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 5,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "veniam incididunt irure",
      "descripcion": "duis qui",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 4,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "aute aliqua incididunt",
      "descripcion": "ad eu",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 3,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "officia voluptate duis",
      "descripcion": "aliquip anim",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 3,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "cupidatat consequat id",
      "descripcion": "quis minim",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 5,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "aliquip ut nisi",
      "descripcion": "quis dolore",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 4,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "culpa qui excepteur",
      "descripcion": "quis ea",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 5,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "excepteur irure cillum",
      "descripcion": "cillum sunt",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 2,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "deserunt nisi dolor",
      "descripcion": "dolore non",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 2,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "labore cillum dolor",
      "descripcion": "consequat consectetur",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 5,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "et sunt anim",
      "descripcion": "duis eu",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 5,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "amet eiusmod nulla",
      "descripcion": "ullamco occaecat",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 1,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "dolor enim deserunt",
      "descripcion": "consectetur sunt",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 4,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "eu aliquip magna",
      "descripcion": "non amet",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 2,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "eiusmod consequat cillum",
      "descripcion": "elit amet",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 5,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "duis velit consequat",
      "descripcion": "esse adipisicing",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 4,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "exercitation sint aliquip",
      "descripcion": "in sunt",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 1,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "aliqua eu culpa",
      "descripcion": "dolor eu",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 4,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "dolor ea mollit",
      "descripcion": "nisi minim",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 4,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "aute sint esse",
      "descripcion": "exercitation nisi",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 2,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "sint voluptate excepteur",
      "descripcion": "duis labore",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 4,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "officia ipsum ea",
      "descripcion": "culpa culpa",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 1,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "non et laboris",
      "descripcion": "ullamco qui",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 3,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "veniam nulla laborum",
      "descripcion": "magna nostrud",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 4,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "adipisicing laboris aliquip",
      "descripcion": "anim amet",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 2,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "tempor laborum ex",
      "descripcion": "dolore id",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 1,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "quis aliqua nostrud",
      "descripcion": "deserunt duis",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 2,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "cillum exercitation ullamco",
      "descripcion": "ut exercitation",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 5,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "ipsum et dolor",
      "descripcion": "fugiat do",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 4,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "aliqua aute ad",
      "descripcion": "dolore esse",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 3,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "ad sit anim",
      "descripcion": "exercitation dolore",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 1,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "qui ut qui",
      "descripcion": "exercitation incididunt",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 1,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "anim occaecat laboris",
      "descripcion": "qui cupidatat",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 5,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "deserunt aute ad",
      "descripcion": "laboris voluptate",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 5,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "qui sit ex",
      "descripcion": "exercitation anim",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 1,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "cillum consectetur enim",
      "descripcion": "exercitation aliqua",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 5,
      "sucursal": 3,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "ullamco eiusmod deserunt",
      "descripcion": "velit occaecat",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 4,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "qui officia voluptate",
      "descripcion": "consectetur incididunt",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 1,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "eiusmod enim culpa",
      "descripcion": "eiusmod ullamco",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 2,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "cupidatat amet eiusmod",
      "descripcion": "eiusmod do",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 3,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "incididunt aliquip ex",
      "descripcion": "ut mollit",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 4,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "eiusmod mollit incididunt",
      "descripcion": "esse aliquip",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 5,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "ad quis velit",
      "descripcion": "esse est",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 1,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "excepteur nisi magna",
      "descripcion": "et nisi",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 4,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "dolore tempor voluptate",
      "descripcion": "anim sint",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 5,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "elit duis nulla",
      "descripcion": "culpa dolor",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 4,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "veniam minim consectetur",
      "descripcion": "proident tempor",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 5,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "ullamco aliquip laborum",
      "descripcion": "dolore occaecat",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 1,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "cupidatat ea veniam",
      "descripcion": "irure ad",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 1,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "consectetur veniam ex",
      "descripcion": "quis non",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 2,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "magna nostrud ipsum",
      "descripcion": "ut do",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 5,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "Lorem Lorem do",
      "descripcion": "nulla officia",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 3,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "ad dolor proident",
      "descripcion": "dolore dolore",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 5,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "non ad ad",
      "descripcion": "elit pariatur",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 1,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "veniam aute eu",
      "descripcion": "mollit enim",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 1,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "commodo officia enim",
      "descripcion": "consectetur excepteur",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 2,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "sunt aute ea",
      "descripcion": "magna consectetur",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 5,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "velit in magna",
      "descripcion": "irure id",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 4,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "ipsum commodo sunt",
      "descripcion": "labore tempor",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 5,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "minim Lorem aliqua",
      "descripcion": "nulla dolore",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 2,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "minim aliquip quis",
      "descripcion": "nisi officia",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 5,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "adipisicing irure incididunt",
      "descripcion": "anim esse",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 5,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "sint quis elit",
      "descripcion": "aliqua duis",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 3,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "nulla anim nostrud",
      "descripcion": "proident aute",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 2,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "fugiat ullamco mollit",
      "descripcion": "ipsum irure",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 5,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "reprehenderit officia ad",
      "descripcion": "laboris duis",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 3,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "aliqua enim adipisicing",
      "descripcion": "minim ullamco",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 4,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "consequat consectetur in",
      "descripcion": "officia minim",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 1,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "ad adipisicing nostrud",
      "descripcion": "officia excepteur",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 2,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "magna minim officia",
      "descripcion": "cupidatat commodo",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 2,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "sit non in",
      "descripcion": "laboris anim",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 4,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "pariatur cillum tempor",
      "descripcion": "laboris reprehenderit",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 4,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "ut aliqua dolore",
      "descripcion": "irure incididunt",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 1,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "commodo sit ad",
      "descripcion": "elit Lorem",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 1,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "eiusmod ut proident",
      "descripcion": "proident Lorem",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 4,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "dolore cillum eiusmod",
      "descripcion": "commodo aliquip",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 2,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "officia dolor laboris",
      "descripcion": "dolor culpa",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 2,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "exercitation pariatur ullamco",
      "descripcion": "et excepteur",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 3,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "elit nisi amet",
      "descripcion": "laboris aliqua",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 4,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "minim duis cupidatat",
      "descripcion": "culpa ad",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 1,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "eu eiusmod quis",
      "descripcion": "id pariatur",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 4,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "laboris quis magna",
      "descripcion": "dolor reprehenderit",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 1,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "duis dolor reprehenderit",
      "descripcion": "est labore",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 5,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "voluptate commodo mollit",
      "descripcion": "qui ipsum",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 3,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "culpa aute est",
      "descripcion": "commodo culpa",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 2,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "do aute minim",
      "descripcion": "dolor laboris",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 4,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "culpa ipsum pariatur",
      "descripcion": "id culpa",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 4,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "magna anim est",
      "descripcion": "quis et",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 5,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "aliqua aliquip labore",
      "descripcion": "aliquip reprehenderit",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 4,
      "sucursal": 3,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "quis elit incididunt",
      "descripcion": "est ut",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 5,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "magna proident incididunt",
      "descripcion": "officia tempor",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 5,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "mollit reprehenderit veniam",
      "descripcion": "magna nisi",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 4,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "sunt excepteur officia",
      "descripcion": "duis mollit",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 3,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "fugiat id culpa",
      "descripcion": "ullamco et",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 4,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "anim sunt sint",
      "descripcion": "et culpa",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 5,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "dolor sunt cillum",
      "descripcion": "occaecat eiusmod",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 1,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "sint nostrud anim",
      "descripcion": "incididunt incididunt",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 2,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "fugiat Lorem voluptate",
      "descripcion": "quis in",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 3,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "proident adipisicing elit",
      "descripcion": "ut occaecat",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 3,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "dolor deserunt et",
      "descripcion": "consectetur laborum",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 3,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "amet voluptate magna",
      "descripcion": "nostrud ipsum",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 2,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "aute nostrud laboris",
      "descripcion": "duis anim",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 1,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "exercitation fugiat dolore",
      "descripcion": "id est",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 1,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "mollit ex excepteur",
      "descripcion": "reprehenderit aute",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 1,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "tempor non magna",
      "descripcion": "voluptate sint",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 3,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "anim velit cillum",
      "descripcion": "pariatur officia",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 1,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "officia deserunt fugiat",
      "descripcion": "cillum nisi",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 4,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "nisi incididunt magna",
      "descripcion": "adipisicing nostrud",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 5,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "ea consequat proident",
      "descripcion": "enim elit",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 4,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "sint elit sint",
      "descripcion": "anim ad",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 3,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "ut tempor laboris",
      "descripcion": "aliqua exercitation",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 4,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "in irure eiusmod",
      "descripcion": "cillum occaecat",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 1,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "aliqua aliquip dolore",
      "descripcion": "sit dolor",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 4,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "in duis anim",
      "descripcion": "ex voluptate",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 2,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "incididunt proident esse",
      "descripcion": "nulla eu",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 4,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "nostrud do anim",
      "descripcion": "dolore consectetur",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 5,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "incididunt ad fugiat",
      "descripcion": "labore voluptate",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 3,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "tempor est ut",
      "descripcion": "duis sunt",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 2,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "amet veniam eu",
      "descripcion": "aliquip occaecat",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 4,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "esse elit anim",
      "descripcion": "consectetur aute",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 1,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "est exercitation est",
      "descripcion": "est ipsum",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 2,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "veniam pariatur aliquip",
      "descripcion": "nulla laboris",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 2,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "magna aute commodo",
      "descripcion": "labore proident",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 2,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "irure ullamco pariatur",
      "descripcion": "aute amet",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 5,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "enim dolore irure",
      "descripcion": "quis qui",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 2,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "fugiat velit excepteur",
      "descripcion": "incididunt consequat",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 5,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "laboris deserunt proident",
      "descripcion": "dolore ipsum",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 3,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "exercitation laboris sit",
      "descripcion": "anim dolor",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 2,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "deserunt nisi nulla",
      "descripcion": "fugiat excepteur",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 3,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "sunt commodo non",
      "descripcion": "commodo fugiat",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 4,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "ullamco elit id",
      "descripcion": "in consequat",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 3,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "aliqua eu anim",
      "descripcion": "in incididunt",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 1,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "sint quis commodo",
      "descripcion": "ullamco nulla",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 1,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "culpa anim in",
      "descripcion": "ea aliqua",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 3,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "exercitation Lorem et",
      "descripcion": "nulla minim",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 1,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "laboris quis veniam",
      "descripcion": "sint et",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 3,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "tempor excepteur labore",
      "descripcion": "sint ad",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 3,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "tempor ex est",
      "descripcion": "exercitation consequat",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 2,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "quis id cupidatat",
      "descripcion": "proident excepteur",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 3,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "est duis enim",
      "descripcion": "ex aute",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 5,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "voluptate ut minim",
      "descripcion": "est ex",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 5,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "in cillum ad",
      "descripcion": "nisi amet",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 1,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "aute est qui",
      "descripcion": "velit aliquip",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 3,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "nisi consequat exercitation",
      "descripcion": "reprehenderit ullamco",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 5,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "commodo reprehenderit et",
      "descripcion": "sit dolor",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 2,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "elit aliqua occaecat",
      "descripcion": "reprehenderit adipisicing",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 5,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "esse pariatur commodo",
      "descripcion": "adipisicing occaecat",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 5,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "et enim cillum",
      "descripcion": "incididunt nostrud",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 4,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "cillum exercitation adipisicing",
      "descripcion": "pariatur pariatur",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 4,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "fugiat sint eu",
      "descripcion": "duis nostrud",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 4,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "amet tempor tempor",
      "descripcion": "eu duis",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 5,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "sit quis commodo",
      "descripcion": "do exercitation",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 4,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "nulla sunt sint",
      "descripcion": "enim officia",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 3,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "est dolore velit",
      "descripcion": "veniam in",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 5,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "irure commodo nisi",
      "descripcion": "ipsum culpa",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 4,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "pariatur excepteur irure",
      "descripcion": "duis dolor",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 5,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "fugiat ad occaecat",
      "descripcion": "ipsum eiusmod",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 2,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "in irure occaecat",
      "descripcion": "non sit",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 4,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "cillum incididunt ea",
      "descripcion": "ut tempor",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 1,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "est irure elit",
      "descripcion": "adipisicing laborum",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 2,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "exercitation aliquip elit",
      "descripcion": "anim irure",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 5,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "anim fugiat tempor",
      "descripcion": "enim duis",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 4,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "minim ad nostrud",
      "descripcion": "aute do",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 4,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "enim enim consequat",
      "descripcion": "labore et",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 5,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "eu aliquip ex",
      "descripcion": "id ea",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 3,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "sit dolore ad",
      "descripcion": "sit tempor",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 4,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "non proident officia",
      "descripcion": "enim eu",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 3,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "enim aliquip commodo",
      "descripcion": "laboris nulla",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 1,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "amet nostrud laborum",
      "descripcion": "consequat mollit",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 4,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "eiusmod non laboris",
      "descripcion": "anim deserunt",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 5,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "do dolor aute",
      "descripcion": "eu aute",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 4,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "et officia irure",
      "descripcion": "qui labore",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 3,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "cupidatat veniam deserunt",
      "descripcion": "cillum deserunt",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 3,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "occaecat pariatur officia",
      "descripcion": "quis dolor",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 2,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "dolore duis id",
      "descripcion": "esse et",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 3,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "sint reprehenderit dolore",
      "descripcion": "veniam occaecat",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 5,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "culpa dolor pariatur",
      "descripcion": "adipisicing veniam",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 1,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "exercitation dolore sint",
      "descripcion": "sit consequat",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 4,
      "sucursal": 3,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "tempor et amet",
      "descripcion": "exercitation veniam",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 2,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "ut dolore nisi",
      "descripcion": "do ea",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 1,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "in cupidatat nulla",
      "descripcion": "pariatur tempor",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 2,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "fugiat tempor ex",
      "descripcion": "minim incididunt",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 2,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "ullamco consectetur sunt",
      "descripcion": "enim aliqua",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 4,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "deserunt reprehenderit laboris",
      "descripcion": "aliqua commodo",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 5,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "deserunt non do",
      "descripcion": "exercitation tempor",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 4,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "reprehenderit nostrud sunt",
      "descripcion": "cupidatat officia",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 5,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "culpa aliqua eiusmod",
      "descripcion": "consequat commodo",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 1,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "deserunt officia excepteur",
      "descripcion": "ullamco adipisicing",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 4,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "excepteur ut est",
      "descripcion": "reprehenderit excepteur",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 3,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "fugiat minim consequat",
      "descripcion": "et do",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 1,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "mollit sit et",
      "descripcion": "laboris officia",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 3,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "laboris occaecat commodo",
      "descripcion": "irure pariatur",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 3,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "cillum consequat occaecat",
      "descripcion": "et commodo",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 3,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "officia nisi velit",
      "descripcion": "deserunt enim",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 5,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "commodo anim ipsum",
      "descripcion": "excepteur minim",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 5,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "mollit proident et",
      "descripcion": "minim officia",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 5,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "cillum dolor consequat",
      "descripcion": "id irure",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 3,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "ad proident velit",
      "descripcion": "ex magna",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 1,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "aliquip do occaecat",
      "descripcion": "officia deserunt",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 2,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "eiusmod sint nostrud",
      "descripcion": "commodo consequat",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 4,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "nisi magna aute",
      "descripcion": "magna consectetur",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 4,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "sunt nostrud exercitation",
      "descripcion": "esse sit",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 5,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "in sint dolore",
      "descripcion": "reprehenderit nisi",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 5,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "incididunt mollit ipsum",
      "descripcion": "dolor est",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 1,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "do laborum aute",
      "descripcion": "minim nulla",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 1,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "officia esse enim",
      "descripcion": "ipsum ipsum",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 1,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "labore elit excepteur",
      "descripcion": "adipisicing irure",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 3,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "nisi non sint",
      "descripcion": "deserunt nostrud",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 2,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "labore aute aliquip",
      "descripcion": "ex aute",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 1,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "ea exercitation eiusmod",
      "descripcion": "adipisicing non",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 1,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "id ipsum irure",
      "descripcion": "nostrud ex",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 2,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "cupidatat deserunt consectetur",
      "descripcion": "pariatur veniam",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 2,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "id proident irure",
      "descripcion": "ipsum dolor",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 2,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "fugiat id magna",
      "descripcion": "pariatur mollit",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 2,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "fugiat in tempor",
      "descripcion": "veniam qui",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 4,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "non occaecat laboris",
      "descripcion": "irure qui",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 3,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "excepteur incididunt voluptate",
      "descripcion": "ad veniam",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 3,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "tempor excepteur culpa",
      "descripcion": "ad officia",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 2,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "et duis et",
      "descripcion": "non amet",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 4,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "culpa id enim",
      "descripcion": "ad aliqua",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 5,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "ex officia proident",
      "descripcion": "qui nulla",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 4,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "cillum duis labore",
      "descripcion": "quis do",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 4,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "id commodo quis",
      "descripcion": "est mollit",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 5,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "fugiat ipsum elit",
      "descripcion": "ex culpa",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 5,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "duis aliqua reprehenderit",
      "descripcion": "non dolore",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 4,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "laboris officia laboris",
      "descripcion": "nulla id",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 1,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "minim sunt ut",
      "descripcion": "in sint",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 2,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "fugiat in in",
      "descripcion": "qui irure",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 1,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "ullamco nulla sint",
      "descripcion": "non quis",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 2,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "excepteur commodo magna",
      "descripcion": "id ex",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 2,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "proident incididunt id",
      "descripcion": "officia nostrud",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 5,
      "sucursal": 3,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "occaecat exercitation mollit",
      "descripcion": "nulla labore",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 5,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "aliqua culpa minim",
      "descripcion": "in ullamco",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 4,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "consectetur proident non",
      "descripcion": "adipisicing ullamco",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 1,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "exercitation id deserunt",
      "descripcion": "proident non",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 2,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "commodo labore esse",
      "descripcion": "irure veniam",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 5,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "id dolor adipisicing",
      "descripcion": "laboris fugiat",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 5,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "consequat occaecat elit",
      "descripcion": "sunt est",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 4,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "culpa dolor non",
      "descripcion": "occaecat aute",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 2,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "ipsum ad adipisicing",
      "descripcion": "aute ipsum",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 5,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "fugiat laborum laborum",
      "descripcion": "eu consequat",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 3,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "excepteur deserunt eu",
      "descripcion": "et Lorem",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 5,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "Lorem velit enim",
      "descripcion": "irure in",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 3,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "in aliquip id",
      "descripcion": "irure anim",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 2,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "aute ex velit",
      "descripcion": "incididunt duis",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 4,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "sint reprehenderit excepteur",
      "descripcion": "culpa magna",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 1,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "ullamco pariatur duis",
      "descripcion": "aliqua ea",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 3,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "labore magna nostrud",
      "descripcion": "laborum officia",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 5,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "amet qui elit",
      "descripcion": "ullamco aliquip",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 1,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "eu aliquip in",
      "descripcion": "mollit amet",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 2,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "est sit ea",
      "descripcion": "adipisicing cillum",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 1,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "commodo irure cupidatat",
      "descripcion": "mollit ad",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 5,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "laboris fugiat esse",
      "descripcion": "elit pariatur",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 5,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "do aute reprehenderit",
      "descripcion": "qui in",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 5,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "excepteur amet incididunt",
      "descripcion": "deserunt minim",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 2,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "incididunt do nisi",
      "descripcion": "nostrud mollit",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 3,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "adipisicing cillum nisi",
      "descripcion": "est voluptate",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 5,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "aute magna mollit",
      "descripcion": "incididunt laborum",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 5,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "ipsum officia cupidatat",
      "descripcion": "deserunt exercitation",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 4,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "enim proident non",
      "descripcion": "ut adipisicing",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 1,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "exercitation ex laboris",
      "descripcion": "non adipisicing",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 5,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "tempor esse laborum",
      "descripcion": "pariatur nostrud",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 3,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "minim quis nisi",
      "descripcion": "nulla Lorem",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 1,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "ad enim amet",
      "descripcion": "exercitation laborum",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 1,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "occaecat Lorem mollit",
      "descripcion": "nostrud dolor",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 2,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "adipisicing reprehenderit consequat",
      "descripcion": "nostrud deserunt",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 4,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "elit veniam ipsum",
      "descripcion": "enim anim",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 3,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "deserunt Lorem ex",
      "descripcion": "aliqua ad",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 1,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "eu qui Lorem",
      "descripcion": "occaecat eu",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 2,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "nostrud labore in",
      "descripcion": "nostrud elit",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 1,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "pariatur cupidatat adipisicing",
      "descripcion": "in non",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 2,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "commodo anim tempor",
      "descripcion": "consequat ullamco",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 1,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "eu commodo aute",
      "descripcion": "incididunt cillum",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 5,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "ea mollit occaecat",
      "descripcion": "cupidatat eu",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 3,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "sit laboris ea",
      "descripcion": "consectetur voluptate",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 4,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "occaecat irure in",
      "descripcion": "incididunt labore",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 5,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "sunt ipsum eiusmod",
      "descripcion": "sunt qui",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 4,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "ut in culpa",
      "descripcion": "cupidatat nostrud",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 4,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "quis ad veniam",
      "descripcion": "sit dolore",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 2,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "exercitation cillum Lorem",
      "descripcion": "pariatur do",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 1,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "aute dolore ex",
      "descripcion": "consequat Lorem",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 2,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "aliqua adipisicing elit",
      "descripcion": "ea consectetur",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 5,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "elit minim ad",
      "descripcion": "cillum laboris",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 2,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "velit cillum incididunt",
      "descripcion": "enim culpa",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 3,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "proident officia voluptate",
      "descripcion": "sint labore",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 3,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "elit duis sunt",
      "descripcion": "nulla enim",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 1,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "occaecat nostrud velit",
      "descripcion": "eiusmod voluptate",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 4,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "labore ea sit",
      "descripcion": "excepteur deserunt",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 2,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "reprehenderit id nulla",
      "descripcion": "est et",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 1,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "dolore commodo labore",
      "descripcion": "ut nulla",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 2,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "ex minim irure",
      "descripcion": "culpa eiusmod",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 4,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "sit ex proident",
      "descripcion": "sint do",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 3,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "nulla consequat reprehenderit",
      "descripcion": "nostrud dolor",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 5,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "consequat cillum consequat",
      "descripcion": "ad et",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 2,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "dolor Lorem tempor",
      "descripcion": "do culpa",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 2,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "enim aliquip eiusmod",
      "descripcion": "culpa aliqua",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 5,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "est anim ullamco",
      "descripcion": "excepteur aliqua",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 3,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "ex sunt laborum",
      "descripcion": "aliquip nostrud",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 4,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "anim ea voluptate",
      "descripcion": "in aliquip",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 4,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "cupidatat est ad",
      "descripcion": "adipisicing consequat",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 4,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "cillum reprehenderit laborum",
      "descripcion": "ipsum eu",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 3,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "et fugiat eiusmod",
      "descripcion": "esse culpa",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 1,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "adipisicing reprehenderit commodo",
      "descripcion": "aliquip enim",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 3,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "eu commodo sint",
      "descripcion": "ut cupidatat",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 3,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "sunt laboris non",
      "descripcion": "duis irure",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 5,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "in excepteur in",
      "descripcion": "eu culpa",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 5,
      "sucursal": 3,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "nulla adipisicing ex",
      "descripcion": "do ut",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 3,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "adipisicing duis minim",
      "descripcion": "ullamco pariatur",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 4,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "amet enim eiusmod",
      "descripcion": "dolor exercitation",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 4,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "laboris ullamco tempor",
      "descripcion": "irure Lorem",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 2,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "cillum adipisicing anim",
      "descripcion": "excepteur excepteur",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 3,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "excepteur labore cupidatat",
      "descripcion": "elit exercitation",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 2,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "ex nulla velit",
      "descripcion": "sunt aute",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 1,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "aliqua culpa culpa",
      "descripcion": "quis labore",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 1,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "deserunt incididunt in",
      "descripcion": "amet aliqua",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 2,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "incididunt duis occaecat",
      "descripcion": "Lorem non",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 4,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "qui incididunt eu",
      "descripcion": "elit nulla",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 2,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "est est aliquip",
      "descripcion": "magna duis",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 5,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "qui labore exercitation",
      "descripcion": "exercitation dolor",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 1,
      "sucursal": 3,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "qui pariatur veniam",
      "descripcion": "laborum laborum",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 1,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "dolor fugiat labore",
      "descripcion": "elit id",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 3,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "dolore labore officia",
      "descripcion": "voluptate elit",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 5,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "consequat mollit commodo",
      "descripcion": "deserunt cupidatat",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 5,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "amet laboris officia",
      "descripcion": "fugiat pariatur",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 4,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "occaecat labore duis",
      "descripcion": "deserunt labore",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 4,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "fugiat ad incididunt",
      "descripcion": "cillum tempor",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 2,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "occaecat cupidatat sint",
      "descripcion": "ad cupidatat",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 2,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "sit sit eiusmod",
      "descripcion": "aliquip quis",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 5,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "nisi magna id",
      "descripcion": "eu ut",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 5,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "sit aliquip fugiat",
      "descripcion": "sunt enim",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 2,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "aliqua laborum esse",
      "descripcion": "ipsum ipsum",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 5,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "nostrud commodo id",
      "descripcion": "elit non",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 2,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "Lorem velit ipsum",
      "descripcion": "dolore est",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 4,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "dolore velit ut",
      "descripcion": "et consectetur",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 3,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "excepteur mollit commodo",
      "descripcion": "culpa ut",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 2,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "ullamco excepteur minim",
      "descripcion": "sit cillum",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 1,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "cupidatat velit commodo",
      "descripcion": "mollit cupidatat",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 2,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "incididunt ex aliquip",
      "descripcion": "ullamco culpa",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 3,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "et minim deserunt",
      "descripcion": "amet culpa",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 3,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "ipsum aliqua do",
      "descripcion": "enim incididunt",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 1,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "aliquip est elit",
      "descripcion": "cillum labore",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 4,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "pariatur do occaecat",
      "descripcion": "commodo quis",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 3,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "id id Lorem",
      "descripcion": "ad sint",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 1,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "aute qui laborum",
      "descripcion": "fugiat laborum",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 3,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "ea deserunt deserunt",
      "descripcion": "sint aute",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 3,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "cillum laborum enim",
      "descripcion": "cupidatat voluptate",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 2,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "laborum cillum aliquip",
      "descripcion": "sunt ipsum",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 1,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "elit laborum ex",
      "descripcion": "consequat adipisicing",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 4,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "esse eu nulla",
      "descripcion": "reprehenderit proident",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 5,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "velit duis aliqua",
      "descripcion": "est cupidatat",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 1,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "Lorem sint duis",
      "descripcion": "occaecat dolore",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 3,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "aliqua ad esse",
      "descripcion": "exercitation esse",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 3,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "ullamco pariatur culpa",
      "descripcion": "sunt minim",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 5,
      "sucursal": 3,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "sunt irure commodo",
      "descripcion": "esse duis",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 3,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "consectetur nulla enim",
      "descripcion": "Lorem anim",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 3,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "adipisicing laborum eu",
      "descripcion": "ullamco nostrud",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 5,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "incididunt reprehenderit est",
      "descripcion": "exercitation Lorem",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 4,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "id ullamco consequat",
      "descripcion": "ea reprehenderit",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 1,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "exercitation ad laborum",
      "descripcion": "est in",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 1,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "ea eiusmod qui",
      "descripcion": "occaecat quis",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 5,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "aute ex laborum",
      "descripcion": "ipsum ullamco",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 1,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "eiusmod officia consectetur",
      "descripcion": "laboris esse",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 4,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "nulla nostrud eiusmod",
      "descripcion": "irure anim",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 5,
      "sucursal": 3,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "consectetur ipsum enim",
      "descripcion": "id ut",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 2,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "culpa minim consectetur",
      "descripcion": "irure aliqua",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 5,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "consequat ea ipsum",
      "descripcion": "ut veniam",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 5,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "occaecat culpa et",
      "descripcion": "in magna",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 2,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "eu quis adipisicing",
      "descripcion": "Lorem velit",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 2,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "quis minim nulla",
      "descripcion": "consequat ullamco",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 5,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "nostrud elit ipsum",
      "descripcion": "ex aliquip",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 1,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "excepteur commodo ipsum",
      "descripcion": "consequat excepteur",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 4,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "tempor dolore deserunt",
      "descripcion": "aute anim",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 1,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "sint cupidatat anim",
      "descripcion": "pariatur nisi",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 4,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "elit aliqua quis",
      "descripcion": "reprehenderit consectetur",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 3,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "velit est anim",
      "descripcion": "aliqua mollit",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 1,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "proident duis occaecat",
      "descripcion": "commodo reprehenderit",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 4,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "ipsum veniam nisi",
      "descripcion": "excepteur pariatur",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 2,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "laborum in quis",
      "descripcion": "anim laborum",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 1,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "ex cillum aliquip",
      "descripcion": "fugiat laboris",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 1,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "est ullamco et",
      "descripcion": "labore excepteur",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 2,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "qui velit adipisicing",
      "descripcion": "nisi fugiat",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 5,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "enim enim aliquip",
      "descripcion": "ullamco in",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 4,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "ex aliqua magna",
      "descripcion": "do aute",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 1,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "cillum sit nostrud",
      "descripcion": "dolor aliquip",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 4,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "in aliqua ad",
      "descripcion": "minim exercitation",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 2,
      "sucursal": 3,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "Lorem consectetur tempor",
      "descripcion": "elit commodo",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 4,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "velit officia non",
      "descripcion": "magna adipisicing",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 5,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "laboris officia culpa",
      "descripcion": "aute enim",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 2,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "sit reprehenderit deserunt",
      "descripcion": "do exercitation",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 1,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "ad esse amet",
      "descripcion": "minim aute",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 1,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "consequat fugiat occaecat",
      "descripcion": "laboris esse",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 4,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "Lorem sit ut",
      "descripcion": "sunt minim",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 4,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "occaecat reprehenderit pariatur",
      "descripcion": "aliquip officia",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 3,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "consequat ipsum ea",
      "descripcion": "reprehenderit elit",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 3,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "non mollit esse",
      "descripcion": "magna sint",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 1,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "dolor fugiat dolor",
      "descripcion": "irure exercitation",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 4,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "sit et duis",
      "descripcion": "occaecat cillum",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 5,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "id sit irure",
      "descripcion": "amet enim",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 3,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "qui ut dolor",
      "descripcion": "culpa minim",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 1,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "consectetur id exercitation",
      "descripcion": "consectetur Lorem",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 1,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "reprehenderit incididunt enim",
      "descripcion": "sint Lorem",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 3,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "nulla irure amet",
      "descripcion": "et id",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 4,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "nostrud sit laborum",
      "descripcion": "cupidatat laboris",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 2,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "laborum ea elit",
      "descripcion": "adipisicing pariatur",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 2,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "duis tempor veniam",
      "descripcion": "eu cupidatat",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 1,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "sunt minim velit",
      "descripcion": "amet dolor",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 3,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "tempor officia velit",
      "descripcion": "ipsum aute",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 3,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "cillum non id",
      "descripcion": "duis cillum",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 2,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "cupidatat laboris id",
      "descripcion": "sint est",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 1,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "et id occaecat",
      "descripcion": "duis excepteur",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 2,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "elit elit consectetur",
      "descripcion": "fugiat labore",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 3,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "do magna cupidatat",
      "descripcion": "ea anim",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 3,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "voluptate pariatur ipsum",
      "descripcion": "nostrud consequat",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 5,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "ut cillum ea",
      "descripcion": "labore incididunt",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 3,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "velit fugiat proident",
      "descripcion": "ullamco reprehenderit",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 2,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "amet dolor veniam",
      "descripcion": "reprehenderit nisi",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 1,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "esse amet ad",
      "descripcion": "fugiat commodo",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 4,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "eiusmod cupidatat duis",
      "descripcion": "commodo eu",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 1,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "laborum eiusmod dolor",
      "descripcion": "duis ullamco",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 2,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "irure enim tempor",
      "descripcion": "velit dolor",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 1,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "veniam reprehenderit ipsum",
      "descripcion": "nisi anim",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 2,
      "sucursal": 3,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "ipsum ea ipsum",
      "descripcion": "consequat ipsum",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 4,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "tempor irure non",
      "descripcion": "tempor in",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 1,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "elit officia est",
      "descripcion": "enim veniam",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 3,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "eu consequat nulla",
      "descripcion": "irure et",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 2,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "elit excepteur consectetur",
      "descripcion": "ex id",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 5,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "non veniam quis",
      "descripcion": "sit laborum",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 2,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "quis dolore quis",
      "descripcion": "elit consequat",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 1,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "officia labore proident",
      "descripcion": "ad qui",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 1,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "velit deserunt est",
      "descripcion": "officia laborum",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 2,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "ipsum enim ullamco",
      "descripcion": "duis sit",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 2,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "sit anim cupidatat",
      "descripcion": "proident excepteur",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 3,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "est eu mollit",
      "descripcion": "aliquip adipisicing",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 2,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "et pariatur do",
      "descripcion": "incididunt est",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 5,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "dolore adipisicing mollit",
      "descripcion": "aliqua ipsum",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 1,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "reprehenderit consectetur cillum",
      "descripcion": "aute est",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 2,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "aute ad nostrud",
      "descripcion": "adipisicing irure",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 1,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "qui proident proident",
      "descripcion": "est officia",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 3,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "mollit reprehenderit qui",
      "descripcion": "et voluptate",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 5,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "proident culpa velit",
      "descripcion": "quis nulla",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 2,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "minim adipisicing non",
      "descripcion": "magna non",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 2,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "incididunt velit nisi",
      "descripcion": "nostrud laborum",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 5,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "et sit consectetur",
      "descripcion": "consequat aute",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 4,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "non aute commodo",
      "descripcion": "laborum tempor",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 4,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "enim qui minim",
      "descripcion": "in exercitation",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 3,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "pariatur anim ea",
      "descripcion": "ad veniam",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 5,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "enim velit reprehenderit",
      "descripcion": "ut proident",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 4,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "velit fugiat irure",
      "descripcion": "qui ut",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 3,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "officia nostrud nostrud",
      "descripcion": "magna amet",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 4,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "voluptate commodo exercitation",
      "descripcion": "ullamco labore",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 3,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "in nisi consequat",
      "descripcion": "consectetur aliquip",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 4,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "irure elit incididunt",
      "descripcion": "exercitation culpa",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 1,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "consequat non veniam",
      "descripcion": "cillum sint",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 3,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "exercitation laborum eiusmod",
      "descripcion": "mollit pariatur",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 1,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "tempor officia esse",
      "descripcion": "laborum est",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 1,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "laborum enim ad",
      "descripcion": "nisi sunt",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 2,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "ad pariatur est",
      "descripcion": "amet voluptate",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 1,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "consectetur amet sit",
      "descripcion": "excepteur est",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 2,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "velit in labore",
      "descripcion": "duis enim",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 2,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "exercitation officia qui",
      "descripcion": "proident commodo",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 3,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "exercitation in consequat",
      "descripcion": "nulla ut",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 1,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "aliquip exercitation irure",
      "descripcion": "minim amet",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 5,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "veniam incididunt sint",
      "descripcion": "laboris ut",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 2,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "aute duis est",
      "descripcion": "sint do",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 3,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "velit adipisicing incididunt",
      "descripcion": "labore elit",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 5,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "veniam ad proident",
      "descripcion": "dolor deserunt",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 1,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "exercitation amet dolor",
      "descripcion": "est aliqua",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 2,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "sunt est in",
      "descripcion": "eu culpa",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 2,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "aliquip sit ipsum",
      "descripcion": "tempor in",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 4,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "ex ex in",
      "descripcion": "incididunt voluptate",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 1,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "irure ullamco veniam",
      "descripcion": "mollit sunt",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 1,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "incididunt nisi velit",
      "descripcion": "pariatur ad",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 1,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "aliqua consectetur minim",
      "descripcion": "ad est",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 3,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "ad nulla cillum",
      "descripcion": "cillum voluptate",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 2,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "Lorem do quis",
      "descripcion": "consectetur Lorem",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 1,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "deserunt veniam nisi",
      "descripcion": "qui deserunt",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 2,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "dolor pariatur in",
      "descripcion": "pariatur fugiat",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 4,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "ullamco ipsum labore",
      "descripcion": "proident dolore",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 5,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "esse anim nisi",
      "descripcion": "deserunt fugiat",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 1,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "eiusmod et amet",
      "descripcion": "nisi culpa",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 3,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "anim pariatur occaecat",
      "descripcion": "velit consequat",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 3,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "exercitation fugiat ea",
      "descripcion": "elit adipisicing",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 3,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "labore exercitation cillum",
      "descripcion": "magna fugiat",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 4,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "deserunt voluptate ut",
      "descripcion": "qui anim",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 5,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "voluptate excepteur sunt",
      "descripcion": "cillum cillum",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 1,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "in incididunt ex",
      "descripcion": "tempor occaecat",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 1,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "aliquip elit veniam",
      "descripcion": "adipisicing aute",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 5,
      "sucursal": 3,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "id do commodo",
      "descripcion": "nulla pariatur",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 5,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "adipisicing consectetur anim",
      "descripcion": "ad veniam",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 5,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "labore ipsum proident",
      "descripcion": "deserunt velit",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 2,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "eiusmod ullamco exercitation",
      "descripcion": "officia sunt",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 2,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "minim sint et",
      "descripcion": "ullamco nisi",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 5,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "irure non exercitation",
      "descripcion": "reprehenderit sit",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 2,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "aliqua laborum culpa",
      "descripcion": "exercitation ullamco",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 2,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "aliqua amet reprehenderit",
      "descripcion": "voluptate consequat",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 5,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "duis enim exercitation",
      "descripcion": "sint sit",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 1,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "reprehenderit sunt cupidatat",
      "descripcion": "velit proident",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 3,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "culpa occaecat dolore",
      "descripcion": "mollit cillum",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 1,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "qui ex aliquip",
      "descripcion": "veniam occaecat",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 3,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "sit ex voluptate",
      "descripcion": "sunt in",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 3,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "duis non excepteur",
      "descripcion": "pariatur pariatur",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 3,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "veniam consectetur deserunt",
      "descripcion": "adipisicing reprehenderit",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 4,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "tempor cupidatat excepteur",
      "descripcion": "cupidatat quis",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 3,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "ullamco mollit amet",
      "descripcion": "id laboris",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 5,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "deserunt sint eu",
      "descripcion": "veniam elit",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 3,
      "sucursal": 3,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "fugiat ea fugiat",
      "descripcion": "sint ullamco",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 2,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "esse do qui",
      "descripcion": "ad commodo",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 5,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "duis exercitation sit",
      "descripcion": "id enim",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 3,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "esse deserunt mollit",
      "descripcion": "proident et",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 1,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "anim fugiat ex",
      "descripcion": "incididunt et",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 2,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "est est ea",
      "descripcion": "enim elit",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 2,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "fugiat consequat ut",
      "descripcion": "pariatur culpa",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 2,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "deserunt culpa et",
      "descripcion": "consectetur culpa",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 2,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "commodo laboris dolore",
      "descripcion": "adipisicing aliqua",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 4,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "non adipisicing nostrud",
      "descripcion": "proident magna",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 1,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "laborum sit anim",
      "descripcion": "eiusmod cupidatat",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 3,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "ad culpa do",
      "descripcion": "eiusmod veniam",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 2,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "occaecat ipsum ea",
      "descripcion": "esse sit",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 1,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "in aliqua duis",
      "descripcion": "voluptate nisi",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 2,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "sit ea tempor",
      "descripcion": "labore nisi",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 2,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "non ipsum anim",
      "descripcion": "enim eu",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 4,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "dolor incididunt commodo",
      "descripcion": "aliquip labore",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 3,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "consectetur elit laboris",
      "descripcion": "excepteur id",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 2,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "occaecat eu minim",
      "descripcion": "tempor eiusmod",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 4,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "in enim veniam",
      "descripcion": "commodo cillum",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 3,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "incididunt in amet",
      "descripcion": "culpa esse",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 1,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "ex veniam nisi",
      "descripcion": "officia pariatur",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 5,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "est reprehenderit est",
      "descripcion": "anim aliqua",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 1,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "reprehenderit non officia",
      "descripcion": "consectetur fugiat",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 2,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "cillum Lorem sint",
      "descripcion": "in fugiat",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 1,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "ad Lorem occaecat",
      "descripcion": "esse cillum",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 3,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "enim ut voluptate",
      "descripcion": "officia laborum",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 2,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "in excepteur elit",
      "descripcion": "eiusmod commodo",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 4,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "exercitation quis sunt",
      "descripcion": "ipsum veniam",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 5,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "ea consectetur proident",
      "descripcion": "est ut",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 1,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "commodo nostrud esse",
      "descripcion": "et amet",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 5,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "reprehenderit pariatur laborum",
      "descripcion": "cupidatat cupidatat",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 5,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "irure incididunt ex",
      "descripcion": "anim sit",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 1,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "consectetur occaecat ullamco",
      "descripcion": "id amet",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 4,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "sit dolor amet",
      "descripcion": "elit officia",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 4,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "ea Lorem veniam",
      "descripcion": "elit est",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 1,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "nisi reprehenderit veniam",
      "descripcion": "ut aliquip",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 3,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "anim laboris reprehenderit",
      "descripcion": "do reprehenderit",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 4,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "culpa sint non",
      "descripcion": "excepteur adipisicing",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 5,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "duis aute consequat",
      "descripcion": "ut qui",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 5,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "aute adipisicing nulla",
      "descripcion": "consequat consectetur",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 1,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "aliquip dolor in",
      "descripcion": "occaecat ad",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 2,
      "sucursal": 3,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "duis sit sint",
      "descripcion": "mollit et",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 3,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "et qui qui",
      "descripcion": "sint ea",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 4,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "labore amet veniam",
      "descripcion": "deserunt adipisicing",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 4,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "sit occaecat est",
      "descripcion": "velit ea",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 2,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "eiusmod sit labore",
      "descripcion": "enim occaecat",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 2,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "nulla anim magna",
      "descripcion": "et irure",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 5,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "culpa aliquip laboris",
      "descripcion": "ea duis",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 1,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "do ut irure",
      "descripcion": "occaecat nostrud",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 5,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "deserunt tempor deserunt",
      "descripcion": "incididunt enim",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 5,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "irure officia aliqua",
      "descripcion": "ea et",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 4,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "fugiat eiusmod et",
      "descripcion": "esse est",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 1,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "velit qui quis",
      "descripcion": "duis nostrud",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 5,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "commodo non consectetur",
      "descripcion": "laborum dolore",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 5,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "mollit ex labore",
      "descripcion": "consectetur duis",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 4,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "enim exercitation officia",
      "descripcion": "ad veniam",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 5,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "ut in fugiat",
      "descripcion": "tempor est",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 1,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "voluptate laborum veniam",
      "descripcion": "sit nostrud",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 4,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "magna commodo ea",
      "descripcion": "nulla cillum",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 5,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "laborum exercitation voluptate",
      "descripcion": "dolore duis",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 5,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "aute ullamco elit",
      "descripcion": "veniam elit",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 1,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "qui adipisicing eu",
      "descripcion": "consectetur amet",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 1,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "eu exercitation excepteur",
      "descripcion": "tempor sunt",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 3,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "proident veniam duis",
      "descripcion": "reprehenderit commodo",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 4,
      "sucursal": 3,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "voluptate ut qui",
      "descripcion": "cillum anim",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 5,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "consequat mollit deserunt",
      "descripcion": "irure est",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 4,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "non officia labore",
      "descripcion": "ad adipisicing",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 1,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "proident commodo ullamco",
      "descripcion": "in dolore",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 5,
      "sucursal": 3,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "dolore id sit",
      "descripcion": "fugiat labore",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 4,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "ut excepteur velit",
      "descripcion": "amet labore",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 1,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "et labore adipisicing",
      "descripcion": "occaecat quis",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 3,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "veniam in excepteur",
      "descripcion": "nostrud voluptate",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 1,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "sint aliquip culpa",
      "descripcion": "non dolor",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 3,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "anim est nulla",
      "descripcion": "non aliqua",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 2,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "in nostrud sint",
      "descripcion": "enim consectetur",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 4,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "pariatur ullamco quis",
      "descripcion": "cillum officia",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 2,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "qui non id",
      "descripcion": "dolor cillum",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 3,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "aute tempor dolore",
      "descripcion": "incididunt elit",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 4,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "velit dolore dolor",
      "descripcion": "enim do",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 3,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "aute consectetur in",
      "descripcion": "sint deserunt",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 2,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "ullamco minim labore",
      "descripcion": "aliquip veniam",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 2,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "eiusmod excepteur ipsum",
      "descripcion": "ex aute",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 3,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "veniam minim aliqua",
      "descripcion": "nulla qui",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 1,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "elit nostrud exercitation",
      "descripcion": "cillum tempor",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 2,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "labore elit ut",
      "descripcion": "aliquip laborum",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 2,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "laboris ex labore",
      "descripcion": "aliqua velit",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 1,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "et cillum sint",
      "descripcion": "consequat in",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 1,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "nostrud laborum aute",
      "descripcion": "do proident",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 4,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "qui deserunt non",
      "descripcion": "occaecat magna",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 4,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "minim eu officia",
      "descripcion": "ullamco quis",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 2,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "fugiat labore occaecat",
      "descripcion": "qui aute",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 4,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "sunt in qui",
      "descripcion": "tempor deserunt",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 3,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "laborum in duis",
      "descripcion": "ullamco esse",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 1,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "ad mollit aliqua",
      "descripcion": "reprehenderit adipisicing",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 1,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "minim laboris cillum",
      "descripcion": "excepteur duis",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 3,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "et nostrud cillum",
      "descripcion": "cupidatat adipisicing",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 5,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "exercitation cupidatat in",
      "descripcion": "ut dolore",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 1,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "occaecat velit aute",
      "descripcion": "aliqua do",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 1,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "voluptate exercitation consequat",
      "descripcion": "eiusmod aute",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 4,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "veniam Lorem aliqua",
      "descripcion": "officia aliquip",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 3,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "incididunt minim culpa",
      "descripcion": "aliqua aute",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 5,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "deserunt cupidatat ut",
      "descripcion": "minim culpa",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 4,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "aute duis laborum",
      "descripcion": "sint minim",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 2,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "proident Lorem esse",
      "descripcion": "labore consequat",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 4,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "consectetur minim eiusmod",
      "descripcion": "mollit tempor",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 2,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "aute quis exercitation",
      "descripcion": "id pariatur",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 4,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "dolore sunt dolore",
      "descripcion": "aliqua laboris",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 5,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "deserunt quis amet",
      "descripcion": "labore esse",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 4,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "ea pariatur do",
      "descripcion": "reprehenderit sit",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 4,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "tempor qui duis",
      "descripcion": "nisi nulla",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 1,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "aliquip anim ullamco",
      "descripcion": "est qui",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 5,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "excepteur excepteur eu",
      "descripcion": "mollit nulla",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 2,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "officia aliquip cupidatat",
      "descripcion": "aute fugiat",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 4,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "reprehenderit esse aute",
      "descripcion": "deserunt ipsum",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 2,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "amet sit ut",
      "descripcion": "labore laborum",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 2,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "non sunt do",
      "descripcion": "irure amet",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 2,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "exercitation labore cillum",
      "descripcion": "fugiat elit",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 3,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "amet culpa dolore",
      "descripcion": "est excepteur",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 2,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "cillum ex tempor",
      "descripcion": "cillum consequat",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 5,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "reprehenderit velit exercitation",
      "descripcion": "commodo ipsum",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 2,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "magna non et",
      "descripcion": "qui in",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 1,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "ut eiusmod cillum",
      "descripcion": "commodo id",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 2,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "velit Lorem ea",
      "descripcion": "irure consectetur",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 1,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "irure occaecat in",
      "descripcion": "aliqua nulla",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 2,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "nisi deserunt ipsum",
      "descripcion": "do pariatur",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 5,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "laborum velit laboris",
      "descripcion": "officia dolore",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 5,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "cillum dolore nulla",
      "descripcion": "magna aute",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 5,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "ut ut ipsum",
      "descripcion": "adipisicing labore",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 1,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "in tempor officia",
      "descripcion": "mollit ex",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 5,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "laborum pariatur veniam",
      "descripcion": "magna fugiat",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 1,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "mollit voluptate velit",
      "descripcion": "duis enim",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 1,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "cillum aliquip sint",
      "descripcion": "qui cupidatat",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 3,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "mollit eiusmod ullamco",
      "descripcion": "ullamco commodo",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 1,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "esse commodo non",
      "descripcion": "occaecat dolore",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 5,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "esse aliquip non",
      "descripcion": "velit Lorem",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 3,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "est velit duis",
      "descripcion": "ut aliquip",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 5,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "eu enim excepteur",
      "descripcion": "sunt reprehenderit",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 1,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "ut nulla consequat",
      "descripcion": "incididunt incididunt",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 1,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "qui reprehenderit incididunt",
      "descripcion": "adipisicing ea",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 2,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "deserunt veniam exercitation",
      "descripcion": "aliquip reprehenderit",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 2,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "officia nulla adipisicing",
      "descripcion": "occaecat id",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 4,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "sunt nulla nulla",
      "descripcion": "sint laboris",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 3,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "consectetur sunt eu",
      "descripcion": "mollit incididunt",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 2,
      "sucursal": 3,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "duis nisi amet",
      "descripcion": "aute ullamco",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 2,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "nulla in cupidatat",
      "descripcion": "exercitation reprehenderit",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 2,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "ipsum elit duis",
      "descripcion": "laborum et",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 4,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "eu officia fugiat",
      "descripcion": "velit consequat",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 2,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "labore ipsum nostrud",
      "descripcion": "occaecat ea",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 5,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "deserunt sit incididunt",
      "descripcion": "consequat ad",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 1,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "qui enim fugiat",
      "descripcion": "tempor proident",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 4,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "excepteur in et",
      "descripcion": "aliquip labore",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 2,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "est velit occaecat",
      "descripcion": "ex aliquip",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 3,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "officia aliqua ea",
      "descripcion": "id fugiat",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 2,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "ex cupidatat magna",
      "descripcion": "nisi proident",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 3,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "laborum occaecat dolor",
      "descripcion": "sunt labore",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 5,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "cupidatat ullamco Lorem",
      "descripcion": "veniam do",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 5,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "laborum veniam nisi",
      "descripcion": "tempor non",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 5,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "do tempor Lorem",
      "descripcion": "aliqua mollit",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 5,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "laboris occaecat dolore",
      "descripcion": "dolore enim",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 2,
      "sucursal": 3,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "elit proident elit",
      "descripcion": "proident eiusmod",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 5,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "labore do magna",
      "descripcion": "eiusmod do",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 4,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "qui ut id",
      "descripcion": "nulla qui",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 1,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "cillum eiusmod excepteur",
      "descripcion": "qui reprehenderit",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 2,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "sint veniam dolore",
      "descripcion": "nulla anim",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 5,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "dolor veniam sunt",
      "descripcion": "consectetur quis",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 2,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "sunt dolor ex",
      "descripcion": "enim qui",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 2,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "aliqua cillum minim",
      "descripcion": "nostrud et",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 3,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "cupidatat velit reprehenderit",
      "descripcion": "do culpa",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 5,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "proident nisi commodo",
      "descripcion": "excepteur enim",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 5,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "ut elit eiusmod",
      "descripcion": "ad laborum",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 3,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "culpa aute nisi",
      "descripcion": "nulla consectetur",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 1,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "ipsum cillum consectetur",
      "descripcion": "voluptate ipsum",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 5,
      "sucursal": 3,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "incididunt exercitation et",
      "descripcion": "eiusmod dolor",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 1,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "deserunt magna sunt",
      "descripcion": "mollit dolor",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 1,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "nostrud sint nostrud",
      "descripcion": "laborum elit",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 5,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "nostrud nulla est",
      "descripcion": "fugiat enim",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 3,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "est aute aliquip",
      "descripcion": "dolore do",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 4,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "proident anim aliqua",
      "descripcion": "deserunt eu",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 2,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "ipsum in minim",
      "descripcion": "consequat Lorem",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 3,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "anim deserunt ullamco",
      "descripcion": "voluptate reprehenderit",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 5,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "laborum aute duis",
      "descripcion": "cillum eu",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 4,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "ea pariatur id",
      "descripcion": "proident ad",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 2,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "ex occaecat laborum",
      "descripcion": "consectetur veniam",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 5,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "aute ullamco aliquip",
      "descripcion": "velit non",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 5,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "non id occaecat",
      "descripcion": "ullamco magna",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 5,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "sunt proident amet",
      "descripcion": "aute id",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 2,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "in anim enim",
      "descripcion": "ex adipisicing",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 5,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "incididunt eiusmod anim",
      "descripcion": "consectetur labore",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 3,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "ut ipsum cupidatat",
      "descripcion": "cillum ex",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 2,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "voluptate nisi deserunt",
      "descripcion": "culpa incididunt",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 5,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "laborum sint nisi",
      "descripcion": "mollit qui",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 5,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "voluptate id eu",
      "descripcion": "elit et",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 2,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "ipsum ipsum magna",
      "descripcion": "non enim",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 4,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "anim laborum incididunt",
      "descripcion": "amet aute",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 1,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "ex mollit sit",
      "descripcion": "Lorem excepteur",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 5,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "incididunt aliqua dolore",
      "descripcion": "enim voluptate",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 4,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "exercitation magna occaecat",
      "descripcion": "excepteur in",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 2,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "Lorem ad adipisicing",
      "descripcion": "mollit est",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 4,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "deserunt incididunt excepteur",
      "descripcion": "ut amet",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 5,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "anim adipisicing magna",
      "descripcion": "minim id",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 1,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "aliqua sunt et",
      "descripcion": "mollit ad",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 1,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "sint id irure",
      "descripcion": "laborum sint",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 2,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "cillum quis nostrud",
      "descripcion": "mollit excepteur",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 4,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "magna elit occaecat",
      "descripcion": "mollit culpa",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 3,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "veniam reprehenderit occaecat",
      "descripcion": "irure irure",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 4,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "velit consectetur aliqua",
      "descripcion": "tempor sunt",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 3,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "amet excepteur anim",
      "descripcion": "labore ex",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 3,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "laborum tempor eu",
      "descripcion": "sunt minim",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 2,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "officia enim est",
      "descripcion": "veniam dolor",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 2,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "cillum minim veniam",
      "descripcion": "qui nostrud",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 4,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "veniam et reprehenderit",
      "descripcion": "commodo aute",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 2,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "reprehenderit est ea",
      "descripcion": "labore commodo",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 3,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "eu aute nisi",
      "descripcion": "labore velit",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 2,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "deserunt labore ex",
      "descripcion": "ut consequat",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 1,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "esse adipisicing aliqua",
      "descripcion": "mollit ea",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 2,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "veniam sit fugiat",
      "descripcion": "mollit sunt",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 4,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "ad adipisicing ipsum",
      "descripcion": "aliqua sunt",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 2,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "qui sunt excepteur",
      "descripcion": "Lorem culpa",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 4,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "nisi commodo nulla",
      "descripcion": "culpa esse",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 2,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "deserunt consequat aliquip",
      "descripcion": "labore et",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 1,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "eu occaecat ea",
      "descripcion": "aute nisi",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 1,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "nostrud commodo sint",
      "descripcion": "ipsum irure",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 4,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "esse labore sint",
      "descripcion": "incididunt do",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 2,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "ullamco ipsum incididunt",
      "descripcion": "ex enim",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 1,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "commodo culpa laboris",
      "descripcion": "officia ad",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 2,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "anim proident est",
      "descripcion": "ex fugiat",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 2,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "reprehenderit anim aliqua",
      "descripcion": "cillum tempor",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 5,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "reprehenderit commodo amet",
      "descripcion": "anim sint",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 4,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "irure amet dolor",
      "descripcion": "irure cupidatat",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 3,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "labore excepteur irure",
      "descripcion": "tempor eu",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 2,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "sint irure nulla",
      "descripcion": "minim consequat",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 4,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "culpa quis adipisicing",
      "descripcion": "exercitation laboris",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 3,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "qui aliqua aliqua",
      "descripcion": "laboris consectetur",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 5,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "proident exercitation irure",
      "descripcion": "nostrud labore",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 4,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "voluptate fugiat sunt",
      "descripcion": "duis nulla",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 1,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "proident labore pariatur",
      "descripcion": "consectetur ipsum",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 5,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "pariatur nostrud elit",
      "descripcion": "anim laborum",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 3,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "sint aute ea",
      "descripcion": "consequat nisi",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 3,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "do qui velit",
      "descripcion": "sint proident",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 5,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "velit exercitation veniam",
      "descripcion": "sit cupidatat",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 5,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "quis aute ipsum",
      "descripcion": "et aliqua",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 4,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "nulla ipsum ad",
      "descripcion": "exercitation commodo",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 5,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "excepteur eiusmod aliquip",
      "descripcion": "nisi magna",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 2,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "pariatur amet qui",
      "descripcion": "sit magna",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 4,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "sunt enim culpa",
      "descripcion": "voluptate incididunt",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 3,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "ea duis excepteur",
      "descripcion": "ut aliquip",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 4,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "est velit id",
      "descripcion": "ut tempor",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 4,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "et elit sint",
      "descripcion": "ad minim",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 5,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "id nulla laboris",
      "descripcion": "mollit aliquip",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 1,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "velit laborum minim",
      "descripcion": "sit labore",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 3,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "excepteur proident reprehenderit",
      "descripcion": "aliquip exercitation",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 5,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "culpa consequat aute",
      "descripcion": "ea ullamco",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 2,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "pariatur cupidatat tempor",
      "descripcion": "non laborum",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 2,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "adipisicing incididunt nostrud",
      "descripcion": "non enim",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 1,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "aute esse esse",
      "descripcion": "veniam ut",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 1,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "ex laboris ex",
      "descripcion": "irure proident",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 1,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "quis non fugiat",
      "descripcion": "exercitation laborum",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 2,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "velit sunt eiusmod",
      "descripcion": "pariatur sunt",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 3,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "ea dolore eiusmod",
      "descripcion": "aute fugiat",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 5,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "eiusmod excepteur non",
      "descripcion": "nisi veniam",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 3,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "eu consectetur quis",
      "descripcion": "eu labore",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 5,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "officia proident labore",
      "descripcion": "commodo culpa",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 5,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "velit aliqua incididunt",
      "descripcion": "laboris sint",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 5,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "cupidatat eu exercitation",
      "descripcion": "consequat nulla",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 4,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "veniam reprehenderit deserunt",
      "descripcion": "aute culpa",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 5,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "tempor amet dolor",
      "descripcion": "sint officia",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 1,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "aliquip adipisicing id",
      "descripcion": "ipsum nisi",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 4,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "nulla pariatur consectetur",
      "descripcion": "aliqua amet",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 1,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "et in cillum",
      "descripcion": "et excepteur",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 1,
      "sucursal": 3,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "do ut elit",
      "descripcion": "sunt ex",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 2,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "eiusmod nostrud commodo",
      "descripcion": "magna dolor",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 4,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "anim commodo Lorem",
      "descripcion": "aliquip id",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 4,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "non sunt qui",
      "descripcion": "laborum non",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 3,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "occaecat sit Lorem",
      "descripcion": "officia enim",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 3,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "sit sit id",
      "descripcion": "exercitation exercitation",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 5,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "deserunt mollit ad",
      "descripcion": "excepteur eiusmod",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 2,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "sunt ad proident",
      "descripcion": "ad non",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 1,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "labore voluptate duis",
      "descripcion": "veniam quis",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 5,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "ea ut pariatur",
      "descripcion": "culpa cillum",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 2,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "deserunt elit sunt",
      "descripcion": "nulla et",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 5,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "elit fugiat do",
      "descripcion": "amet magna",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 2,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "eiusmod eiusmod et",
      "descripcion": "minim do",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 3,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "culpa ipsum velit",
      "descripcion": "aliquip Lorem",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 2,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "ea incididunt ea",
      "descripcion": "magna amet",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 5,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "excepteur tempor adipisicing",
      "descripcion": "id non",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 2,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "laboris sit incididunt",
      "descripcion": "dolor eu",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 2,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "occaecat ut esse",
      "descripcion": "deserunt sunt",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 1,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "nostrud officia magna",
      "descripcion": "mollit incididunt",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 2,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "incididunt qui sunt",
      "descripcion": "velit fugiat",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 5,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "ipsum est amet",
      "descripcion": "dolore cillum",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 4,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "qui eu elit",
      "descripcion": "minim elit",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 1,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "ex incididunt ex",
      "descripcion": "culpa consequat",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 2,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "laboris excepteur aliquip",
      "descripcion": "ad magna",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 2,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "reprehenderit amet tempor",
      "descripcion": "cillum exercitation",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 4,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "ex proident nulla",
      "descripcion": "velit et",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 3,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "consequat qui et",
      "descripcion": "adipisicing cupidatat",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 1,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "sunt aute magna",
      "descripcion": "ea sunt",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 4,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "cupidatat commodo nulla",
      "descripcion": "elit amet",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 2,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "consectetur enim nulla",
      "descripcion": "do elit",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 5,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "laboris minim amet",
      "descripcion": "eiusmod quis",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 1,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "ipsum est pariatur",
      "descripcion": "cillum id",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 3,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "ex nulla deserunt",
      "descripcion": "ea minim",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 3,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "qui nostrud magna",
      "descripcion": "ad voluptate",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 2,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "mollit aliqua id",
      "descripcion": "sint qui",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 5,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "et Lorem fugiat",
      "descripcion": "irure esse",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 5,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "id officia adipisicing",
      "descripcion": "ex id",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 2,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "adipisicing reprehenderit sint",
      "descripcion": "non magna",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 2,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "voluptate ex ullamco",
      "descripcion": "pariatur deserunt",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 4,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "tempor non amet",
      "descripcion": "excepteur magna",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 3,
      "sucursal": 3,
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "non in culpa",
      "descripcion": "esse qui",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 2,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "aliqua amet nostrud",
      "descripcion": "officia deserunt",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 4,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "sit eiusmod id",
      "descripcion": "sunt laborum",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 1,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "esse sint est",
      "descripcion": "in consectetur",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 5,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "pariatur ut Lorem",
      "descripcion": "voluptate eiusmod",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 2,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "ipsum enim ipsum",
      "descripcion": "minim sunt",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 5,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "eiusmod consequat laborum",
      "descripcion": "nostrud culpa",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 2,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "ea quis labore",
      "descripcion": "incididunt in",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 5,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "sint sit consequat",
      "descripcion": "aliquip excepteur",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 4,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "esse irure velit",
      "descripcion": "officia proident",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 1,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "veniam mollit irure",
      "descripcion": "ex tempor",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 1,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "officia est enim",
      "descripcion": "sunt irure",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 2,
      "sucursal": 3,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "do non irure",
      "descripcion": "non sunt",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 4,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "aliqua velit id",
      "descripcion": "ullamco cupidatat",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 5,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "sint in velit",
      "descripcion": "nostrud ea",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 3,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "consequat cupidatat mollit",
      "descripcion": "Lorem voluptate",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 3,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "ea eiusmod minim",
      "descripcion": "culpa anim",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 3,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "irure amet cupidatat",
      "descripcion": "proident exercitation",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 2,
      "sucursal": 2,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "quis nulla qui",
      "descripcion": "reprehenderit cillum",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 2,
      "sucursal": 1,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "eu irure voluptate",
      "descripcion": "tempor aliqua",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 4,
      "sucursal": 2,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "non enim commodo",
      "descripcion": "ut voluptate",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 3,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "consectetur voluptate mollit",
      "descripcion": "eu laborum",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 1,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "consectetur fugiat irure",
      "descripcion": "dolore voluptate",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 2,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "aliqua eiusmod minim",
      "descripcion": "veniam amet",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 5,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "voluptate sit mollit",
      "descripcion": "laborum veniam",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 5,
      "sucursal": 1,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "irure est sunt",
      "descripcion": "fugiat consectetur",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 4,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "deserunt ex cupidatat",
      "descripcion": "nisi voluptate",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 2,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "cupidatat adipisicing consequat",
      "descripcion": "incididunt ea",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 3,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "nisi adipisicing irure",
      "descripcion": "eiusmod velit",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 4,
      "sucursal": 4,
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "fugiat reprehenderit deserunt",
      "descripcion": "commodo et",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 3,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "officia adipisicing elit",
      "descripcion": "exercitation consectetur",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 4,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "elit exercitation pariatur",
      "descripcion": "non mollit",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 3,
      "sucursal": 5,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "elit ipsum occaecat",
      "descripcion": "nostrud excepteur",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 1,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "duis sit adipisicing",
      "descripcion": "adipisicing ipsum",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 2,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "Lorem ea duis",
      "descripcion": "irure laborum",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 1,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "sit qui velit",
      "descripcion": "eiusmod officia",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 1,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "dolore dolor quis",
      "descripcion": "consequat cupidatat",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 1,
      "sucursal": 2,
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "deserunt anim mollit",
      "descripcion": "exercitation in",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 1,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "tempor elit non",
      "descripcion": "pariatur dolore",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 2,
      "sucursal": 4,
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "culpa officia laboris",
      "descripcion": "veniam ad",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 5,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "elit do deserunt",
      "descripcion": "cillum id",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 5,
      "sucursal": 2,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "nulla anim consequat",
      "descripcion": "laborum aute",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 4,
      "sucursal": 1,
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "fugiat est adipisicing",
      "descripcion": "ipsum enim",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 5,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "enim incididunt ipsum",
      "descripcion": "adipisicing amet",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 4,
      "sucursal": 3,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "adipisicing minim dolor",
      "descripcion": "in aliqua",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 2,
      "sucursal": 1,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "ea non in",
      "descripcion": "cupidatat exercitation",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 2,
      "sucursal": 4,
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "aute mollit officia",
      "descripcion": "nulla ad",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 5,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "est exercitation eiusmod",
      "descripcion": "officia do",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 1,
      "sucursal": 3,
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "labore in anim",
      "descripcion": "tempor ut",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 4,
      "sucursal": 2,
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "qui incididunt velit",
      "descripcion": "sint est",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 2,
      "sucursal": 4,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "labore ullamco est",
      "descripcion": "pariatur voluptate",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 5,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "ipsum nulla laborum",
      "descripcion": "do commodo",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 2,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "aliqua aute excepteur",
      "descripcion": "veniam do",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 5,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "incididunt in Lorem",
      "descripcion": "est cupidatat",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 2,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "ut officia esse",
      "descripcion": "pariatur est",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 2,
      "sucursal": 1,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "proident fugiat dolor",
      "descripcion": "aute veniam",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 5,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "consectetur commodo magna",
      "descripcion": "officia voluptate",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 5,
      "sucursal": 4,
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "aliquip et reprehenderit",
      "descripcion": "eiusmod commodo",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 1,
      "sucursal": 5,
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "in anim sit",
      "descripcion": "commodo in",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 5,
      "sucursal": 3,
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "mollit proident anim",
      "descripcion": "ipsum proident",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 2,
      "sucursal": 3,
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "ullamco tempor nisi",
      "descripcion": "elit deserunt",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 5,
      "sucursal": 5,
      "id": 3
    },
    {
      "estado": 1,
      "cuenta": "nisi enim mollit",
      "descripcion": "nostrud sint",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 4,
      "sucursal": 5,
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "adipisicing fugiat ex",
      "descripcion": "consequat et",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 1,
      "sucursal": 5,
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "incididunt deserunt irure",
      "descripcion": "aliqua Lorem",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 4,
      "sucursal": 1,
      "id": 3
    }
  ],
  tableClass: '',
};

class LocalTableExample extends Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);

    this.state = initialState;
  }

  updateState() {
    this.setState({
      data: [
        {
          "estado": 5,
          "cuenta": "wafito",
          "descripcion": "wafito",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 3,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "velit exercitation ex",
          "descripcion": "sit ex",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 3,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "aliqua ut qui",
          "descripcion": "cupidatat cillum",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 5,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "qui proident ullamco",
          "descripcion": "ut est",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 2,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "nisi cillum et",
          "descripcion": "ut irure",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 2,
          "sucursal": 3,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "nisi cupidatat do",
          "descripcion": "duis excepteur",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 2,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "cupidatat adipisicing ipsum",
          "descripcion": "fugiat non",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 4,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "nulla ea aliquip",
          "descripcion": "esse qui",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 2,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "nisi adipisicing labore",
          "descripcion": "elit ex",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 1,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "commodo nostrud pariatur",
          "descripcion": "cillum sint",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 4,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "exercitation officia nisi",
          "descripcion": "pariatur consequat",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 4,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "sunt eiusmod elit",
          "descripcion": "id ullamco",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 2,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "occaecat excepteur irure",
          "descripcion": "in irure",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 5,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "velit consectetur occaecat",
          "descripcion": "irure qui",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 5,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "laboris reprehenderit excepteur",
          "descripcion": "dolor magna",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 1,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "ullamco reprehenderit labore",
          "descripcion": "qui aliquip",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 1,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "aliquip aliquip irure",
          "descripcion": "consectetur id",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 1,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "ullamco ad veniam",
          "descripcion": "adipisicing anim",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 1,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "non officia cillum",
          "descripcion": "magna consequat",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 2,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "amet quis cillum",
          "descripcion": "aute fugiat",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 2,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "minim culpa laborum",
          "descripcion": "nisi cillum",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 1,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "occaecat commodo deserunt",
          "descripcion": "cupidatat laborum",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 3,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "qui non ipsum",
          "descripcion": "eiusmod nostrud",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 1,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "qui deserunt mollit",
          "descripcion": "in amet",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 4,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "fugiat tempor laborum",
          "descripcion": "labore exercitation",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 1,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "et amet tempor",
          "descripcion": "mollit nisi",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 2,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "cillum cillum sint",
          "descripcion": "et aute",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 3,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "aliqua mollit minim",
          "descripcion": "tempor cillum",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 2,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "exercitation quis aliquip",
          "descripcion": "qui aute",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 3,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "non tempor consectetur",
          "descripcion": "enim aliqua",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 4,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "cillum esse voluptate",
          "descripcion": "cupidatat aute",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 2,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "ea exercitation ex",
          "descripcion": "ex veniam",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 4,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "do ea aute",
          "descripcion": "fugiat laboris",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 5,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "dolore officia veniam",
          "descripcion": "sint adipisicing",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 1,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "amet duis qui",
          "descripcion": "deserunt eu",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 5,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "aliqua mollit enim",
          "descripcion": "voluptate ipsum",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 3,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "sint esse exercitation",
          "descripcion": "laboris quis",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 3,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "fugiat veniam laborum",
          "descripcion": "exercitation adipisicing",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 1,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "do ex sunt",
          "descripcion": "nulla amet",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 4,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "mollit minim dolor",
          "descripcion": "aliqua cillum",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 1,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "ad consectetur ullamco",
          "descripcion": "ut et",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 2,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "dolor laborum eu",
          "descripcion": "commodo duis",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 1,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "dolore dolore voluptate",
          "descripcion": "velit mollit",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 5,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "voluptate excepteur est",
          "descripcion": "aliqua sunt",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 1,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "enim Lorem officia",
          "descripcion": "do cillum",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 2,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "nisi mollit nisi",
          "descripcion": "aliqua sunt",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 3,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 1,
          "cuenta": "qui deserunt aute",
          "descripcion": "est culpa",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 3,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "occaecat do exercitation",
          "descripcion": "ex ex",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 1,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "deserunt consequat nisi",
          "descripcion": "elit enim",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 5,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "ullamco culpa ipsum",
          "descripcion": "laborum ex",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 2,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "anim quis nulla",
          "descripcion": "sunt aliqua",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 1,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "nulla dolore incididunt",
          "descripcion": "id sit",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 1,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "cillum exercitation qui",
          "descripcion": "sint quis",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 3,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "mollit minim enim",
          "descripcion": "elit esse",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 3,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "consequat labore incididunt",
          "descripcion": "sint sunt",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 3,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "deserunt duis adipisicing",
          "descripcion": "dolor ipsum",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 3,
          "sucursal": 3,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "mollit commodo officia",
          "descripcion": "esse excepteur",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 3,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "officia magna magna",
          "descripcion": "dolore magna",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 2,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "laboris eiusmod Lorem",
          "descripcion": "do ullamco",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 2,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "Lorem irure in",
          "descripcion": "culpa esse",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 3,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "ea elit proident",
          "descripcion": "culpa magna",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 3,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "Lorem sint in",
          "descripcion": "in et",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 5,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "ea Lorem qui",
          "descripcion": "mollit qui",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 4,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "excepteur est ad",
          "descripcion": "deserunt do",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 1,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "ad et fugiat",
          "descripcion": "qui pariatur",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 4,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "officia velit aute",
          "descripcion": "elit fugiat",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 3,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "ullamco occaecat aliqua",
          "descripcion": "qui cillum",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 4,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "laboris ullamco cupidatat",
          "descripcion": "non esse",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 5,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "duis sit in",
          "descripcion": "ut ipsum",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 4,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "quis magna ipsum",
          "descripcion": "dolore sint",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 1,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "commodo aliquip duis",
          "descripcion": "occaecat magna",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 3,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "qui sint minim",
          "descripcion": "enim ipsum",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 4,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "nostrud cillum pariatur",
          "descripcion": "commodo incididunt",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 3,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "sunt mollit veniam",
          "descripcion": "amet consectetur",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 5,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "elit Lorem proident",
          "descripcion": "aliquip magna",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 4,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "irure laborum excepteur",
          "descripcion": "sunt est",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 4,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "et proident proident",
          "descripcion": "eiusmod laboris",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 2,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "est excepteur excepteur",
          "descripcion": "adipisicing velit",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 5,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "culpa cillum fugiat",
          "descripcion": "sint esse",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 1,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "consectetur ullamco fugiat",
          "descripcion": "laboris laboris",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 5,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "commodo ipsum ipsum",
          "descripcion": "ut magna",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 1,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "do non deserunt",
          "descripcion": "ea aliquip",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 1,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 1,
          "cuenta": "voluptate non nisi",
          "descripcion": "aliqua anim",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 5,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "anim ex enim",
          "descripcion": "incididunt nostrud",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 2,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "Lorem laboris laborum",
          "descripcion": "do ea",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 1,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "qui veniam nisi",
          "descripcion": "excepteur enim",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 2,
          "sucursal": 3,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "amet amet esse",
          "descripcion": "voluptate velit",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 1,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "reprehenderit non adipisicing",
          "descripcion": "incididunt nostrud",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 4,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "cillum culpa in",
          "descripcion": "quis ullamco",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 5,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "magna proident dolore",
          "descripcion": "amet ut",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 1,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "aliqua magna ipsum",
          "descripcion": "veniam aliquip",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 5,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 1,
          "cuenta": "veniam incididunt irure",
          "descripcion": "duis qui",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 4,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "aute aliqua incididunt",
          "descripcion": "ad eu",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 3,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "officia voluptate duis",
          "descripcion": "aliquip anim",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 3,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "cupidatat consequat id",
          "descripcion": "quis minim",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 5,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "aliquip ut nisi",
          "descripcion": "quis dolore",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 4,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "culpa qui excepteur",
          "descripcion": "quis ea",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 5,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "excepteur irure cillum",
          "descripcion": "cillum sunt",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 2,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "deserunt nisi dolor",
          "descripcion": "dolore non",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 2,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "labore cillum dolor",
          "descripcion": "consequat consectetur",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 5,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "et sunt anim",
          "descripcion": "duis eu",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 5,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "amet eiusmod nulla",
          "descripcion": "ullamco occaecat",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 1,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "dolor enim deserunt",
          "descripcion": "consectetur sunt",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 4,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "eu aliquip magna",
          "descripcion": "non amet",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 2,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "eiusmod consequat cillum",
          "descripcion": "elit amet",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 5,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "duis velit consequat",
          "descripcion": "esse adipisicing",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 4,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "exercitation sint aliquip",
          "descripcion": "in sunt",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 1,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "aliqua eu culpa",
          "descripcion": "dolor eu",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 4,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "dolor ea mollit",
          "descripcion": "nisi minim",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 4,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "aute sint esse",
          "descripcion": "exercitation nisi",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 2,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "sint voluptate excepteur",
          "descripcion": "duis labore",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 4,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "officia ipsum ea",
          "descripcion": "culpa culpa",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 1,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "non et laboris",
          "descripcion": "ullamco qui",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 3,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "veniam nulla laborum",
          "descripcion": "magna nostrud",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 4,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "adipisicing laboris aliquip",
          "descripcion": "anim amet",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 2,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "tempor laborum ex",
          "descripcion": "dolore id",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 1,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "quis aliqua nostrud",
          "descripcion": "deserunt duis",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 2,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "cillum exercitation ullamco",
          "descripcion": "ut exercitation",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 5,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "ipsum et dolor",
          "descripcion": "fugiat do",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 4,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "aliqua aute ad",
          "descripcion": "dolore esse",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 3,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "ad sit anim",
          "descripcion": "exercitation dolore",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 1,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "qui ut qui",
          "descripcion": "exercitation incididunt",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 1,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "anim occaecat laboris",
          "descripcion": "qui cupidatat",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 5,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "deserunt aute ad",
          "descripcion": "laboris voluptate",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 5,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "qui sit ex",
          "descripcion": "exercitation anim",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 1,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "cillum consectetur enim",
          "descripcion": "exercitation aliqua",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 5,
          "sucursal": 3,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "ullamco eiusmod deserunt",
          "descripcion": "velit occaecat",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 4,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "qui officia voluptate",
          "descripcion": "consectetur incididunt",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 1,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "eiusmod enim culpa",
          "descripcion": "eiusmod ullamco",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 2,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "cupidatat amet eiusmod",
          "descripcion": "eiusmod do",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 3,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "incididunt aliquip ex",
          "descripcion": "ut mollit",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 4,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "eiusmod mollit incididunt",
          "descripcion": "esse aliquip",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 5,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "ad quis velit",
          "descripcion": "esse est",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 1,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "excepteur nisi magna",
          "descripcion": "et nisi",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 4,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "dolore tempor voluptate",
          "descripcion": "anim sint",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 5,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "elit duis nulla",
          "descripcion": "culpa dolor",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 4,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "veniam minim consectetur",
          "descripcion": "proident tempor",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 5,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "ullamco aliquip laborum",
          "descripcion": "dolore occaecat",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 1,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "cupidatat ea veniam",
          "descripcion": "irure ad",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 1,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "consectetur veniam ex",
          "descripcion": "quis non",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 2,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "magna nostrud ipsum",
          "descripcion": "ut do",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 5,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "Lorem Lorem do",
          "descripcion": "nulla officia",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 3,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "ad dolor proident",
          "descripcion": "dolore dolore",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 5,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "non ad ad",
          "descripcion": "elit pariatur",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 1,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "veniam aute eu",
          "descripcion": "mollit enim",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 1,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "commodo officia enim",
          "descripcion": "consectetur excepteur",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 2,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "sunt aute ea",
          "descripcion": "magna consectetur",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 5,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "velit in magna",
          "descripcion": "irure id",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 4,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "ipsum commodo sunt",
          "descripcion": "labore tempor",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 5,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "minim Lorem aliqua",
          "descripcion": "nulla dolore",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 2,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "minim aliquip quis",
          "descripcion": "nisi officia",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 5,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "adipisicing irure incididunt",
          "descripcion": "anim esse",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 5,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "sint quis elit",
          "descripcion": "aliqua duis",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 3,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "nulla anim nostrud",
          "descripcion": "proident aute",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 2,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 1,
          "cuenta": "fugiat ullamco mollit",
          "descripcion": "ipsum irure",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 5,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "reprehenderit officia ad",
          "descripcion": "laboris duis",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 3,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "aliqua enim adipisicing",
          "descripcion": "minim ullamco",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 4,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "consequat consectetur in",
          "descripcion": "officia minim",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 1,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "ad adipisicing nostrud",
          "descripcion": "officia excepteur",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 2,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "magna minim officia",
          "descripcion": "cupidatat commodo",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 2,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "sit non in",
          "descripcion": "laboris anim",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 4,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "pariatur cillum tempor",
          "descripcion": "laboris reprehenderit",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 4,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "ut aliqua dolore",
          "descripcion": "irure incididunt",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 1,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "commodo sit ad",
          "descripcion": "elit Lorem",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 1,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "eiusmod ut proident",
          "descripcion": "proident Lorem",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 4,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "dolore cillum eiusmod",
          "descripcion": "commodo aliquip",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 2,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "officia dolor laboris",
          "descripcion": "dolor culpa",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 2,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "exercitation pariatur ullamco",
          "descripcion": "et excepteur",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 3,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "elit nisi amet",
          "descripcion": "laboris aliqua",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 4,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "minim duis cupidatat",
          "descripcion": "culpa ad",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 1,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "eu eiusmod quis",
          "descripcion": "id pariatur",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 4,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "laboris quis magna",
          "descripcion": "dolor reprehenderit",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 1,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "duis dolor reprehenderit",
          "descripcion": "est labore",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 5,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 1,
          "cuenta": "voluptate commodo mollit",
          "descripcion": "qui ipsum",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 3,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "culpa aute est",
          "descripcion": "commodo culpa",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 2,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "do aute minim",
          "descripcion": "dolor laboris",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 4,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "culpa ipsum pariatur",
          "descripcion": "id culpa",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 4,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "magna anim est",
          "descripcion": "quis et",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 5,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "aliqua aliquip labore",
          "descripcion": "aliquip reprehenderit",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 4,
          "sucursal": 3,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "quis elit incididunt",
          "descripcion": "est ut",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 5,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "magna proident incididunt",
          "descripcion": "officia tempor",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 5,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "mollit reprehenderit veniam",
          "descripcion": "magna nisi",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 4,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "sunt excepteur officia",
          "descripcion": "duis mollit",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 3,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "fugiat id culpa",
          "descripcion": "ullamco et",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 4,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "anim sunt sint",
          "descripcion": "et culpa",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 5,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "dolor sunt cillum",
          "descripcion": "occaecat eiusmod",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 1,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "sint nostrud anim",
          "descripcion": "incididunt incididunt",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 2,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "fugiat Lorem voluptate",
          "descripcion": "quis in",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 3,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "proident adipisicing elit",
          "descripcion": "ut occaecat",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 3,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "dolor deserunt et",
          "descripcion": "consectetur laborum",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 3,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "amet voluptate magna",
          "descripcion": "nostrud ipsum",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 2,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "aute nostrud laboris",
          "descripcion": "duis anim",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 1,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "exercitation fugiat dolore",
          "descripcion": "id est",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 1,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "mollit ex excepteur",
          "descripcion": "reprehenderit aute",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 1,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "tempor non magna",
          "descripcion": "voluptate sint",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 3,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "anim velit cillum",
          "descripcion": "pariatur officia",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 1,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "officia deserunt fugiat",
          "descripcion": "cillum nisi",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 4,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "nisi incididunt magna",
          "descripcion": "adipisicing nostrud",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 5,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "ea consequat proident",
          "descripcion": "enim elit",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 4,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "sint elit sint",
          "descripcion": "anim ad",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 3,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "ut tempor laboris",
          "descripcion": "aliqua exercitation",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 4,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "in irure eiusmod",
          "descripcion": "cillum occaecat",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 1,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "aliqua aliquip dolore",
          "descripcion": "sit dolor",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 4,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "in duis anim",
          "descripcion": "ex voluptate",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 2,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "incididunt proident esse",
          "descripcion": "nulla eu",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 4,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "nostrud do anim",
          "descripcion": "dolore consectetur",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 5,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "incididunt ad fugiat",
          "descripcion": "labore voluptate",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 3,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "tempor est ut",
          "descripcion": "duis sunt",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 2,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "amet veniam eu",
          "descripcion": "aliquip occaecat",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 4,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "esse elit anim",
          "descripcion": "consectetur aute",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 1,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "est exercitation est",
          "descripcion": "est ipsum",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 2,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "veniam pariatur aliquip",
          "descripcion": "nulla laboris",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 2,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "magna aute commodo",
          "descripcion": "labore proident",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 2,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "irure ullamco pariatur",
          "descripcion": "aute amet",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 5,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "enim dolore irure",
          "descripcion": "quis qui",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 2,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "fugiat velit excepteur",
          "descripcion": "incididunt consequat",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 5,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "laboris deserunt proident",
          "descripcion": "dolore ipsum",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 3,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "exercitation laboris sit",
          "descripcion": "anim dolor",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 2,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "deserunt nisi nulla",
          "descripcion": "fugiat excepteur",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 3,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "sunt commodo non",
          "descripcion": "commodo fugiat",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 4,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "ullamco elit id",
          "descripcion": "in consequat",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 3,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "aliqua eu anim",
          "descripcion": "in incididunt",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 1,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "sint quis commodo",
          "descripcion": "ullamco nulla",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 1,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 1,
          "cuenta": "culpa anim in",
          "descripcion": "ea aliqua",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 3,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "exercitation Lorem et",
          "descripcion": "nulla minim",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 1,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "laboris quis veniam",
          "descripcion": "sint et",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 3,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "tempor excepteur labore",
          "descripcion": "sint ad",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 3,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "tempor ex est",
          "descripcion": "exercitation consequat",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 2,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "quis id cupidatat",
          "descripcion": "proident excepteur",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 3,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "est duis enim",
          "descripcion": "ex aute",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 5,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "voluptate ut minim",
          "descripcion": "est ex",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 5,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "in cillum ad",
          "descripcion": "nisi amet",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 1,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "aute est qui",
          "descripcion": "velit aliquip",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 3,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "nisi consequat exercitation",
          "descripcion": "reprehenderit ullamco",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 5,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "commodo reprehenderit et",
          "descripcion": "sit dolor",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 2,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "elit aliqua occaecat",
          "descripcion": "reprehenderit adipisicing",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 5,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "esse pariatur commodo",
          "descripcion": "adipisicing occaecat",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 5,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "et enim cillum",
          "descripcion": "incididunt nostrud",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 4,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "cillum exercitation adipisicing",
          "descripcion": "pariatur pariatur",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 4,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "fugiat sint eu",
          "descripcion": "duis nostrud",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 4,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "amet tempor tempor",
          "descripcion": "eu duis",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 5,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "sit quis commodo",
          "descripcion": "do exercitation",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 4,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "nulla sunt sint",
          "descripcion": "enim officia",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 3,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "est dolore velit",
          "descripcion": "veniam in",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 5,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "irure commodo nisi",
          "descripcion": "ipsum culpa",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 4,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "pariatur excepteur irure",
          "descripcion": "duis dolor",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 5,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "fugiat ad occaecat",
          "descripcion": "ipsum eiusmod",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 2,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "in irure occaecat",
          "descripcion": "non sit",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 4,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "cillum incididunt ea",
          "descripcion": "ut tempor",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 1,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "est irure elit",
          "descripcion": "adipisicing laborum",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 2,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "exercitation aliquip elit",
          "descripcion": "anim irure",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 5,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "anim fugiat tempor",
          "descripcion": "enim duis",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 4,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "minim ad nostrud",
          "descripcion": "aute do",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 4,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "enim enim consequat",
          "descripcion": "labore et",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 5,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "eu aliquip ex",
          "descripcion": "id ea",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 3,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "sit dolore ad",
          "descripcion": "sit tempor",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 4,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "non proident officia",
          "descripcion": "enim eu",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 3,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "enim aliquip commodo",
          "descripcion": "laboris nulla",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 1,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "amet nostrud laborum",
          "descripcion": "consequat mollit",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 4,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "eiusmod non laboris",
          "descripcion": "anim deserunt",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 5,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "do dolor aute",
          "descripcion": "eu aute",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 4,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "et officia irure",
          "descripcion": "qui labore",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 3,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "cupidatat veniam deserunt",
          "descripcion": "cillum deserunt",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 3,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "occaecat pariatur officia",
          "descripcion": "quis dolor",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 2,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "dolore duis id",
          "descripcion": "esse et",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 3,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "sint reprehenderit dolore",
          "descripcion": "veniam occaecat",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 5,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 1,
          "cuenta": "culpa dolor pariatur",
          "descripcion": "adipisicing veniam",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 1,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "exercitation dolore sint",
          "descripcion": "sit consequat",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 4,
          "sucursal": 3,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "tempor et amet",
          "descripcion": "exercitation veniam",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 2,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "ut dolore nisi",
          "descripcion": "do ea",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 1,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "in cupidatat nulla",
          "descripcion": "pariatur tempor",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 2,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "fugiat tempor ex",
          "descripcion": "minim incididunt",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 2,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "ullamco consectetur sunt",
          "descripcion": "enim aliqua",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 4,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "deserunt reprehenderit laboris",
          "descripcion": "aliqua commodo",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 5,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "deserunt non do",
          "descripcion": "exercitation tempor",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 4,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "reprehenderit nostrud sunt",
          "descripcion": "cupidatat officia",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 5,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "culpa aliqua eiusmod",
          "descripcion": "consequat commodo",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 1,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "deserunt officia excepteur",
          "descripcion": "ullamco adipisicing",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 4,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "excepteur ut est",
          "descripcion": "reprehenderit excepteur",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 3,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "fugiat minim consequat",
          "descripcion": "et do",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 1,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "mollit sit et",
          "descripcion": "laboris officia",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 3,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "laboris occaecat commodo",
          "descripcion": "irure pariatur",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 3,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "cillum consequat occaecat",
          "descripcion": "et commodo",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 3,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "officia nisi velit",
          "descripcion": "deserunt enim",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 5,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "commodo anim ipsum",
          "descripcion": "excepteur minim",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 5,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "mollit proident et",
          "descripcion": "minim officia",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 5,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "cillum dolor consequat",
          "descripcion": "id irure",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 3,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "ad proident velit",
          "descripcion": "ex magna",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 1,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "aliquip do occaecat",
          "descripcion": "officia deserunt",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 2,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "eiusmod sint nostrud",
          "descripcion": "commodo consequat",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 4,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "nisi magna aute",
          "descripcion": "magna consectetur",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 4,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "sunt nostrud exercitation",
          "descripcion": "esse sit",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 5,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "in sint dolore",
          "descripcion": "reprehenderit nisi",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 5,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "incididunt mollit ipsum",
          "descripcion": "dolor est",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 1,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "do laborum aute",
          "descripcion": "minim nulla",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 1,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "officia esse enim",
          "descripcion": "ipsum ipsum",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 1,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "labore elit excepteur",
          "descripcion": "adipisicing irure",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 3,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "nisi non sint",
          "descripcion": "deserunt nostrud",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 2,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "labore aute aliquip",
          "descripcion": "ex aute",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 1,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "ea exercitation eiusmod",
          "descripcion": "adipisicing non",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 1,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "id ipsum irure",
          "descripcion": "nostrud ex",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 2,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "cupidatat deserunt consectetur",
          "descripcion": "pariatur veniam",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 2,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "id proident irure",
          "descripcion": "ipsum dolor",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 2,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "fugiat id magna",
          "descripcion": "pariatur mollit",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 2,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "fugiat in tempor",
          "descripcion": "veniam qui",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 4,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "non occaecat laboris",
          "descripcion": "irure qui",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 3,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "excepteur incididunt voluptate",
          "descripcion": "ad veniam",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 3,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "tempor excepteur culpa",
          "descripcion": "ad officia",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 2,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "et duis et",
          "descripcion": "non amet",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 4,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "culpa id enim",
          "descripcion": "ad aliqua",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 5,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "ex officia proident",
          "descripcion": "qui nulla",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 4,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "cillum duis labore",
          "descripcion": "quis do",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 4,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "id commodo quis",
          "descripcion": "est mollit",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 5,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "fugiat ipsum elit",
          "descripcion": "ex culpa",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 5,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "duis aliqua reprehenderit",
          "descripcion": "non dolore",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 4,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "laboris officia laboris",
          "descripcion": "nulla id",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 1,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "minim sunt ut",
          "descripcion": "in sint",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 2,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "fugiat in in",
          "descripcion": "qui irure",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 1,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "ullamco nulla sint",
          "descripcion": "non quis",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 2,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "excepteur commodo magna",
          "descripcion": "id ex",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 2,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 1,
          "cuenta": "proident incididunt id",
          "descripcion": "officia nostrud",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 5,
          "sucursal": 3,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "occaecat exercitation mollit",
          "descripcion": "nulla labore",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 5,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "aliqua culpa minim",
          "descripcion": "in ullamco",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 4,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 1,
          "cuenta": "consectetur proident non",
          "descripcion": "adipisicing ullamco",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 1,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "exercitation id deserunt",
          "descripcion": "proident non",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 2,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "commodo labore esse",
          "descripcion": "irure veniam",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 5,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "id dolor adipisicing",
          "descripcion": "laboris fugiat",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 5,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "consequat occaecat elit",
          "descripcion": "sunt est",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 4,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "culpa dolor non",
          "descripcion": "occaecat aute",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 2,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "ipsum ad adipisicing",
          "descripcion": "aute ipsum",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 5,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "fugiat laborum laborum",
          "descripcion": "eu consequat",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 3,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "excepteur deserunt eu",
          "descripcion": "et Lorem",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 5,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "Lorem velit enim",
          "descripcion": "irure in",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 3,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "in aliquip id",
          "descripcion": "irure anim",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 2,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "aute ex velit",
          "descripcion": "incididunt duis",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 4,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "sint reprehenderit excepteur",
          "descripcion": "culpa magna",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 1,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "ullamco pariatur duis",
          "descripcion": "aliqua ea",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 3,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "labore magna nostrud",
          "descripcion": "laborum officia",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 5,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "amet qui elit",
          "descripcion": "ullamco aliquip",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 1,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "eu aliquip in",
          "descripcion": "mollit amet",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 2,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 1,
          "cuenta": "est sit ea",
          "descripcion": "adipisicing cillum",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 1,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "commodo irure cupidatat",
          "descripcion": "mollit ad",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 5,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "laboris fugiat esse",
          "descripcion": "elit pariatur",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 5,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "do aute reprehenderit",
          "descripcion": "qui in",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 5,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "excepteur amet incididunt",
          "descripcion": "deserunt minim",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 2,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "incididunt do nisi",
          "descripcion": "nostrud mollit",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 3,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "adipisicing cillum nisi",
          "descripcion": "est voluptate",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 5,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "aute magna mollit",
          "descripcion": "incididunt laborum",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 5,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "ipsum officia cupidatat",
          "descripcion": "deserunt exercitation",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 4,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "enim proident non",
          "descripcion": "ut adipisicing",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 1,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "exercitation ex laboris",
          "descripcion": "non adipisicing",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 5,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "tempor esse laborum",
          "descripcion": "pariatur nostrud",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 3,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "minim quis nisi",
          "descripcion": "nulla Lorem",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 1,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "ad enim amet",
          "descripcion": "exercitation laborum",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 1,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "occaecat Lorem mollit",
          "descripcion": "nostrud dolor",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 2,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "adipisicing reprehenderit consequat",
          "descripcion": "nostrud deserunt",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 4,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "elit veniam ipsum",
          "descripcion": "enim anim",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 3,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "deserunt Lorem ex",
          "descripcion": "aliqua ad",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 1,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "eu qui Lorem",
          "descripcion": "occaecat eu",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 2,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "nostrud labore in",
          "descripcion": "nostrud elit",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 1,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "pariatur cupidatat adipisicing",
          "descripcion": "in non",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 2,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "commodo anim tempor",
          "descripcion": "consequat ullamco",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 1,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "eu commodo aute",
          "descripcion": "incididunt cillum",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 5,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "ea mollit occaecat",
          "descripcion": "cupidatat eu",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 3,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "sit laboris ea",
          "descripcion": "consectetur voluptate",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 4,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "occaecat irure in",
          "descripcion": "incididunt labore",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 5,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "sunt ipsum eiusmod",
          "descripcion": "sunt qui",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 4,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "ut in culpa",
          "descripcion": "cupidatat nostrud",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 4,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "quis ad veniam",
          "descripcion": "sit dolore",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 2,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "exercitation cillum Lorem",
          "descripcion": "pariatur do",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 1,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "aute dolore ex",
          "descripcion": "consequat Lorem",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 2,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "aliqua adipisicing elit",
          "descripcion": "ea consectetur",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 5,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "elit minim ad",
          "descripcion": "cillum laboris",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 2,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "velit cillum incididunt",
          "descripcion": "enim culpa",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 3,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "proident officia voluptate",
          "descripcion": "sint labore",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 3,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "elit duis sunt",
          "descripcion": "nulla enim",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 1,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "occaecat nostrud velit",
          "descripcion": "eiusmod voluptate",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 4,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "labore ea sit",
          "descripcion": "excepteur deserunt",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 2,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "reprehenderit id nulla",
          "descripcion": "est et",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 1,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "dolore commodo labore",
          "descripcion": "ut nulla",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 2,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "ex minim irure",
          "descripcion": "culpa eiusmod",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 4,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "sit ex proident",
          "descripcion": "sint do",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 3,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "nulla consequat reprehenderit",
          "descripcion": "nostrud dolor",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 5,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "consequat cillum consequat",
          "descripcion": "ad et",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 2,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "dolor Lorem tempor",
          "descripcion": "do culpa",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 2,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "enim aliquip eiusmod",
          "descripcion": "culpa aliqua",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 5,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "est anim ullamco",
          "descripcion": "excepteur aliqua",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 3,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "ex sunt laborum",
          "descripcion": "aliquip nostrud",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 4,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "anim ea voluptate",
          "descripcion": "in aliquip",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 4,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "cupidatat est ad",
          "descripcion": "adipisicing consequat",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 4,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "cillum reprehenderit laborum",
          "descripcion": "ipsum eu",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 3,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "et fugiat eiusmod",
          "descripcion": "esse culpa",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 1,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "adipisicing reprehenderit commodo",
          "descripcion": "aliquip enim",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 3,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "eu commodo sint",
          "descripcion": "ut cupidatat",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 3,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "sunt laboris non",
          "descripcion": "duis irure",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 5,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "in excepteur in",
          "descripcion": "eu culpa",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 5,
          "sucursal": 3,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "nulla adipisicing ex",
          "descripcion": "do ut",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 3,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "adipisicing duis minim",
          "descripcion": "ullamco pariatur",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 4,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "amet enim eiusmod",
          "descripcion": "dolor exercitation",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 4,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 1,
          "cuenta": "laboris ullamco tempor",
          "descripcion": "irure Lorem",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 2,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "cillum adipisicing anim",
          "descripcion": "excepteur excepteur",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 3,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "excepteur labore cupidatat",
          "descripcion": "elit exercitation",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 2,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "ex nulla velit",
          "descripcion": "sunt aute",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 1,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "aliqua culpa culpa",
          "descripcion": "quis labore",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 1,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "deserunt incididunt in",
          "descripcion": "amet aliqua",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 2,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "incididunt duis occaecat",
          "descripcion": "Lorem non",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 4,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 1,
          "cuenta": "qui incididunt eu",
          "descripcion": "elit nulla",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 2,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "est est aliquip",
          "descripcion": "magna duis",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 5,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "qui labore exercitation",
          "descripcion": "exercitation dolor",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 1,
          "sucursal": 3,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "qui pariatur veniam",
          "descripcion": "laborum laborum",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 1,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "dolor fugiat labore",
          "descripcion": "elit id",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 3,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "dolore labore officia",
          "descripcion": "voluptate elit",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 5,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "consequat mollit commodo",
          "descripcion": "deserunt cupidatat",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 5,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "amet laboris officia",
          "descripcion": "fugiat pariatur",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 4,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "occaecat labore duis",
          "descripcion": "deserunt labore",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 4,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "fugiat ad incididunt",
          "descripcion": "cillum tempor",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 2,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "occaecat cupidatat sint",
          "descripcion": "ad cupidatat",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 2,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "sit sit eiusmod",
          "descripcion": "aliquip quis",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 5,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "nisi magna id",
          "descripcion": "eu ut",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 5,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "sit aliquip fugiat",
          "descripcion": "sunt enim",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 2,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "aliqua laborum esse",
          "descripcion": "ipsum ipsum",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 5,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "nostrud commodo id",
          "descripcion": "elit non",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 2,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "Lorem velit ipsum",
          "descripcion": "dolore est",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 4,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "dolore velit ut",
          "descripcion": "et consectetur",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 3,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "excepteur mollit commodo",
          "descripcion": "culpa ut",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 2,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "ullamco excepteur minim",
          "descripcion": "sit cillum",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 1,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "cupidatat velit commodo",
          "descripcion": "mollit cupidatat",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 2,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "incididunt ex aliquip",
          "descripcion": "ullamco culpa",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 3,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "et minim deserunt",
          "descripcion": "amet culpa",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 3,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "ipsum aliqua do",
          "descripcion": "enim incididunt",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 1,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "aliquip est elit",
          "descripcion": "cillum labore",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 4,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "pariatur do occaecat",
          "descripcion": "commodo quis",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 3,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "id id Lorem",
          "descripcion": "ad sint",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 1,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "aute qui laborum",
          "descripcion": "fugiat laborum",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 3,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "ea deserunt deserunt",
          "descripcion": "sint aute",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 3,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "cillum laborum enim",
          "descripcion": "cupidatat voluptate",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 2,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "laborum cillum aliquip",
          "descripcion": "sunt ipsum",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 1,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "elit laborum ex",
          "descripcion": "consequat adipisicing",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 4,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "esse eu nulla",
          "descripcion": "reprehenderit proident",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 5,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "velit duis aliqua",
          "descripcion": "est cupidatat",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 1,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "Lorem sint duis",
          "descripcion": "occaecat dolore",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 3,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "aliqua ad esse",
          "descripcion": "exercitation esse",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 3,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "ullamco pariatur culpa",
          "descripcion": "sunt minim",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 5,
          "sucursal": 3,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "sunt irure commodo",
          "descripcion": "esse duis",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 3,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "consectetur nulla enim",
          "descripcion": "Lorem anim",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 3,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "adipisicing laborum eu",
          "descripcion": "ullamco nostrud",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 5,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "incididunt reprehenderit est",
          "descripcion": "exercitation Lorem",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 4,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "id ullamco consequat",
          "descripcion": "ea reprehenderit",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 1,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "exercitation ad laborum",
          "descripcion": "est in",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 1,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 1,
          "cuenta": "ea eiusmod qui",
          "descripcion": "occaecat quis",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 5,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "aute ex laborum",
          "descripcion": "ipsum ullamco",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 1,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "eiusmod officia consectetur",
          "descripcion": "laboris esse",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 4,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "nulla nostrud eiusmod",
          "descripcion": "irure anim",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 5,
          "sucursal": 3,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "consectetur ipsum enim",
          "descripcion": "id ut",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 2,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "culpa minim consectetur",
          "descripcion": "irure aliqua",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 5,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "consequat ea ipsum",
          "descripcion": "ut veniam",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 5,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "occaecat culpa et",
          "descripcion": "in magna",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 2,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "eu quis adipisicing",
          "descripcion": "Lorem velit",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 2,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 1,
          "cuenta": "quis minim nulla",
          "descripcion": "consequat ullamco",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 5,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "nostrud elit ipsum",
          "descripcion": "ex aliquip",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 1,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "excepteur commodo ipsum",
          "descripcion": "consequat excepteur",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 4,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "tempor dolore deserunt",
          "descripcion": "aute anim",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 1,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "sint cupidatat anim",
          "descripcion": "pariatur nisi",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 4,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "elit aliqua quis",
          "descripcion": "reprehenderit consectetur",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 3,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "velit est anim",
          "descripcion": "aliqua mollit",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 1,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "proident duis occaecat",
          "descripcion": "commodo reprehenderit",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 4,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "ipsum veniam nisi",
          "descripcion": "excepteur pariatur",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 2,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "laborum in quis",
          "descripcion": "anim laborum",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 1,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "ex cillum aliquip",
          "descripcion": "fugiat laboris",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 1,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "est ullamco et",
          "descripcion": "labore excepteur",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 2,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "qui velit adipisicing",
          "descripcion": "nisi fugiat",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 5,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "enim enim aliquip",
          "descripcion": "ullamco in",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 4,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "ex aliqua magna",
          "descripcion": "do aute",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 1,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "cillum sit nostrud",
          "descripcion": "dolor aliquip",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 4,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "in aliqua ad",
          "descripcion": "minim exercitation",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 2,
          "sucursal": 3,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "Lorem consectetur tempor",
          "descripcion": "elit commodo",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 4,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "velit officia non",
          "descripcion": "magna adipisicing",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 5,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "laboris officia culpa",
          "descripcion": "aute enim",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 2,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "sit reprehenderit deserunt",
          "descripcion": "do exercitation",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 1,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "ad esse amet",
          "descripcion": "minim aute",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 1,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "consequat fugiat occaecat",
          "descripcion": "laboris esse",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 4,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "Lorem sit ut",
          "descripcion": "sunt minim",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 4,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "occaecat reprehenderit pariatur",
          "descripcion": "aliquip officia",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 3,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "consequat ipsum ea",
          "descripcion": "reprehenderit elit",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 3,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "non mollit esse",
          "descripcion": "magna sint",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 1,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "dolor fugiat dolor",
          "descripcion": "irure exercitation",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 4,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "sit et duis",
          "descripcion": "occaecat cillum",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 5,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "id sit irure",
          "descripcion": "amet enim",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 3,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "qui ut dolor",
          "descripcion": "culpa minim",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 1,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "consectetur id exercitation",
          "descripcion": "consectetur Lorem",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 1,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "reprehenderit incididunt enim",
          "descripcion": "sint Lorem",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 3,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "nulla irure amet",
          "descripcion": "et id",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 4,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "nostrud sit laborum",
          "descripcion": "cupidatat laboris",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 2,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "laborum ea elit",
          "descripcion": "adipisicing pariatur",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 2,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "duis tempor veniam",
          "descripcion": "eu cupidatat",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 1,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "sunt minim velit",
          "descripcion": "amet dolor",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 3,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "tempor officia velit",
          "descripcion": "ipsum aute",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 3,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "cillum non id",
          "descripcion": "duis cillum",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 2,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "cupidatat laboris id",
          "descripcion": "sint est",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 1,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "et id occaecat",
          "descripcion": "duis excepteur",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 2,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "elit elit consectetur",
          "descripcion": "fugiat labore",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 3,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 1,
          "cuenta": "do magna cupidatat",
          "descripcion": "ea anim",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 3,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "voluptate pariatur ipsum",
          "descripcion": "nostrud consequat",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 5,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "ut cillum ea",
          "descripcion": "labore incididunt",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 3,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "velit fugiat proident",
          "descripcion": "ullamco reprehenderit",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 2,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "amet dolor veniam",
          "descripcion": "reprehenderit nisi",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 1,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "esse amet ad",
          "descripcion": "fugiat commodo",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 4,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "eiusmod cupidatat duis",
          "descripcion": "commodo eu",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 1,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "laborum eiusmod dolor",
          "descripcion": "duis ullamco",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 2,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "irure enim tempor",
          "descripcion": "velit dolor",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 1,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "veniam reprehenderit ipsum",
          "descripcion": "nisi anim",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 2,
          "sucursal": 3,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "ipsum ea ipsum",
          "descripcion": "consequat ipsum",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 4,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "tempor irure non",
          "descripcion": "tempor in",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 1,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "elit officia est",
          "descripcion": "enim veniam",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 3,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "eu consequat nulla",
          "descripcion": "irure et",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 2,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "elit excepteur consectetur",
          "descripcion": "ex id",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 5,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "non veniam quis",
          "descripcion": "sit laborum",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 2,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "quis dolore quis",
          "descripcion": "elit consequat",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 1,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "officia labore proident",
          "descripcion": "ad qui",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 1,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "velit deserunt est",
          "descripcion": "officia laborum",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 2,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "ipsum enim ullamco",
          "descripcion": "duis sit",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 2,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "sit anim cupidatat",
          "descripcion": "proident excepteur",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 3,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "est eu mollit",
          "descripcion": "aliquip adipisicing",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 2,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "et pariatur do",
          "descripcion": "incididunt est",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 5,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "dolore adipisicing mollit",
          "descripcion": "aliqua ipsum",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 1,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "reprehenderit consectetur cillum",
          "descripcion": "aute est",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 2,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "aute ad nostrud",
          "descripcion": "adipisicing irure",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 1,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "qui proident proident",
          "descripcion": "est officia",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 3,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "mollit reprehenderit qui",
          "descripcion": "et voluptate",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 5,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "proident culpa velit",
          "descripcion": "quis nulla",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 2,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "minim adipisicing non",
          "descripcion": "magna non",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 2,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "incididunt velit nisi",
          "descripcion": "nostrud laborum",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 5,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 1,
          "cuenta": "et sit consectetur",
          "descripcion": "consequat aute",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 4,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "non aute commodo",
          "descripcion": "laborum tempor",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 4,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "enim qui minim",
          "descripcion": "in exercitation",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 3,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "pariatur anim ea",
          "descripcion": "ad veniam",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 5,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "enim velit reprehenderit",
          "descripcion": "ut proident",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 4,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "velit fugiat irure",
          "descripcion": "qui ut",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 3,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "officia nostrud nostrud",
          "descripcion": "magna amet",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 4,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "voluptate commodo exercitation",
          "descripcion": "ullamco labore",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 3,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "in nisi consequat",
          "descripcion": "consectetur aliquip",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 4,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "irure elit incididunt",
          "descripcion": "exercitation culpa",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 1,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "consequat non veniam",
          "descripcion": "cillum sint",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 3,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "exercitation laborum eiusmod",
          "descripcion": "mollit pariatur",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 1,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "tempor officia esse",
          "descripcion": "laborum est",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 1,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "laborum enim ad",
          "descripcion": "nisi sunt",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 2,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "ad pariatur est",
          "descripcion": "amet voluptate",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 1,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "consectetur amet sit",
          "descripcion": "excepteur est",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 2,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "velit in labore",
          "descripcion": "duis enim",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 2,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "exercitation officia qui",
          "descripcion": "proident commodo",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 3,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "exercitation in consequat",
          "descripcion": "nulla ut",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 1,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "aliquip exercitation irure",
          "descripcion": "minim amet",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 5,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "veniam incididunt sint",
          "descripcion": "laboris ut",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 2,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "aute duis est",
          "descripcion": "sint do",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 3,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "velit adipisicing incididunt",
          "descripcion": "labore elit",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 5,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "veniam ad proident",
          "descripcion": "dolor deserunt",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 1,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "exercitation amet dolor",
          "descripcion": "est aliqua",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 2,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "sunt est in",
          "descripcion": "eu culpa",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 2,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "aliquip sit ipsum",
          "descripcion": "tempor in",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 4,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "ex ex in",
          "descripcion": "incididunt voluptate",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 1,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "irure ullamco veniam",
          "descripcion": "mollit sunt",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 1,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "incididunt nisi velit",
          "descripcion": "pariatur ad",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 1,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "aliqua consectetur minim",
          "descripcion": "ad est",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 3,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "ad nulla cillum",
          "descripcion": "cillum voluptate",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 2,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "Lorem do quis",
          "descripcion": "consectetur Lorem",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 1,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "deserunt veniam nisi",
          "descripcion": "qui deserunt",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 2,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "dolor pariatur in",
          "descripcion": "pariatur fugiat",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 4,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "ullamco ipsum labore",
          "descripcion": "proident dolore",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 5,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "esse anim nisi",
          "descripcion": "deserunt fugiat",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 1,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "eiusmod et amet",
          "descripcion": "nisi culpa",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 3,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "anim pariatur occaecat",
          "descripcion": "velit consequat",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 3,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "exercitation fugiat ea",
          "descripcion": "elit adipisicing",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 3,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "labore exercitation cillum",
          "descripcion": "magna fugiat",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 4,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "deserunt voluptate ut",
          "descripcion": "qui anim",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 5,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "voluptate excepteur sunt",
          "descripcion": "cillum cillum",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 1,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "in incididunt ex",
          "descripcion": "tempor occaecat",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 1,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "aliquip elit veniam",
          "descripcion": "adipisicing aute",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 5,
          "sucursal": 3,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "id do commodo",
          "descripcion": "nulla pariatur",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 5,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "adipisicing consectetur anim",
          "descripcion": "ad veniam",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 5,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "labore ipsum proident",
          "descripcion": "deserunt velit",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 2,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "eiusmod ullamco exercitation",
          "descripcion": "officia sunt",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 2,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "minim sint et",
          "descripcion": "ullamco nisi",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 5,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "irure non exercitation",
          "descripcion": "reprehenderit sit",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 2,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "aliqua laborum culpa",
          "descripcion": "exercitation ullamco",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 2,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "aliqua amet reprehenderit",
          "descripcion": "voluptate consequat",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 5,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "duis enim exercitation",
          "descripcion": "sint sit",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 1,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "reprehenderit sunt cupidatat",
          "descripcion": "velit proident",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 3,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "culpa occaecat dolore",
          "descripcion": "mollit cillum",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 1,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "qui ex aliquip",
          "descripcion": "veniam occaecat",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 3,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "sit ex voluptate",
          "descripcion": "sunt in",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 3,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "duis non excepteur",
          "descripcion": "pariatur pariatur",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 3,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "veniam consectetur deserunt",
          "descripcion": "adipisicing reprehenderit",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 4,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "tempor cupidatat excepteur",
          "descripcion": "cupidatat quis",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 3,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "ullamco mollit amet",
          "descripcion": "id laboris",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 5,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "deserunt sint eu",
          "descripcion": "veniam elit",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 3,
          "sucursal": 3,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "fugiat ea fugiat",
          "descripcion": "sint ullamco",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 2,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "esse do qui",
          "descripcion": "ad commodo",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 5,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "duis exercitation sit",
          "descripcion": "id enim",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 3,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "esse deserunt mollit",
          "descripcion": "proident et",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 1,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "anim fugiat ex",
          "descripcion": "incididunt et",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 2,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "est est ea",
          "descripcion": "enim elit",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 2,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "fugiat consequat ut",
          "descripcion": "pariatur culpa",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 2,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "deserunt culpa et",
          "descripcion": "consectetur culpa",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 2,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "commodo laboris dolore",
          "descripcion": "adipisicing aliqua",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 4,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "non adipisicing nostrud",
          "descripcion": "proident magna",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 1,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "laborum sit anim",
          "descripcion": "eiusmod cupidatat",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 3,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "ad culpa do",
          "descripcion": "eiusmod veniam",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 2,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "occaecat ipsum ea",
          "descripcion": "esse sit",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 1,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "in aliqua duis",
          "descripcion": "voluptate nisi",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 2,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "sit ea tempor",
          "descripcion": "labore nisi",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 2,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "non ipsum anim",
          "descripcion": "enim eu",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 4,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "dolor incididunt commodo",
          "descripcion": "aliquip labore",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 3,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "consectetur elit laboris",
          "descripcion": "excepteur id",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 2,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "occaecat eu minim",
          "descripcion": "tempor eiusmod",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 4,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "in enim veniam",
          "descripcion": "commodo cillum",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 3,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "incididunt in amet",
          "descripcion": "culpa esse",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 1,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "ex veniam nisi",
          "descripcion": "officia pariatur",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 5,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "est reprehenderit est",
          "descripcion": "anim aliqua",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 1,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "reprehenderit non officia",
          "descripcion": "consectetur fugiat",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 2,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "cillum Lorem sint",
          "descripcion": "in fugiat",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 1,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "ad Lorem occaecat",
          "descripcion": "esse cillum",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 3,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "enim ut voluptate",
          "descripcion": "officia laborum",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 2,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "in excepteur elit",
          "descripcion": "eiusmod commodo",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 4,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "exercitation quis sunt",
          "descripcion": "ipsum veniam",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 5,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "ea consectetur proident",
          "descripcion": "est ut",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 1,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "commodo nostrud esse",
          "descripcion": "et amet",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 5,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "reprehenderit pariatur laborum",
          "descripcion": "cupidatat cupidatat",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 5,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "irure incididunt ex",
          "descripcion": "anim sit",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 1,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "consectetur occaecat ullamco",
          "descripcion": "id amet",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 4,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "sit dolor amet",
          "descripcion": "elit officia",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 4,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "ea Lorem veniam",
          "descripcion": "elit est",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 1,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "nisi reprehenderit veniam",
          "descripcion": "ut aliquip",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 3,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "anim laboris reprehenderit",
          "descripcion": "do reprehenderit",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 4,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "culpa sint non",
          "descripcion": "excepteur adipisicing",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 5,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "duis aute consequat",
          "descripcion": "ut qui",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 5,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "aute adipisicing nulla",
          "descripcion": "consequat consectetur",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 1,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "aliquip dolor in",
          "descripcion": "occaecat ad",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 2,
          "sucursal": 3,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "duis sit sint",
          "descripcion": "mollit et",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 3,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "et qui qui",
          "descripcion": "sint ea",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 4,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "labore amet veniam",
          "descripcion": "deserunt adipisicing",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 4,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "sit occaecat est",
          "descripcion": "velit ea",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 2,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "eiusmod sit labore",
          "descripcion": "enim occaecat",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 2,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "nulla anim magna",
          "descripcion": "et irure",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 5,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "culpa aliquip laboris",
          "descripcion": "ea duis",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 1,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "do ut irure",
          "descripcion": "occaecat nostrud",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 5,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "deserunt tempor deserunt",
          "descripcion": "incididunt enim",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 5,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "irure officia aliqua",
          "descripcion": "ea et",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 4,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "fugiat eiusmod et",
          "descripcion": "esse est",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 1,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "velit qui quis",
          "descripcion": "duis nostrud",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 5,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "commodo non consectetur",
          "descripcion": "laborum dolore",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 5,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "mollit ex labore",
          "descripcion": "consectetur duis",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 4,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "enim exercitation officia",
          "descripcion": "ad veniam",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 5,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "ut in fugiat",
          "descripcion": "tempor est",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 1,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "voluptate laborum veniam",
          "descripcion": "sit nostrud",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 4,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "magna commodo ea",
          "descripcion": "nulla cillum",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 5,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "laborum exercitation voluptate",
          "descripcion": "dolore duis",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 5,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "aute ullamco elit",
          "descripcion": "veniam elit",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 1,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "qui adipisicing eu",
          "descripcion": "consectetur amet",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 1,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "eu exercitation excepteur",
          "descripcion": "tempor sunt",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 3,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "proident veniam duis",
          "descripcion": "reprehenderit commodo",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 4,
          "sucursal": 3,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "voluptate ut qui",
          "descripcion": "cillum anim",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 5,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "consequat mollit deserunt",
          "descripcion": "irure est",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 4,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "non officia labore",
          "descripcion": "ad adipisicing",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 1,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "proident commodo ullamco",
          "descripcion": "in dolore",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 5,
          "sucursal": 3,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "dolore id sit",
          "descripcion": "fugiat labore",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 4,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "ut excepteur velit",
          "descripcion": "amet labore",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 1,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "et labore adipisicing",
          "descripcion": "occaecat quis",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 3,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "veniam in excepteur",
          "descripcion": "nostrud voluptate",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 1,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "sint aliquip culpa",
          "descripcion": "non dolor",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 3,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "anim est nulla",
          "descripcion": "non aliqua",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 2,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "in nostrud sint",
          "descripcion": "enim consectetur",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 4,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "pariatur ullamco quis",
          "descripcion": "cillum officia",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 2,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "qui non id",
          "descripcion": "dolor cillum",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 3,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "aute tempor dolore",
          "descripcion": "incididunt elit",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 4,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "velit dolore dolor",
          "descripcion": "enim do",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 3,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "aute consectetur in",
          "descripcion": "sint deserunt",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 2,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "ullamco minim labore",
          "descripcion": "aliquip veniam",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 2,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "eiusmod excepteur ipsum",
          "descripcion": "ex aute",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 3,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 1,
          "cuenta": "veniam minim aliqua",
          "descripcion": "nulla qui",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 1,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "elit nostrud exercitation",
          "descripcion": "cillum tempor",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 2,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "labore elit ut",
          "descripcion": "aliquip laborum",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 2,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "laboris ex labore",
          "descripcion": "aliqua velit",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 1,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "et cillum sint",
          "descripcion": "consequat in",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 1,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "nostrud laborum aute",
          "descripcion": "do proident",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 4,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "qui deserunt non",
          "descripcion": "occaecat magna",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 4,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "minim eu officia",
          "descripcion": "ullamco quis",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 2,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "fugiat labore occaecat",
          "descripcion": "qui aute",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 4,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "sunt in qui",
          "descripcion": "tempor deserunt",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 3,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "laborum in duis",
          "descripcion": "ullamco esse",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 1,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 1,
          "cuenta": "ad mollit aliqua",
          "descripcion": "reprehenderit adipisicing",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 1,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "minim laboris cillum",
          "descripcion": "excepteur duis",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 3,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "et nostrud cillum",
          "descripcion": "cupidatat adipisicing",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 5,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "exercitation cupidatat in",
          "descripcion": "ut dolore",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 1,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "occaecat velit aute",
          "descripcion": "aliqua do",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 1,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "voluptate exercitation consequat",
          "descripcion": "eiusmod aute",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 4,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "veniam Lorem aliqua",
          "descripcion": "officia aliquip",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 3,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "incididunt minim culpa",
          "descripcion": "aliqua aute",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 5,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "deserunt cupidatat ut",
          "descripcion": "minim culpa",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 4,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "aute duis laborum",
          "descripcion": "sint minim",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 2,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "proident Lorem esse",
          "descripcion": "labore consequat",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 4,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "consectetur minim eiusmod",
          "descripcion": "mollit tempor",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 2,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "aute quis exercitation",
          "descripcion": "id pariatur",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 4,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "dolore sunt dolore",
          "descripcion": "aliqua laboris",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 5,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "deserunt quis amet",
          "descripcion": "labore esse",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 4,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "ea pariatur do",
          "descripcion": "reprehenderit sit",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 4,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "tempor qui duis",
          "descripcion": "nisi nulla",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 1,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "aliquip anim ullamco",
          "descripcion": "est qui",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 5,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "excepteur excepteur eu",
          "descripcion": "mollit nulla",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 2,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "officia aliquip cupidatat",
          "descripcion": "aute fugiat",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 4,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "reprehenderit esse aute",
          "descripcion": "deserunt ipsum",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 2,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "amet sit ut",
          "descripcion": "labore laborum",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 2,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "non sunt do",
          "descripcion": "irure amet",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 2,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "exercitation labore cillum",
          "descripcion": "fugiat elit",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 3,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "amet culpa dolore",
          "descripcion": "est excepteur",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 2,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "cillum ex tempor",
          "descripcion": "cillum consequat",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 5,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "reprehenderit velit exercitation",
          "descripcion": "commodo ipsum",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 2,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "magna non et",
          "descripcion": "qui in",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 1,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "ut eiusmod cillum",
          "descripcion": "commodo id",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 2,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "velit Lorem ea",
          "descripcion": "irure consectetur",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 1,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "irure occaecat in",
          "descripcion": "aliqua nulla",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 2,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "nisi deserunt ipsum",
          "descripcion": "do pariatur",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 5,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "laborum velit laboris",
          "descripcion": "officia dolore",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 5,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "cillum dolore nulla",
          "descripcion": "magna aute",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 5,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "ut ut ipsum",
          "descripcion": "adipisicing labore",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 1,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "in tempor officia",
          "descripcion": "mollit ex",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 5,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "laborum pariatur veniam",
          "descripcion": "magna fugiat",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 1,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "mollit voluptate velit",
          "descripcion": "duis enim",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 1,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "cillum aliquip sint",
          "descripcion": "qui cupidatat",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 3,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "mollit eiusmod ullamco",
          "descripcion": "ullamco commodo",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 1,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "esse commodo non",
          "descripcion": "occaecat dolore",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 5,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "esse aliquip non",
          "descripcion": "velit Lorem",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 3,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "est velit duis",
          "descripcion": "ut aliquip",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 5,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "eu enim excepteur",
          "descripcion": "sunt reprehenderit",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 1,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "ut nulla consequat",
          "descripcion": "incididunt incididunt",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 1,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "qui reprehenderit incididunt",
          "descripcion": "adipisicing ea",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 2,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "deserunt veniam exercitation",
          "descripcion": "aliquip reprehenderit",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 2,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "officia nulla adipisicing",
          "descripcion": "occaecat id",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 4,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "sunt nulla nulla",
          "descripcion": "sint laboris",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 3,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "consectetur sunt eu",
          "descripcion": "mollit incididunt",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 2,
          "sucursal": 3,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "duis nisi amet",
          "descripcion": "aute ullamco",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 2,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "nulla in cupidatat",
          "descripcion": "exercitation reprehenderit",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 2,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "ipsum elit duis",
          "descripcion": "laborum et",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 4,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "eu officia fugiat",
          "descripcion": "velit consequat",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 2,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "labore ipsum nostrud",
          "descripcion": "occaecat ea",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 5,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "deserunt sit incididunt",
          "descripcion": "consequat ad",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 1,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "qui enim fugiat",
          "descripcion": "tempor proident",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 4,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "excepteur in et",
          "descripcion": "aliquip labore",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 2,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "est velit occaecat",
          "descripcion": "ex aliquip",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 3,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "officia aliqua ea",
          "descripcion": "id fugiat",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 2,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "ex cupidatat magna",
          "descripcion": "nisi proident",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 3,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "laborum occaecat dolor",
          "descripcion": "sunt labore",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 5,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "cupidatat ullamco Lorem",
          "descripcion": "veniam do",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 5,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "laborum veniam nisi",
          "descripcion": "tempor non",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 5,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "do tempor Lorem",
          "descripcion": "aliqua mollit",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 5,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "laboris occaecat dolore",
          "descripcion": "dolore enim",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 2,
          "sucursal": 3,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "elit proident elit",
          "descripcion": "proident eiusmod",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 5,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "labore do magna",
          "descripcion": "eiusmod do",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 4,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "qui ut id",
          "descripcion": "nulla qui",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 1,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "cillum eiusmod excepteur",
          "descripcion": "qui reprehenderit",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 2,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "sint veniam dolore",
          "descripcion": "nulla anim",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 5,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "dolor veniam sunt",
          "descripcion": "consectetur quis",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 2,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "sunt dolor ex",
          "descripcion": "enim qui",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 2,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "aliqua cillum minim",
          "descripcion": "nostrud et",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 3,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "cupidatat velit reprehenderit",
          "descripcion": "do culpa",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 5,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "proident nisi commodo",
          "descripcion": "excepteur enim",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 5,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "ut elit eiusmod",
          "descripcion": "ad laborum",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 3,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "culpa aute nisi",
          "descripcion": "nulla consectetur",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 1,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "ipsum cillum consectetur",
          "descripcion": "voluptate ipsum",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 5,
          "sucursal": 3,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "incididunt exercitation et",
          "descripcion": "eiusmod dolor",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 1,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "deserunt magna sunt",
          "descripcion": "mollit dolor",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 1,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "nostrud sint nostrud",
          "descripcion": "laborum elit",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 5,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "nostrud nulla est",
          "descripcion": "fugiat enim",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 3,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "est aute aliquip",
          "descripcion": "dolore do",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 4,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "proident anim aliqua",
          "descripcion": "deserunt eu",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 2,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "ipsum in minim",
          "descripcion": "consequat Lorem",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 3,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "anim deserunt ullamco",
          "descripcion": "voluptate reprehenderit",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 5,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "laborum aute duis",
          "descripcion": "cillum eu",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 4,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "ea pariatur id",
          "descripcion": "proident ad",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 2,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "ex occaecat laborum",
          "descripcion": "consectetur veniam",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 5,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "aute ullamco aliquip",
          "descripcion": "velit non",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 5,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "non id occaecat",
          "descripcion": "ullamco magna",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 5,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "sunt proident amet",
          "descripcion": "aute id",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 2,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 1,
          "cuenta": "in anim enim",
          "descripcion": "ex adipisicing",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 5,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "incididunt eiusmod anim",
          "descripcion": "consectetur labore",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 3,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "ut ipsum cupidatat",
          "descripcion": "cillum ex",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 2,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "voluptate nisi deserunt",
          "descripcion": "culpa incididunt",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 5,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "laborum sint nisi",
          "descripcion": "mollit qui",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 5,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "voluptate id eu",
          "descripcion": "elit et",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 2,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "ipsum ipsum magna",
          "descripcion": "non enim",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 4,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "anim laborum incididunt",
          "descripcion": "amet aute",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 1,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "ex mollit sit",
          "descripcion": "Lorem excepteur",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 5,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "incididunt aliqua dolore",
          "descripcion": "enim voluptate",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 4,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "exercitation magna occaecat",
          "descripcion": "excepteur in",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 2,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "Lorem ad adipisicing",
          "descripcion": "mollit est",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 4,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "deserunt incididunt excepteur",
          "descripcion": "ut amet",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 5,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "anim adipisicing magna",
          "descripcion": "minim id",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 1,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "aliqua sunt et",
          "descripcion": "mollit ad",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 1,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "sint id irure",
          "descripcion": "laborum sint",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 2,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "cillum quis nostrud",
          "descripcion": "mollit excepteur",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 4,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "magna elit occaecat",
          "descripcion": "mollit culpa",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 3,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "veniam reprehenderit occaecat",
          "descripcion": "irure irure",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 4,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "velit consectetur aliqua",
          "descripcion": "tempor sunt",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 3,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "amet excepteur anim",
          "descripcion": "labore ex",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 3,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "laborum tempor eu",
          "descripcion": "sunt minim",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 2,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "officia enim est",
          "descripcion": "veniam dolor",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 2,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "cillum minim veniam",
          "descripcion": "qui nostrud",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 4,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "veniam et reprehenderit",
          "descripcion": "commodo aute",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 2,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "reprehenderit est ea",
          "descripcion": "labore commodo",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 3,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "eu aute nisi",
          "descripcion": "labore velit",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 2,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "deserunt labore ex",
          "descripcion": "ut consequat",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 1,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "esse adipisicing aliqua",
          "descripcion": "mollit ea",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 2,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "veniam sit fugiat",
          "descripcion": "mollit sunt",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 4,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "ad adipisicing ipsum",
          "descripcion": "aliqua sunt",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 2,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "qui sunt excepteur",
          "descripcion": "Lorem culpa",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 4,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "nisi commodo nulla",
          "descripcion": "culpa esse",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 2,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "deserunt consequat aliquip",
          "descripcion": "labore et",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 1,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "eu occaecat ea",
          "descripcion": "aute nisi",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 1,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "nostrud commodo sint",
          "descripcion": "ipsum irure",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 4,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "esse labore sint",
          "descripcion": "incididunt do",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 2,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "ullamco ipsum incididunt",
          "descripcion": "ex enim",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 1,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "commodo culpa laboris",
          "descripcion": "officia ad",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 2,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "anim proident est",
          "descripcion": "ex fugiat",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 2,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 1,
          "cuenta": "reprehenderit anim aliqua",
          "descripcion": "cillum tempor",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 5,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "reprehenderit commodo amet",
          "descripcion": "anim sint",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 4,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "irure amet dolor",
          "descripcion": "irure cupidatat",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 3,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "labore excepteur irure",
          "descripcion": "tempor eu",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 2,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "sint irure nulla",
          "descripcion": "minim consequat",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 4,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "culpa quis adipisicing",
          "descripcion": "exercitation laboris",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 3,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "qui aliqua aliqua",
          "descripcion": "laboris consectetur",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 5,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "proident exercitation irure",
          "descripcion": "nostrud labore",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 4,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "voluptate fugiat sunt",
          "descripcion": "duis nulla",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 1,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "proident labore pariatur",
          "descripcion": "consectetur ipsum",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 5,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "pariatur nostrud elit",
          "descripcion": "anim laborum",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 3,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "sint aute ea",
          "descripcion": "consequat nisi",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 3,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "do qui velit",
          "descripcion": "sint proident",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 5,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "velit exercitation veniam",
          "descripcion": "sit cupidatat",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 5,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "quis aute ipsum",
          "descripcion": "et aliqua",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 4,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "nulla ipsum ad",
          "descripcion": "exercitation commodo",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 5,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "excepteur eiusmod aliquip",
          "descripcion": "nisi magna",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 2,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "pariatur amet qui",
          "descripcion": "sit magna",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 4,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "sunt enim culpa",
          "descripcion": "voluptate incididunt",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 3,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "ea duis excepteur",
          "descripcion": "ut aliquip",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 4,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "est velit id",
          "descripcion": "ut tempor",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 4,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "et elit sint",
          "descripcion": "ad minim",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 5,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "id nulla laboris",
          "descripcion": "mollit aliquip",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 1,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "velit laborum minim",
          "descripcion": "sit labore",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 3,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "excepteur proident reprehenderit",
          "descripcion": "aliquip exercitation",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 5,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "culpa consequat aute",
          "descripcion": "ea ullamco",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 2,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "pariatur cupidatat tempor",
          "descripcion": "non laborum",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 2,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "adipisicing incididunt nostrud",
          "descripcion": "non enim",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 1,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "aute esse esse",
          "descripcion": "veniam ut",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 1,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "ex laboris ex",
          "descripcion": "irure proident",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 1,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "quis non fugiat",
          "descripcion": "exercitation laborum",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 2,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "velit sunt eiusmod",
          "descripcion": "pariatur sunt",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 3,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "ea dolore eiusmod",
          "descripcion": "aute fugiat",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 5,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "eiusmod excepteur non",
          "descripcion": "nisi veniam",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 3,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "eu consectetur quis",
          "descripcion": "eu labore",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 5,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "officia proident labore",
          "descripcion": "commodo culpa",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 5,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "velit aliqua incididunt",
          "descripcion": "laboris sint",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 5,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 4,
          "cuenta": "cupidatat eu exercitation",
          "descripcion": "consequat nulla",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 4,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "veniam reprehenderit deserunt",
          "descripcion": "aute culpa",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 5,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "tempor amet dolor",
          "descripcion": "sint officia",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 1,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "aliquip adipisicing id",
          "descripcion": "ipsum nisi",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 4,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "nulla pariatur consectetur",
          "descripcion": "aliqua amet",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 1,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "et in cillum",
          "descripcion": "et excepteur",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 1,
          "sucursal": 3,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "do ut elit",
          "descripcion": "sunt ex",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 2,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "eiusmod nostrud commodo",
          "descripcion": "magna dolor",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 4,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 1,
          "cuenta": "anim commodo Lorem",
          "descripcion": "aliquip id",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 4,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "non sunt qui",
          "descripcion": "laborum non",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 3,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "occaecat sit Lorem",
          "descripcion": "officia enim",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 3,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "sit sit id",
          "descripcion": "exercitation exercitation",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 5,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "deserunt mollit ad",
          "descripcion": "excepteur eiusmod",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 2,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "sunt ad proident",
          "descripcion": "ad non",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 1,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "labore voluptate duis",
          "descripcion": "veniam quis",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 5,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "ea ut pariatur",
          "descripcion": "culpa cillum",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 2,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "deserunt elit sunt",
          "descripcion": "nulla et",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 5,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "elit fugiat do",
          "descripcion": "amet magna",
          "tipo_gasto": 3,
          "compania": 2,
          "segmento": 2,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "eiusmod eiusmod et",
          "descripcion": "minim do",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 3,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "culpa ipsum velit",
          "descripcion": "aliquip Lorem",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 2,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "ea incididunt ea",
          "descripcion": "magna amet",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 5,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "excepteur tempor adipisicing",
          "descripcion": "id non",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 2,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "laboris sit incididunt",
          "descripcion": "dolor eu",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 2,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "occaecat ut esse",
          "descripcion": "deserunt sunt",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 1,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "nostrud officia magna",
          "descripcion": "mollit incididunt",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 2,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "incididunt qui sunt",
          "descripcion": "velit fugiat",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 5,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "ipsum est amet",
          "descripcion": "dolore cillum",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 4,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 2,
          "cuenta": "qui eu elit",
          "descripcion": "minim elit",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 1,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "ex incididunt ex",
          "descripcion": "culpa consequat",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 2,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "laboris excepteur aliquip",
          "descripcion": "ad magna",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 2,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "reprehenderit amet tempor",
          "descripcion": "cillum exercitation",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 4,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "ex proident nulla",
          "descripcion": "velit et",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 3,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "consequat qui et",
          "descripcion": "adipisicing cupidatat",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 1,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "sunt aute magna",
          "descripcion": "ea sunt",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 4,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "cupidatat commodo nulla",
          "descripcion": "elit amet",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 2,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "consectetur enim nulla",
          "descripcion": "do elit",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 5,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "laboris minim amet",
          "descripcion": "eiusmod quis",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 1,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "ipsum est pariatur",
          "descripcion": "cillum id",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 3,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "ex nulla deserunt",
          "descripcion": "ea minim",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 3,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "qui nostrud magna",
          "descripcion": "ad voluptate",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 2,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 3,
          "cuenta": "mollit aliqua id",
          "descripcion": "sint qui",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 5,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "et Lorem fugiat",
          "descripcion": "irure esse",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 5,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "id officia adipisicing",
          "descripcion": "ex id",
          "tipo_gasto": 1,
          "compania": 2,
          "segmento": 2,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "adipisicing reprehenderit sint",
          "descripcion": "non magna",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 2,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "voluptate ex ullamco",
          "descripcion": "pariatur deserunt",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 4,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "tempor non amet",
          "descripcion": "excepteur magna",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 3,
          "sucursal": 3,
          "id": 3
        },
        {
          "estado": 4,
          "cuenta": "non in culpa",
          "descripcion": "esse qui",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 2,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "aliqua amet nostrud",
          "descripcion": "officia deserunt",
          "tipo_gasto": 2,
          "compania": 5,
          "segmento": 4,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "sit eiusmod id",
          "descripcion": "sunt laborum",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 1,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "esse sint est",
          "descripcion": "in consectetur",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 5,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "pariatur ut Lorem",
          "descripcion": "voluptate eiusmod",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 2,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 1,
          "cuenta": "ipsum enim ipsum",
          "descripcion": "minim sunt",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 5,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "eiusmod consequat laborum",
          "descripcion": "nostrud culpa",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 2,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "ea quis labore",
          "descripcion": "incididunt in",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 5,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "sint sit consequat",
          "descripcion": "aliquip excepteur",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 4,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "esse irure velit",
          "descripcion": "officia proident",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 1,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "veniam mollit irure",
          "descripcion": "ex tempor",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 1,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "officia est enim",
          "descripcion": "sunt irure",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 2,
          "sucursal": 3,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "do non irure",
          "descripcion": "non sunt",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 4,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 1,
          "cuenta": "aliqua velit id",
          "descripcion": "ullamco cupidatat",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 5,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "sint in velit",
          "descripcion": "nostrud ea",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 3,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "consequat cupidatat mollit",
          "descripcion": "Lorem voluptate",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 3,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "ea eiusmod minim",
          "descripcion": "culpa anim",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 3,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "irure amet cupidatat",
          "descripcion": "proident exercitation",
          "tipo_gasto": 1,
          "compania": 4,
          "segmento": 2,
          "sucursal": 2,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "quis nulla qui",
          "descripcion": "reprehenderit cillum",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 2,
          "sucursal": 1,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "eu irure voluptate",
          "descripcion": "tempor aliqua",
          "tipo_gasto": 5,
          "compania": 2,
          "segmento": 4,
          "sucursal": 2,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "non enim commodo",
          "descripcion": "ut voluptate",
          "tipo_gasto": 1,
          "compania": 1,
          "segmento": 3,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "consectetur voluptate mollit",
          "descripcion": "eu laborum",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 1,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "consectetur fugiat irure",
          "descripcion": "dolore voluptate",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 2,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "aliqua eiusmod minim",
          "descripcion": "veniam amet",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 5,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "voluptate sit mollit",
          "descripcion": "laborum veniam",
          "tipo_gasto": 5,
          "compania": 4,
          "segmento": 5,
          "sucursal": 1,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "irure est sunt",
          "descripcion": "fugiat consectetur",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 4,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 2,
          "cuenta": "deserunt ex cupidatat",
          "descripcion": "nisi voluptate",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 2,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "cupidatat adipisicing consequat",
          "descripcion": "incididunt ea",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 3,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "nisi adipisicing irure",
          "descripcion": "eiusmod velit",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 4,
          "sucursal": 4,
          "id": 2
        },
        {
          "estado": 4,
          "cuenta": "fugiat reprehenderit deserunt",
          "descripcion": "commodo et",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 3,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "officia adipisicing elit",
          "descripcion": "exercitation consectetur",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 4,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "elit exercitation pariatur",
          "descripcion": "non mollit",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 3,
          "sucursal": 5,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "elit ipsum occaecat",
          "descripcion": "nostrud excepteur",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 1,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "duis sit adipisicing",
          "descripcion": "adipisicing ipsum",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 2,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "Lorem ea duis",
          "descripcion": "irure laborum",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 1,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 1,
          "cuenta": "sit qui velit",
          "descripcion": "eiusmod officia",
          "tipo_gasto": 5,
          "compania": 3,
          "segmento": 1,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "dolore dolor quis",
          "descripcion": "consequat cupidatat",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 1,
          "sucursal": 2,
          "id": 3
        },
        {
          "estado": 5,
          "cuenta": "deserunt anim mollit",
          "descripcion": "exercitation in",
          "tipo_gasto": 4,
          "compania": 4,
          "segmento": 1,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 1,
          "cuenta": "tempor elit non",
          "descripcion": "pariatur dolore",
          "tipo_gasto": 1,
          "compania": 5,
          "segmento": 2,
          "sucursal": 4,
          "id": 1
        },
        {
          "estado": 3,
          "cuenta": "culpa officia laboris",
          "descripcion": "veniam ad",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 5,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "elit do deserunt",
          "descripcion": "cillum id",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 5,
          "sucursal": 2,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "nulla anim consequat",
          "descripcion": "laborum aute",
          "tipo_gasto": 3,
          "compania": 1,
          "segmento": 4,
          "sucursal": 1,
          "id": 5
        },
        {
          "estado": 5,
          "cuenta": "fugiat est adipisicing",
          "descripcion": "ipsum enim",
          "tipo_gasto": 2,
          "compania": 1,
          "segmento": 5,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 5,
          "cuenta": "enim incididunt ipsum",
          "descripcion": "adipisicing amet",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 4,
          "sucursal": 3,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "adipisicing minim dolor",
          "descripcion": "in aliqua",
          "tipo_gasto": 4,
          "compania": 2,
          "segmento": 2,
          "sucursal": 1,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "ea non in",
          "descripcion": "cupidatat exercitation",
          "tipo_gasto": 2,
          "compania": 3,
          "segmento": 2,
          "sucursal": 4,
          "id": 5
        },
        {
          "estado": 4,
          "cuenta": "aute mollit officia",
          "descripcion": "nulla ad",
          "tipo_gasto": 4,
          "compania": 5,
          "segmento": 5,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "est exercitation eiusmod",
          "descripcion": "officia do",
          "tipo_gasto": 4,
          "compania": 1,
          "segmento": 1,
          "sucursal": 3,
          "id": 1
        },
        {
          "estado": 1,
          "cuenta": "labore in anim",
          "descripcion": "tempor ut",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 4,
          "sucursal": 2,
          "id": 2
        },
        {
          "estado": 3,
          "cuenta": "qui incididunt velit",
          "descripcion": "sint est",
          "tipo_gasto": 4,
          "compania": 3,
          "segmento": 2,
          "sucursal": 4,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "labore ullamco est",
          "descripcion": "pariatur voluptate",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 5,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "ipsum nulla laborum",
          "descripcion": "do commodo",
          "tipo_gasto": 5,
          "compania": 5,
          "segmento": 2,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "aliqua aute excepteur",
          "descripcion": "veniam do",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 5,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "incididunt in Lorem",
          "descripcion": "est cupidatat",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 2,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 3,
          "cuenta": "ut officia esse",
          "descripcion": "pariatur est",
          "tipo_gasto": 1,
          "compania": 3,
          "segmento": 2,
          "sucursal": 1,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "proident fugiat dolor",
          "descripcion": "aute veniam",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 5,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 2,
          "cuenta": "consectetur commodo magna",
          "descripcion": "officia voluptate",
          "tipo_gasto": 2,
          "compania": 2,
          "segmento": 5,
          "sucursal": 4,
          "id": 3
        },
        {
          "estado": 2,
          "cuenta": "aliquip et reprehenderit",
          "descripcion": "eiusmod commodo",
          "tipo_gasto": 3,
          "compania": 3,
          "segmento": 1,
          "sucursal": 5,
          "id": 1
        },
        {
          "estado": 5,
          "cuenta": "in anim sit",
          "descripcion": "commodo in",
          "tipo_gasto": 2,
          "compania": 4,
          "segmento": 5,
          "sucursal": 3,
          "id": 4
        },
        {
          "estado": 4,
          "cuenta": "mollit proident anim",
          "descripcion": "ipsum proident",
          "tipo_gasto": 3,
          "compania": 5,
          "segmento": 2,
          "sucursal": 3,
          "id": 5
        },
        {
          "estado": 3,
          "cuenta": "ullamco tempor nisi",
          "descripcion": "elit deserunt",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 5,
          "sucursal": 5,
          "id": 3
        },
        {
          "estado": 1,
          "cuenta": "nisi enim mollit",
          "descripcion": "nostrud sint",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 4,
          "sucursal": 5,
          "id": 5
        },
        {
          "estado": 2,
          "cuenta": "adipisicing fugiat ex",
          "descripcion": "consequat et",
          "tipo_gasto": 3,
          "compania": 4,
          "segmento": 1,
          "sucursal": 5,
          "id": 2
        },
        {
          "estado": 5,
          "cuenta": "incididunt deserunt irure",
          "descripcion": "aliqua Lorem",
          "tipo_gasto": 5,
          "compania": 1,
          "segmento": 4,
          "sucursal": 1,
          "id": 3
        }
      ],
    });
  }

  render() {
    const { columns, data } = this.state;
    return (
      <div className="Tabla">
        <button onClick={this.updateState}>Update table test</button>
        <LocalTable columns={columns} data={data} />
      </div>
    );
  }
}

export default LocalTableExample;
