import React from "react";
import { render } from "react-dom";

import LocalTableExample from './examples/localTable/localTable';
// import SortTable from './examples/sortTable/sortTable';
// import Tabla from './tabla';

function Demo() {
  return (
    <div>
      <LocalTableExample />
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
