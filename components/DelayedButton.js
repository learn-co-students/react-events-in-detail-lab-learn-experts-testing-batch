import React from 'react';

class DelayedButton extends React.Component {
  constructor() {
    super();
 
    this.delayClicker = this.delayClicker.bind(this);
  }

  delayClicker(event){
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render(){
    return (
      <button onClick={this.delayClicker}>Delay Button</button>
    )
  }
}

module.exports = DelayedButton;