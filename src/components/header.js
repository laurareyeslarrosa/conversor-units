import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';

class Header extends React.Component {
    render() {
        return (
            <AppBar
                title="Conversor Unidades"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        )
    };

};

export default Header;