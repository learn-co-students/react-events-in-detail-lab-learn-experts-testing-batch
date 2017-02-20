const React = require('react');

class CoordinatesButton extends React.Component {
    constructor() {
        super();

        this.buttonHandler = this.buttonHandler.bind(this);
    }

    buttonHandler(event) {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }

    render() {
        return (
            <button onClick={this.buttonHandler}>Click me</button>
        )
    }
}

module.exports = CoordinatesButton;
