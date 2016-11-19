import React from 'react';

class DelayedButton extends React.Component{
  constructor(props){
    super()

    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(e){
    e.persist()
    setTimeout(() => this.props.onDelayedClick(e) , this.props.delay)
  }
  render(){
    return(
      <button onClick={this.clickHandler}>Button</button>
    )
  }
}

module.exports = DelayedButton
