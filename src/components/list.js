import React from 'react';
import ReactDOM from 'react-dom';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {pinkA200, transparent} from 'material-ui/styles/colors';

class ListConvertedUnits extends React.Component {
    render() {
        return (
            <div>
                {this.props.units.map((unit) => <div key={unit.code}>{unit.label}: {unit.value}</div>)}
            </div>
        )
    }
}

export default ListConvertedUnits;

