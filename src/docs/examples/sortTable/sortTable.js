import React, { Component } from 'react';
import { SortTable } from '../../../../lib';
import './sortTable.css';

const initialState = {
  columns: ['Estatus', 'Cuenta', 'Descripcion', 'Tipo de cuenta', 'Compañia', 'Segmento', 'Fecha', 'Opciones'],
  data: [
    {
      "estado": 2,
      "cuenta": "aliqua cillum aliqua",
      "descripcion": "do cupidatat",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 5,
      "fecha": "2014-02-13T01:29:20 +07:00",
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "ut nulla ut",
      "descripcion": "qui est",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 4,
      "fecha": "2014-01-22T12:35:33 +07:00",
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "elit labore deserunt",
      "descripcion": "voluptate ullamco",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 1,
      "fecha": "2017-05-07T04:50:21 +07:00",
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "esse nulla tempor",
      "descripcion": "anim mollit",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 2,
      "fecha": "2015-08-05T04:19:44 +07:00",
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "ad ad in",
      "descripcion": "irure ad",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 1,
      "fecha": "2017-07-08T08:01:08 +07:00",
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "nulla mollit adipisicing",
      "descripcion": "labore proident",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 1,
      "fecha": "2015-05-27T04:42:38 +07:00",
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "ad commodo ullamco",
      "descripcion": "fugiat deserunt",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 2,
      "fecha": "2017-09-27T04:04:50 +07:00",
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "in aliqua consequat",
      "descripcion": "velit reprehenderit",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 3,
      "fecha": "2018-01-20T04:39:52 +07:00",
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "ipsum proident laborum",
      "descripcion": "tempor sint",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 5,
      "fecha": "2018-04-15T03:53:30 +07:00",
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "consectetur nisi cillum",
      "descripcion": "culpa fugiat",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 2,
      "fecha": "2014-08-25T02:36:32 +07:00",
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "sint velit culpa",
      "descripcion": "quis laborum",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 1,
      "fecha": "2014-04-11T04:43:16 +07:00",
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "ea sint cupidatat",
      "descripcion": "aliquip in",
      "tipo_gasto": 2,
      "compania": 5,
      "segmento": 1,
      "fecha": "2016-12-27T05:54:20 +07:00",
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "est proident aliquip",
      "descripcion": "irure minim",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 1,
      "fecha": "2016-11-21T12:11:52 +07:00",
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "nostrud aute esse",
      "descripcion": "ea nulla",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 1,
      "fecha": "2016-01-30T03:32:02 +07:00",
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "labore exercitation reprehenderit",
      "descripcion": "consequat esse",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 4,
      "fecha": "2014-09-25T06:19:27 +07:00",
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "ex culpa consectetur",
      "descripcion": "laboris quis",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 4,
      "fecha": "2016-12-02T02:33:26 +07:00",
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "voluptate magna minim",
      "descripcion": "do reprehenderit",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 3,
      "fecha": "2018-08-15T07:33:57 +07:00",
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "ex dolore incididunt",
      "descripcion": "minim quis",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 4,
      "fecha": "2017-06-10T12:28:17 +07:00",
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "et culpa anim",
      "descripcion": "ad exercitation",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 2,
      "fecha": "2016-02-01T06:53:56 +07:00",
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "voluptate ex reprehenderit",
      "descripcion": "consequat nulla",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 4,
      "fecha": "2015-05-01T06:11:02 +07:00",
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "proident id aliquip",
      "descripcion": "anim nulla",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 2,
      "fecha": "2014-11-17T08:17:43 +07:00",
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "excepteur ipsum commodo",
      "descripcion": "irure nulla",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 4,
      "fecha": "2014-12-24T04:31:12 +07:00",
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "sit adipisicing esse",
      "descripcion": "culpa consequat",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 4,
      "fecha": "2016-10-12T06:40:06 +07:00",
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "ex aute elit",
      "descripcion": "voluptate reprehenderit",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 2,
      "fecha": "2014-03-29T05:07:08 +07:00",
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "nostrud laborum nostrud",
      "descripcion": "quis reprehenderit",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 2,
      "fecha": "2018-05-06T06:27:19 +07:00",
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "cillum minim est",
      "descripcion": "deserunt quis",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 3,
      "fecha": "2016-03-02T02:23:36 +07:00",
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "deserunt aliquip laboris",
      "descripcion": "irure laborum",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 5,
      "fecha": "2016-08-25T02:15:25 +07:00",
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "adipisicing elit ad",
      "descripcion": "officia proident",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 5,
      "fecha": "2016-09-21T09:36:23 +07:00",
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "ut proident occaecat",
      "descripcion": "est quis",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 4,
      "fecha": "2017-09-13T10:02:01 +07:00",
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "excepteur do deserunt",
      "descripcion": "duis irure",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 4,
      "fecha": "2015-12-15T04:10:21 +07:00",
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "cillum minim esse",
      "descripcion": "adipisicing dolor",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 1,
      "fecha": "2017-10-09T08:19:22 +07:00",
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "voluptate irure exercitation",
      "descripcion": "fugiat do",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 4,
      "fecha": "2017-12-31T10:57:47 +07:00",
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "do reprehenderit deserunt",
      "descripcion": "ea amet",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 3,
      "fecha": "2015-05-26T11:37:07 +07:00",
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "cupidatat duis magna",
      "descripcion": "non aliqua",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 2,
      "fecha": "2016-09-07T06:25:06 +07:00",
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "pariatur aliquip labore",
      "descripcion": "nisi occaecat",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 3,
      "fecha": "2017-06-14T06:37:43 +07:00",
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "commodo qui ullamco",
      "descripcion": "nisi aliqua",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 3,
      "fecha": "2014-08-28T09:05:39 +07:00",
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "commodo minim incididunt",
      "descripcion": "sunt nulla",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 3,
      "fecha": "2016-02-10T01:01:05 +07:00",
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "nulla ad amet",
      "descripcion": "velit labore",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 3,
      "fecha": "2014-08-09T07:23:33 +07:00",
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "cupidatat ut quis",
      "descripcion": "consectetur cillum",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 4,
      "fecha": "2014-02-25T02:10:29 +07:00",
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "sunt deserunt minim",
      "descripcion": "anim velit",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 2,
      "fecha": "2014-02-12T12:55:51 +07:00",
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "dolore officia reprehenderit",
      "descripcion": "quis occaecat",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 4,
      "fecha": "2014-10-16T07:20:05 +07:00",
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "exercitation do dolor",
      "descripcion": "est consectetur",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 2,
      "fecha": "2018-09-14T12:25:19 +07:00",
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "est id ea",
      "descripcion": "enim eiusmod",
      "tipo_gasto": 4,
      "compania": 2,
      "segmento": 3,
      "fecha": "2015-08-15T01:43:14 +07:00",
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "laboris deserunt culpa",
      "descripcion": "ipsum in",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 2,
      "fecha": "2014-01-26T06:20:11 +07:00",
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "nostrud anim exercitation",
      "descripcion": "labore deserunt",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 3,
      "fecha": "2018-05-05T10:49:22 +07:00",
      "id": 1
    },
    {
      "estado": 5,
      "cuenta": "eu irure voluptate",
      "descripcion": "excepteur consectetur",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 3,
      "fecha": "2018-04-30T08:22:26 +07:00",
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "cupidatat aute dolor",
      "descripcion": "aliquip do",
      "tipo_gasto": 1,
      "compania": 3,
      "segmento": 3,
      "fecha": "2015-12-24T01:54:22 +07:00",
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "nisi adipisicing amet",
      "descripcion": "eiusmod ea",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 4,
      "fecha": "2016-11-08T01:49:56 +07:00",
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "ut non anim",
      "descripcion": "amet nostrud",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 3,
      "fecha": "2014-04-12T12:41:39 +07:00",
      "id": 2
    },
    {
      "estado": 2,
      "cuenta": "quis laborum aliqua",
      "descripcion": "commodo irure",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 2,
      "fecha": "2016-04-14T04:26:34 +07:00",
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "ut aute ad",
      "descripcion": "eiusmod dolore",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 1,
      "fecha": "2014-08-20T01:11:27 +07:00",
      "id": 1
    },
    {
      "estado": 4,
      "cuenta": "laborum id labore",
      "descripcion": "culpa est",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 2,
      "fecha": "2014-06-01T07:41:00 +07:00",
      "id": 3
    },
    {
      "estado": 4,
      "cuenta": "mollit commodo irure",
      "descripcion": "nisi sit",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 4,
      "fecha": "2015-11-14T12:30:47 +07:00",
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "cupidatat qui exercitation",
      "descripcion": "cupidatat duis",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 3,
      "fecha": "2018-08-20T02:29:07 +07:00",
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "eu Lorem dolore",
      "descripcion": "cillum officia",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 1,
      "fecha": "2016-07-24T12:29:08 +07:00",
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "ad ea sunt",
      "descripcion": "nulla in",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 4,
      "fecha": "2015-06-23T07:29:25 +07:00",
      "id": 5
    },
    {
      "estado": 2,
      "cuenta": "do irure reprehenderit",
      "descripcion": "pariatur sint",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 5,
      "fecha": "2016-01-07T10:45:35 +07:00",
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "aliqua sit voluptate",
      "descripcion": "laboris velit",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 3,
      "fecha": "2015-02-10T08:23:08 +07:00",
      "id": 5
    },
    {
      "estado": 4,
      "cuenta": "voluptate exercitation excepteur",
      "descripcion": "anim duis",
      "tipo_gasto": 1,
      "compania": 1,
      "segmento": 4,
      "fecha": "2015-07-23T10:20:20 +07:00",
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "voluptate anim aute",
      "descripcion": "cupidatat et",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 5,
      "fecha": "2016-07-11T02:35:59 +07:00",
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "ea consectetur elit",
      "descripcion": "duis commodo",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 4,
      "fecha": "2018-08-30T07:37:30 +07:00",
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "ut sint est",
      "descripcion": "ut eu",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 3,
      "fecha": "2016-11-09T11:10:24 +07:00",
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "Lorem enim aute",
      "descripcion": "labore quis",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 4,
      "fecha": "2017-12-03T01:37:14 +07:00",
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "cupidatat reprehenderit pariatur",
      "descripcion": "non duis",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 2,
      "fecha": "2016-08-03T06:03:55 +07:00",
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "tempor ipsum dolor",
      "descripcion": "sunt nulla",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 4,
      "fecha": "2016-06-06T09:29:57 +07:00",
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "in ex velit",
      "descripcion": "proident enim",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 2,
      "fecha": "2016-05-21T02:29:53 +07:00",
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "elit magna anim",
      "descripcion": "Lorem sit",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 4,
      "fecha": "2014-10-06T07:21:27 +07:00",
      "id": 1
    },
    {
      "estado": 2,
      "cuenta": "duis sit reprehenderit",
      "descripcion": "amet deserunt",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 4,
      "fecha": "2014-02-20T06:05:01 +07:00",
      "id": 2
    },
    {
      "estado": 5,
      "cuenta": "enim officia consequat",
      "descripcion": "eu adipisicing",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 4,
      "fecha": "2014-08-06T05:52:45 +07:00",
      "id": 4
    },
    {
      "estado": 2,
      "cuenta": "aliquip pariatur eu",
      "descripcion": "laboris officia",
      "tipo_gasto": 2,
      "compania": 1,
      "segmento": 2,
      "fecha": "2014-12-30T03:31:37 +07:00",
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "fugiat proident sit",
      "descripcion": "do excepteur",
      "tipo_gasto": 1,
      "compania": 2,
      "segmento": 4,
      "fecha": "2018-07-12T03:20:54 +07:00",
      "id": 4
    },
    {
      "estado": 5,
      "cuenta": "dolor et ipsum",
      "descripcion": "anim incididunt",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 3,
      "fecha": "2014-09-18T02:04:56 +07:00",
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "adipisicing ut officia",
      "descripcion": "non enim",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 3,
      "fecha": "2015-04-06T09:23:10 +07:00",
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "deserunt eiusmod ea",
      "descripcion": "voluptate fugiat",
      "tipo_gasto": 3,
      "compania": 5,
      "segmento": 2,
      "fecha": "2018-05-09T02:15:07 +07:00",
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "irure ut adipisicing",
      "descripcion": "dolore amet",
      "tipo_gasto": 4,
      "compania": 5,
      "segmento": 3,
      "fecha": "2014-05-05T04:34:44 +07:00",
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "dolor laborum in",
      "descripcion": "nulla aliquip",
      "tipo_gasto": 2,
      "compania": 3,
      "segmento": 5,
      "fecha": "2017-10-28T01:26:56 +07:00",
      "id": 3
    },
    {
      "estado": 5,
      "cuenta": "sit cillum nisi",
      "descripcion": "ad id",
      "tipo_gasto": 5,
      "compania": 3,
      "segmento": 1,
      "fecha": "2014-06-08T08:46:52 +07:00",
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "duis esse est",
      "descripcion": "sunt duis",
      "tipo_gasto": 3,
      "compania": 2,
      "segmento": 1,
      "fecha": "2018-04-04T05:27:41 +07:00",
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "voluptate nostrud officia",
      "descripcion": "nostrud amet",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 5,
      "fecha": "2017-12-12T09:25:39 +07:00",
      "id": 4
    },
    {
      "estado": 3,
      "cuenta": "officia cillum commodo",
      "descripcion": "elit anim",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 4,
      "fecha": "2018-02-26T10:08:13 +07:00",
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "id eiusmod qui",
      "descripcion": "officia aliqua",
      "tipo_gasto": 4,
      "compania": 3,
      "segmento": 3,
      "fecha": "2014-01-09T04:13:11 +07:00",
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "fugiat labore et",
      "descripcion": "incididunt nulla",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 5,
      "fecha": "2018-04-02T05:44:48 +07:00",
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "esse ullamco ut",
      "descripcion": "occaecat dolore",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 3,
      "fecha": "2014-01-14T12:40:40 +07:00",
      "id": 2
    },
    {
      "estado": 1,
      "cuenta": "velit sunt aliquip",
      "descripcion": "cillum eiusmod",
      "tipo_gasto": 3,
      "compania": 1,
      "segmento": 3,
      "fecha": "2016-09-01T04:27:01 +07:00",
      "id": 1
    },
    {
      "estado": 1,
      "cuenta": "ad mollit consequat",
      "descripcion": "officia incididunt",
      "tipo_gasto": 1,
      "compania": 4,
      "segmento": 2,
      "fecha": "2017-08-11T08:36:51 +07:00",
      "id": 3
    },
    {
      "estado": 3,
      "cuenta": "irure dolor Lorem",
      "descripcion": "sunt ut",
      "tipo_gasto": 4,
      "compania": 4,
      "segmento": 5,
      "fecha": "2015-04-05T02:22:48 +07:00",
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "occaecat id nulla",
      "descripcion": "reprehenderit laborum",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 5,
      "fecha": "2016-04-04T06:27:42 +07:00",
      "id": 5
    },
    {
      "estado": 5,
      "cuenta": "esse et culpa",
      "descripcion": "ipsum id",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 4,
      "fecha": "2015-12-12T12:08:16 +07:00",
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "culpa ad sunt",
      "descripcion": "deserunt nisi",
      "tipo_gasto": 4,
      "compania": 1,
      "segmento": 2,
      "fecha": "2018-06-10T02:41:26 +07:00",
      "id": 5
    },
    {
      "estado": 1,
      "cuenta": "culpa amet do",
      "descripcion": "qui consequat",
      "tipo_gasto": 1,
      "compania": 5,
      "segmento": 3,
      "fecha": "2018-07-02T07:37:35 +07:00",
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "do excepteur cillum",
      "descripcion": "commodo est",
      "tipo_gasto": 2,
      "compania": 2,
      "segmento": 5,
      "fecha": "2016-09-29T10:29:35 +07:00",
      "id": 1
    },
    {
      "estado": 3,
      "cuenta": "dolore aliqua do",
      "descripcion": "non sint",
      "tipo_gasto": 5,
      "compania": 5,
      "segmento": 3,
      "fecha": "2017-01-23T04:11:04 +07:00",
      "id": 2
    },
    {
      "estado": 3,
      "cuenta": "aliqua quis fugiat",
      "descripcion": "tempor labore",
      "tipo_gasto": 3,
      "compania": 3,
      "segmento": 3,
      "fecha": "2015-10-11T10:28:46 +07:00",
      "id": 4
    },
    {
      "estado": 1,
      "cuenta": "nulla nisi ipsum",
      "descripcion": "dolor nisi",
      "tipo_gasto": 5,
      "compania": 1,
      "segmento": 3,
      "fecha": "2014-04-08T12:37:37 +07:00",
      "id": 4
    },
    {
      "estado": 4,
      "cuenta": "pariatur qui anim",
      "descripcion": "velit exercitation",
      "tipo_gasto": 5,
      "compania": 4,
      "segmento": 5,
      "fecha": "2017-09-29T04:20:33 +07:00",
      "id": 5
    },
    {
      "estado": 3,
      "cuenta": "exercitation exercitation ullamco",
      "descripcion": "eu dolore",
      "tipo_gasto": 3,
      "compania": 4,
      "segmento": 5,
      "fecha": "2015-03-01T12:53:41 +07:00",
      "id": 2
    },
    {
      "estado": 4,
      "cuenta": "excepteur Lorem dolor",
      "descripcion": "aliquip minim",
      "tipo_gasto": 2,
      "compania": 4,
      "segmento": 2,
      "fecha": "2015-12-12T08:43:45 +07:00",
      "id": 3
    },
    {
      "estado": 2,
      "cuenta": "enim commodo ut",
      "descripcion": "consequat sint",
      "tipo_gasto": 5,
      "compania": 2,
      "segmento": 3,
      "fecha": "2018-03-30T11:12:06 +07:00",
      "id": 5
    }
  ],
};

class SortTableExample extends Component {
  constructor() {
    super();

    this.state = initialState;
  }

  render() {
    const { columns, data } = this.state;
    return (
      <div className="Tabla">
        <SortTable columns={columns} data={data} />
      </div>
    );
  }
}

export default SortTableExample;