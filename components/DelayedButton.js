import React from 'react'

export default class DelayedButton extends React.Component {
  constructor(props){
    super(props)
    this.persistEvent = this.persistEvent.bind(this)
  }

  persistEvent(e){
    e.persist()
    setTimeout( () => { this.props.onDelayedClick(e) }, this.props.delay)
  }

  render(){
    return <button onClick={this.persistEvent}>Hi</button>
  }
}

module.exports = DelayedButton
