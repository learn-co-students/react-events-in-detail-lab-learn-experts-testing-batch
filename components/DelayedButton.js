import React, {Component} from 'react'

class DelayedButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.persist();
    setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Delay Button</button>
    );
  }
}

module.exports = DelayedButton
