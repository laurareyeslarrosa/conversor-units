import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './../../components/header';
import UnitSelector from './../../components/autocomplete';
import { equivalenciaMedidas } from './../../helpers/const/constMedidas';

class Conversor extends React.Component {
    handleUnitSelected = (value, dataSource, handler) => {
        console.log(value);
        console.log(dataSource);
        console.log(handler);
        if (handler.source == "click") {
            let index = dataSource.find(val => val.label == value).value;
            console.log(index);

        }
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <Header />
                        <UnitSelector handleFunction={this.handleUnitSelected} />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Conversor;

