# @wafo/table
It's a library inspired by *[jQuery DataTables](https://datatables.net/)*, which allows to create interactive tables quick with some cusomization on top.

## Demo
Coming soon

## Installation
    npm install --save @wafo/table

> **Note:** This library has zero dependencies

## Basic example
This example shows one of the easiest way this library can be used.

```javascript
import React from 'react';
import { LocalTable } from '@wafo/table';

const columns = ['Id', 'Name', 'Email'];

const rows = [
  {
    id: 1,
    name: 'Jon Smith',
    email: 'jon@gmail.com',
  },
  // ..., more objects
];

const SomeComponent = () => (
  <div className="some-class">
    <LocalTable
      columns={columns}
      rows={rows}
      tableClass="table"
    />
  </div>
);
```

## The components

There are two main components in this library, one for tables where you have all the data on hand and another for when the data comes in parts (from a server or somewhere else). This two components work on top of the base Table component, it renders a table based on the props it receives.

### LocalTable
This component works best when you have all the data at hand (maybe when loading data from a file). It has pagination, instant search and column ordering; it also lets you override most of its events in case you need some specific functionality.

Example:
```javascript
import React, { useState, useEffect } from 'react';
import { LocalTable } from '@wafo/table';

const columns = ['Id', 'Name', 'Email'];

const SomeComponent = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Some logic to load your initial data.
    /**
    * const data = [
    *   {
    *     id: 1,
    *     name: 'Jon Smith',
    *     email: 'jon@gmail.com',
    *   },
    *   // ..., more objects
    * ];
    */
    setRows(data);
  }, []);

  const loadData = () => {
    // Some logic to refresh your data.
  }

  return (
    <div className="some-class">
      <LocalTable
        columns={columns}
        rows={rows}
        tableClass="table"
        noRowsMessage="No entries to show."
        updateTable={loadData}
        locale={'es'}
      />
    </div>
  );
};
```

#### Props
| Prop | Type | Required | Default value | Description |
|--|--|--|--|--|
| columns | String[] | No | [] | Array of strings to populate the columns header. |
| rows | Object[] | No | [] | Array of objects, used to generate all the rows of the table body. |
| tableClass | String | No | "table" | CSS class to be passed onto the <table\> tag. |
| configTable | Object | No | {} | Customization object. You can change what it's rendered inside and the style of the cell. For specifics go to [`configTable`](#configtable-object). |
| tableWrapperClass | String | No | "table-wrapper" | CSS class to be passed onto the <div\> tag that wraps the table. |
| updateTable | Function | No | f => f | Callback function fired when the "refresh" button is pressed. |
| locale | String | No | "en" | To choose the language of the table. Currently only english and spanish available. |

### DataTable

**To-do:** This.

### configTable object

**To-do:** This.

### TODO

- [ ] Custom filtering function.
- [ ] Column ordering.
- [ ] Custom page sizes.

### Limitations
 - No nested tables.
 - The search only works on the objects before customization.