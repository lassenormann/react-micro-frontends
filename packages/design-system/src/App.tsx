import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: design-system</div>
    <Button onClick={() => console.log("Clicked")}>Hest</Button>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
