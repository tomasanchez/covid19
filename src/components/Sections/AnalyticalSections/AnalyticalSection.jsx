import React from 'react';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import Historical from '../../Cards/Analytical/Historical';

/**
 * Polymorfic component to fill object page section with a custom style
 * @public
 * @component
 * @param {string} name the variant name
 * @param {object}  data the country data obtained
 * @param {array} analytycalData the historical data
 * @returns {ui5.webcomponents.react.FlexBox} an analytical card inside a flexbox container
 */
const AnalyticalSection = ({ name, data, analyticalData }) => {
  return (
    <FlexBox fitContainer={true} wrap="Wrap" justifyContent="Center">
      <Historical name={name} data={data} analytycalData={analyticalData} />
    </FlexBox>
  );
};

export default AnalyticalSection;
