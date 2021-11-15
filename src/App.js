import { Component } from "react";

import Person from "./components/Person";
import "./App.css";

class App extends Component {

  //* ES7
  state = {
    persons: [
      { firstname: "Mohammad", lastname: "Shariat", age: "35" },
      { firstname: "Amir", lastname: "Shariat", age: "34" },
      { firstname: "Ali", lastname: "Shariat", age: "30" },
      { firstname: "Mostafa", lastname: "Shariat", age: "24" },
      { firstname: "Mehrad", lastname: "Shariat", age: "10" },
    ],
  };

  personchangeHandler = () => {
    this.setState({
      persons: [
        { firstname: "Mo", lastname: "Shariat", age: "35" },
        { firstname: "Am", lastname: "Shariat", age: "34" },
        { firstname: "Al", lastname: "Shariat", age: "30" },
        { firstname: "Mos", lastname: "Shariat", age: "24" },
        { firstname: "Me", lastname: "Shariat", age: "10" },
      ],
    });
  };

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
        <hr />
        <button onClick={this.personchangeHandler}>تغییر بده</button>
      </div>
    );
  }
}

export default App;
