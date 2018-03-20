
import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyan500, white, blueGrey400, blueGrey700, yellowA700 } from 'material-ui/styles/colors';
import { black } from 'material-ui/styles/colors';
import { grey700 } from 'material-ui/styles/colors';

const MyMuiTheme = getMuiTheme({
    palette: {
      primary1Color: blueGrey400,
      primary2Color: cyan500,
      primary3Color: cyan500,
      accent1Color: cyan500,
      accent2Color: cyan500,
      accent3Color: cyan500,
      textColor: cyan500,
      alternateTextColor: white,
      canvasColor: blueGrey700,
      borderColor: yellowA700,
      disabledColor: cyan500,
      pickerHeaderColor: cyan500,
      clockCircleColor: cyan500,
      shadowColor: cyan500,
    },
  });

  export default MyMuiTheme;