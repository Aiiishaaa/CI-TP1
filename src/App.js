import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org/"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  let [count, setCount] = useState(0);
  const clickOnMe = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={clickOnMe}>Click me</button>
      <span data-testid="count">{count}</span>
    </div>
  );
}

export default App;