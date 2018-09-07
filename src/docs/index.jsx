import React from "react";
import { render } from "react-dom";
import ParentTable from './parentTable';

function Demo() {
  return (
    <div>
      <ParentTable />
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
