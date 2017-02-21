const React = require('react')

class CoordinatesButton extends React.Component {
  constructor(props){
    super();

    this.onReceiveCoordinates = props.ReceiveCoordinates;
    this.createArray = this.createArray.bind(this);
  }

  createArray(event) {
    var x = event.clientX;
    var y = event.clientY;
   onReceiveCoordinates(x,y)
  }

  render(){
    return(
      <button onClick={this.CreateArray}>Click Me!</button>
    )
  }
}

module.exports = CoordinatesButton