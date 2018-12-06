import React, { Component } from 'react'

export default class Checkbox extends Component {
  callHandle = () => {
    this.props.handleInputChange()
  }
  render() {
    return (
      <div>
        <input
            name="isGoing"
            type="checkbox"
            checked={this.props.checked}
            onChange={this.callHandle} />
        Show completed
      </div>
    )
  }
}
