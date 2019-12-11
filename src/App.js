import React, { Component } from 'react';
import Person from './components/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Karen', age: '19', pet: 'Michi', id: 1},
      { name: 'Pepe', age: '25', pet: 'Muffin', id: 2},
      { name: 'Anto', age: '1', id: 3}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My react app</h1>
        <h3> Welcome! </h3>
        <Person persons={this.state.persons}/>
      </div>
    );
  }

}

export default App;
