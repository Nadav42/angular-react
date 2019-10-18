import * as React from 'react';

class Button extends React.Component {

    props: any;
    state = { clicks: this.props.startingValue };

    handleClick = (e) => {
        const clicks = this.state.clicks;
        this.setState({ clicks: clicks + 1 })

        this.props.clickCallback(clicks + 1); // let angular know there was a click
    }

    render() {
        return (
            <button onClick={this.handleClick}>{this.props.text}{this.state.clicks}</button>
        );
    }
}

export default Button;