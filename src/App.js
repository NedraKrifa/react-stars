import React, { Component } from "react";
import Stars from "./components/stars";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>STARS</h1>
        <Stars
          sizeOfStars={5}
          rate={3}
          edit={false}
          onChange={(id) => console.log(id)}
        />
      </div>
    );
  }
}

export default App;
