import React from "react";
import { render } from "react-dom";

// import LocalTableExample from './examples/localTable/localTable';
// import SortTableExample from './examples/sortTable/sortTable';
import DataTableExample from './examples/dataTable/dataTable';
// import Tabla from './tabla';

function Demo() {
  return (
    <div>
      <DataTableExample />
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
