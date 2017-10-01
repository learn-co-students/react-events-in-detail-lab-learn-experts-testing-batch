import React from 'react'

export default class CoordinatesButton extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  // When the button is clicked, create an array with two elements: the X and Y coordinates of the mouse. Find these using the event data.
  handleClick(e){
    return this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render(){
    return <button onClick={this.handleClick}>Hi</button>
  }
}

module.exports = CoordinatesButton
