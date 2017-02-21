const React = require('react')

class DelayedButton extends React.Component {
  constructor(props){
    super();

    this.onReceiveCoordinates = props.ReceiveCoordinates;
    this.createArray = this.createArray.bind(this);
  }

  createArray(event) {
  }

  render(){
    return(
      <button onClick={this.CreateArray}>Click Me!</button>
    )
  }
}

module.exports = DelayedButton