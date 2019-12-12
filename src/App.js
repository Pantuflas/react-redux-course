import React, { Component } from 'react'
import Person from './components/Person'
import AddPersonForm from './components/AddPersonForm'

class App extends Component {
  state = {
    persons: [
      { name: 'Karen', age: '19', pet: 'Michi', id: 1},
      { name: 'Pepe', age: '25', pet: 'Muffin', id: 2},
      { name: 'Anto', age: '11', pet: 'Rafita', id: 3}
    ]
  }

  addPerson = (person) => {
    console.log(person);
    //Adding a random id to the person to add
    person.id = Math.random();
    //Creating a copy of the persons array in state
    let persons = [...this.state.persons, person]
    //Altering the state with the copy, not altering the original array
    this.setState({
      persons: persons
    })
  }

  deletePerson = (id) => {
    let persons = this.state.persons.filter(person => {
      //If person.id is equal to the passed id, returns false and filter out that person
      //If person.id is not equal to the passed id, return true and the person remains in the array
      return person.id !== id 
    });
    this.setState({
      persons: persons
    })
  }

  //Method to show when the component is mounted
  componentDidMount() {
    console.log("component mounted");
  }

  //Method that shows in console everytime the component updates, prints previous props and state
  componentDidUpdate(prevProps, prevState) {
    console.log("components updated");
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>My react app</h1>
        <h3> Welcome! </h3>
        <Person deletePerson={this.deletePerson} persons={this.state.persons}/>
        <AddPersonForm addPerson={this.addPerson} />
      </div>
    );
  }

}

export default App;
