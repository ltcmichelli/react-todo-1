import React, { Component } from 'react'
import TodoInputContainer from '../container/TodoInputContainer.js'
import Todos from './Todos'
import {connect} from "react-redux";

class TodoList extends Component {
  
  render() {
    return (
      <div>
        <TodoInputContainer/>
        <Todos todos={this.props.todos}/>
      </div>
    )
  } 
}
const mapStateToProps = state =>({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList);