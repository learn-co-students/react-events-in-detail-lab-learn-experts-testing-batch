const React = require('react');

export default class DelayedButton extends React.Component {
  constructor() {
    super()
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }
  handleButtonClick(event) {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }
  render() {
    return (
      <button onClick={this.handleButtonClick}>
        Delayed Click!
      </button>
    );
  }
}

DelayedButton.defaultProps = {
  delay: 5000
};

DelayedButton.propTypes = {
  onDelayedClick: React.PropTypes.func,
  delay: React.PropTypes.number,
};

module.exports = DelayedButton;