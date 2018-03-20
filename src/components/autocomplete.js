import React from 'react';
import ReactDOM from 'react-dom';
import AutoComplete from 'material-ui/AutoComplete';
import { units, unitsDSConfig } from '../helpers/const/constUnits'

class UnitSelector extends React.Component {
    render() {
        return (
            <AutoComplete
                floatingLabelText="Seleccionar unidad"
                fullWidth={true}
                dataSource={units}
                dataSourceConfig={unitsDSConfig}
                filter={AutoComplete.caseInsensitiveFilter}
                onUpdateInput={this.props.handleFunction}
                openOnFocus={true}
            />
        )
    };

};

export default UnitSelector;
