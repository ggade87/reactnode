import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Weather from "./Whether";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather></Weather>
      </header>
    </div>
  );
}

export default App;
