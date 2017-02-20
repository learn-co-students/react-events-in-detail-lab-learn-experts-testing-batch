const React = require('react');

class DelayedButton extends React.Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.persist();
        setTimeout(() => {
            this.props.onDelayedClick(e);
        }, this.props.delay)
    }

    render() {
        return (
            <button onClick={this.handleClick}>DelayedButton</button>
        )
    }
}

module.exports = DelayedButton;
