const React = require('react')

class CoordinatesButton extends React.Component {
  constructor(props){
    super();

    this.createArray = this.createArray.bind(this);
  }

  createArray(event) {
    var x = event.clientX;
    var y = event.clientY;
    this.props.onReceiveCoordinates([x, y])
  }

  render(){
    return(
      <button onClick={this.CreateArray}>Click Me!</button>
    )
  }
}