import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './../../components/header';
import UnitSelector from './../../components/autocomplete';
import NumberSelector from './../../components/slider';
import ListConvertedUnits from './../../components/list';
import { tableEqUnits, units } from './../../helpers/const/constUnits';

class Conversor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            unitSelected: "",
            numberSelected: 0,
            unitsValue: {},
            currentUnits: units
        };
    }

    handleUnitSelected = (value, dataSource, handler) => {
        if (handler.source == "click") {
            let index = dataSource.find(val => val.label == value).code;
            this.setState({ unitSelected: index }, function () {
                this.updateUnits();
            });
        }
    }

    handleNumberSelected = (event, value) => {
        this.setState({ numberSelected: value });
        if (this.state.unitSelected != "")
            this.updateUnits();
    }

    updateUnits = () => {
        var updatedUnits = this.state.currentUnits;
        let tableEqCurrent = tableEqUnits[this.state.unitSelected];
        updatedUnits.map(unit => {
            unit.value = (this.state.numberSelected * tableEqCurrent.find(item => item.item_code == unit.code).value).toFixed(2);
        });
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <Header />
                        <UnitSelector handleFunction={this.handleUnitSelected} />
                        <NumberSelector numberSelected={this.state.numberSelected} handleFunction={this.handleNumberSelected} />
                        <ListConvertedUnits units={this.state.currentUnits} />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Conversor;