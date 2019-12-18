# @wafo/table
Inspired by other table libraries. Allows the user to create interactive and customizable tables that can handle local and remote data.

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

### Table
The base component for the tables. You could use this component to make a simple table or extended to create your own specific one.

Example:
```javascript
import React from 'react';
import { Table } from '@wafo/table';

const columns = ['Id', 'Name', 'Email'];

const data = [
  {
    id: 1,
    name: 'Jon Smith',
    email: 'jon@gmail.com',
  },
  // ...
];

const SomeComponent = () => (
  <div className="some-class">
    <Table
      columns={columns}
      rows={rows}
      tableClass="table"
      noRowsMessage="No entries to show."
      locale={'es'}
    />
  </div>
);
```

#### Props
This props from the base table are shared by the two other ones (since they're extensions of this one).

| Prop | Type | Required | Default value | Description |
|--|--|--|--|--|
| columns | String[ ] | No | [ ] | Array of strings to populate the columns header. |
| rows | Object[ ] | No | [ ] | Array of objects, used to generate all the rows of the table body. |
| tableClass | String | No | "table" | CSS class to be passed onto the <table\> tag. |
| noRowsMessage | String | No | "No data to show" | Message when there are no rows to display. |
| locale | String | No | "en" | To choose the language of the table. Currently only english and spanish available. |
| onHeaderClick | Function | No | f => f | Callback function fired when one of the table headers is clicked. |
| columnsConfig | Object | No | { } | Object that allows to change the way data is displayed, and the CSS styling, for each column. |
| rowsStyle | Object | No | { } | Object that allows to change the styling of the rows. |


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
This table also shares the props of the base table.

| Prop | Type | Required | Default value | Description |
|--|--|--|--|--|
| tableWrapperClass | String | No | "table-wrapper" | CSS class to be passed onto the <div\> tag that wraps the table. |
| keepPage | Bool | No | false | Determines if the table should show the page one on data change, or if it should try to keep the current page. |
| controls | element or element[ ] | No | null | React component (children) to be pased down to the header of the table (top-left). Usefull for adding buttons or filters. |
| updateTable | Function | No | f => f | Callback function fired from the "Reload" button of the table. |


### DataTable
This component works best when the data it's comming from a server (or somewhere else) on parts. It has all the features of the local table with some tweaks thinking of asynchronous data.

Example:
```javascript
import React, { useCallback, useRef } from 'react';
import { DataTable } from '@wafo/table';

const columns = ['Id', 'Name', 'Email'];

const SomeComponent = () => {
  const [rows, setRows] = useState([]);
  const [totalRows, setTotalRows] = useState(0);

  const tableRef = useRef(null);

  const getData = useCallback(({ size, page, search }) => {
    const data = // ... Some logic to get your data (Fetch, etc)
    setRows(data);
  }, []);

  // Forces the table to send the pagination event
  const forceUpdate = () => tableRef.current.forceUpdate();
  
  return (
    <div className="some-class">
      <DataTable
        ref={tableRef}
        locale="en"
        columns={columns}
        rows={rows}
        totalRows={totalRows}
        onPagination={getData}
        controls={
          <div className="test">
            <button type="button" onClick={forceUpdate}>
              Force reload
            </button>
          </div>
        }
      />
    </div>
  );
};
```

#### Props
This table also shares the props of the base table.

| Prop | Type | Required | Default value | Description |
|--|--|--|--|--|
| tableWrapperClass | String | No | "table-wrapper" | CSS class to be passed onto the <div\> tag that wraps the table. |
| controls | element or element[ ] | No | null | React component (children) to be pased down to the header of the table (top-left). Usefull for adding buttons or filters. |
| updateTable | Function | No | f => f | Callback function fired from the "Reload" button of the table. |
| initialPage | Number | No | 1 | The initial page of the table state. This would be the first page to be asked from the server. |
| totalRows | Number | Yes | 0 | this number it's used to calculate the number of pages and create the pagination. |
| onPagination | Function | No | f => f | Callback function. Fired on first load, pagination events, search events and even when pressing the reload button (if updateTable not provided). Passes an object with size, current page and search value. |


### configTable object

**To-do:** This.

### Table example
The blue square above the table it's where the "control" elements get rendered.

![Table Example](https://i.imgur.com/DanDmiX.png)

### Limitations
 - No nested tables.
 - The search only works on the objects before customization.