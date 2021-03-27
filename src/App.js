import "./App.css";
import Todos from './components/Todos'
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todos/>
      </div>
    );
  }
}

export default App;
