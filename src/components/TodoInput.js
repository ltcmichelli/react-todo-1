import React, { Component } from 'react'
export default class TodoInput extends Component {

  onAdded = () => {
    const {input} = this.refs
    console.log("Props");
    console.log(this.props);
    this.props.addNewTodo(input.value)
    input.value = ''
  }
  

  render() {
    return (
      <div>
        <input ref="input"/>
        <button onClick={this.onAdded}>add</button>
      </div>
    )
  }
}

