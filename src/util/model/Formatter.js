import { ValueState } from '@ui5/webcomponents-react';

const Formatter = {
  covidCasesContinent: (iCases) => {
    var sValueState = ValueState.None;

    if (iCases >= 95000) {
      sValueState = ValueState.Warning;
      if (iCases >= 200000) sValueState = ValueState.Error;
    } else if (iCases >= 50000) sValueState = ValueState.Information;

    return sValueState;
  },
};

export default Formatter;
