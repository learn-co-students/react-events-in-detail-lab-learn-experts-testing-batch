import React from 'react';

class CoordinatesButton extends React.Component {
  constructor() {
    super();
 
    this.getCoords = this.getCoords.bind(this);
  }

  getCoords(event){
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return (
      <button onClick={this.getCoords}>Coordinates Button</button>
    )
  }
}

module.exports = CoordinatesButton;