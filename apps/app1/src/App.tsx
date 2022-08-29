import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ButtonComponent from "./ButtonComponent";
import CounterComponent from "./CounterComponent";

const App = () => (
  <div className="container">
    <div>Name: app1</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <ButtonComponent onClick={() => console.log("Clicked")}>Hest</ButtonComponent>
    <CounterComponent />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
