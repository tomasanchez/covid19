import { ValueState } from '@ui5/webcomponents-react';

const Formatter = {
  covidCasesContinent: (iCases) => {
    var sValueState = ValueState.None;

    if (iCases >= 50000) {
      sValueState = ValueState.Warning;
      if (iCases >= 150000) sValueState = ValueState.Error;
    } else if (iCases >= 25000) sValueState = ValueState.Information;

    return sValueState;
  },

  covidCasesCountries: (iCases) => {
    var sValueState = ValueState.None;

    if (iCases >= 5000000) {
      sValueState = ValueState.Warning;
      if (iCases >= 10500000) sValueState = ValueState.Error;
    } else if (iCases >= 2500000) sValueState = ValueState.Information;
    else if (iCases <= 500000) sValueState = ValueState.Success;

    return sValueState;
  },

  covidRecovered: (iCases) => {
    var sValueState = ValueState.None;

    if (iCases >= 55) {
      sValueState = ValueState.Warning;
      if (iCases >= 70) {
        sValueState = ValueState.Information;
        if (iCases >= 90) sValueState = ValueState.Success;
      }
    } else if (iCases <= 45) sValueState = ValueState.Error;

    return sValueState;
  },
};

export default Formatter;
