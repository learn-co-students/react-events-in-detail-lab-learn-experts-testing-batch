const React = require('react');

class DelayedButton extends React.Component{
  constructor(){
    super();

    this.handleDelayClick = this.handleDelayClick.bind(this);
  }

  handleDelayClick(event){
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay);
  }

  render(){
    return(
      <div>
        <button onClick={this.handleDelayClick}>Delay Button</button>
      </div>
    )
  }
}

module.exports = DelayedButton;
