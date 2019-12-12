import React, { Component } from 'react'
import Todos from './Todos'

class TodoComponent extends Component {
   state = {
       todos: [
           {id: 1, content: 'Pasear a lus perrus'},
           {id: 2, content: 'Visitar a Karen'}
       ]
   }

   deleteTodo = (id) => {
       console.log(id);
       const todosCopy = this.state.todos.filter(todo => {
           // If id is equal returns false, when returned false the matched id is filter from the array (deleted)
           return todo.id !== id
       });
       this.setState({
           todos: todosCopy
       })
   }


    render() {
        return (
            <div className="container">
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
            </div>
        );
    }
}

export default TodoComponent;