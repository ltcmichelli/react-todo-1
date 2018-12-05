import React, { Component } from 'react'
import TodosContainer from '../container/TodosContainer'
import TodoInputContainer from '../container/TodoInputContainer.js';

export default class TodoList extends Component {
  
  render() {
    const {dummy} = this.props.getInitData
    return (
      <div>
        <TodoInputContainer/>
        <TodosContainer/>
      </div>
    )
  } 
}