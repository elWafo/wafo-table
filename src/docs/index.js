import React from "react";
import { render } from "react-dom";
import LocalTableExample from './examples/localTable';
import "./styles.css";

function Demo() {
  return (
    <div>
      <h1>Demo of Table</h1>
      <LocalTableExample />
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
