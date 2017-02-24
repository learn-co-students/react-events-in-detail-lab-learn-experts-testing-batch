const React = require('react')

class CoordinatesButton extends React.Component{
  constructor(){
    super();
  
    this.buttonClick = this.buttonClick.bind(this)
  }

  buttonClick(e){
    this.props.onReceiveCoordinates([e.screenX , e.screenY])
  }

  render(){
    return(
      <div>
        <button onClick={this.buttonClick}></button>
      </div>
    )
  }
}

module.exports = CoordinatesButton;