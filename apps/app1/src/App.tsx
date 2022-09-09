import { Button } from "@packages/design-system/dist/components/Button";
import { Counter } from "@packages/shared-business-functionality";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: app1</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Button onClick={() => console.log("Clicked")}>Hesti McHestFace</Button>
    <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
