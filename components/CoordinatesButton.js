const React = require('react');

export default class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }
  handleButtonClick(event) {
    let coords = [event.screenX, event.screenY]
    this.props.onReceiveCoordinates(coords)
  }
  render() {
    return (
      <button onClick={this.handleButtonClick}>
        Get Coordinates!
      </button>
    );
  }
}

CoordinatesButton.defaultProps = {
  
};

CoordinatesButton.propTypes = {
  onReceiveCoordinates: React.PropTypes.func
};

module.exports = CoordinatesButton;