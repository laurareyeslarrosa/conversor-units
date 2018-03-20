import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { blueGrey400, white } from 'material-ui/styles/colors';

class ListConvertedUnits extends React.Component {
    render() {
        return (
            <List>
                {this.props.units.map((unit) =>
                    <ListItem primaryText={unit.label + ": " + unit.value}
                        key={unit.code}
                        leftAvatar={
                            <Avatar color={white} backgroundColor={blueGrey400}>{unit.code}</Avatar>
                        }></ListItem>)}
            </List>
        )
    }
}

export default ListConvertedUnits;

