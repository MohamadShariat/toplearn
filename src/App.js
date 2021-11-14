import { Component } from "react";

import Person from "./components/Person";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [
        { firstname: "Mohammad", lastname: "Shariat", age: "35" },
        { firstname: "Amir", lastname: "Shariat", age: "34" },
        { firstname: "Ali", lastname: "Shariat", age: "30" },
        { firstname: "Mostafa", lastname: "Shariat", age: "24" },
        { firstname: "Mehrad", lastname: "Shariat", age: "10" },
      ],
    };
  }
  render() {
    const { persons } = this.state;
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <hr />
        {persons.map((person) => (
          <Person
            firstname={person.firstname}
            lastname={person.lastname}
            age={person.age}
          />
        ))}
      </div>
    );
  }
}

export default App;
