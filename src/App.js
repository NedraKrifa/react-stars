import React, { Component } from "react";
import Stars from "./components/stars";
import "./App.css";

export class App extends Component {
  state = {
    varRate: 0,
  };
  render() {
    return (
      <div className="App">
        <h1>STARS</h1>
        <Stars
          rate={3}
          edit={false}
          onChange={(varRate) => this.setState({ varRate })}
          varRate={this.state.varRate}
        />
      </div>
    );
  }
}

export default App;
