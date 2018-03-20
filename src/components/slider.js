import React from 'react';
import Slider from 'material-ui/Slider';

class NumberSelector extends React.Component {
    render() {
        return (
            <Slider
                min={0}
                max={100}
                value={this.props.numberSelected}
                onChange={this.props.handleFunction}
            />
        )

    }
}

export default NumberSelector;