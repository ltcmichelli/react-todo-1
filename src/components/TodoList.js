import React, { Component } from 'react'
import TodosContainer from '../container/TodosContainer'
import TodoInputContainer from '../container/TodoInputContainer.js';

export default class TodoList extends Component {
  
  render() {
    return (
      <div>
        <TodoInputContainer/>
        <TodosContainer/>
      </div>
    )
  } 
}