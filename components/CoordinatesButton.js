import React, {Component} from 'react'

class CoordinatesButton extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Get Coordinates</button>
      </div>
    );
  }
}

module.exports = CoordinatesButton
