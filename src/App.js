import { Component } from "react";

import Person from "./components/Person";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <hr />
        <Person firstname="Mohammad" lastname="Shariat" age="35" />
      </div>
    );
  }
}

export default App;
