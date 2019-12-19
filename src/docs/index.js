import React from "react";
import { render } from "react-dom";
// import ExampleLocalTable from './examples/example_localTable';
import ExampleDataTable from './examples/example_dataTable';
import "../lib/styles.css";
import "./styles.css";

function Demo() {
  return (
    <div>
      <h1>Demo of Table</h1>
      <ExampleDataTable />
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
