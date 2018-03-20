import React from 'react';
import ReactDOM from 'react-dom';
import AutoComplete from 'material-ui/AutoComplete';
import { medidas, medidasDSConfig } from '../helpers/const/constMedidas'

class UnitSelector extends React.Component {
    render() {
        return (
            <AutoComplete
                floatingLabelText="Seleccionar unidad"
                dataSource={medidas}
                dataSourceConfig={medidasDSConfig}
                filter={AutoComplete.caseInsensitiveFilter}
                onUpdateInput={this.props.handleFunction}
                openOnFocus={true}
            />
        )
    };

};

export default UnitSelector;
