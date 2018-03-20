import React from 'react';
import ReactDOM from 'react-dom';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { transparent, pink200, white } from 'material-ui/styles/colors';

class ListConvertedUnits extends React.Component {
    render() {
        return (
            <List>
                {this.props.units.map((unit) =>
                    <ListItem primaryText={unit.label + ": " + unit.value}
                        key={unit.code}
                        leftAvatar={
                            <Avatar color={white} backgroundColor={pink200}>{unit.code}</Avatar>
                        }></ListItem>)}
            </List>
        )
    }
}

export default ListConvertedUnits;

