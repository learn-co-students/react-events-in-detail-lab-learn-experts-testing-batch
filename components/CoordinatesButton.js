import React from 'react';

class CoordinatesButton extends React.Component{
  constructor(){
    super()

    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(e){
    var coordinates = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(coordinates)
  }
  render(){
    return(
      <button onClick={this.clickHandler}>Button</button>
    )
  }
}

module.exports = CoordinatesButton
