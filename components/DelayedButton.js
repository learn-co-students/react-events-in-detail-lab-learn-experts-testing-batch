import React from 'react'

class DelayedButton extends React.Component{
  constructor(){
    super();
    this.handleDelayClick = this.handleDelayClick.bind(this)
  }

  handleDelayClick(event){
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay);
  }

  render(){
    return(
      <button onClick={this.handleDelayClick}></button>
    )
  }
}
module.exports = DelayedButton;
