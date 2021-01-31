import React from 'react';
import { AnalyticalCard } from '@ui5/webcomponents-react/lib/AnalyticalCard';
import { AnalyticalCardHeader } from '@ui5/webcomponents-react/lib/AnalyticalCardHeader';
import { LineChart } from '@ui5/webcomponents-react-charts/lib/LineChart';
import { isMobile } from '@ui5/webcomponents-base/dist/Device';
import Formatter from '../../../util/model/Formatter';
import { useTranslation } from 'react-i18next';

/**
 * Convinience function to obtain sap ui state
 * @private
 * @function
 * @param {string} sName the variant name
 * @returns {ui5.webcomponents.react.ValueState} a value state
 */
const obtainState = (sName) => {
  switch (sName) {
    case 'cases':
      return 'Warning';
    case 'deceases':
      return 'Error';
    case 'recovered':
      return 'Success';
    default:
      return 'None';
  }
};

/**
 * Polymorfic component to handle a custom analytical card header
 * @public
 * @component
 * @param {string} name the variant name
 * @param {object}  data the country data obtained
 * @returns {ui5.webcomponents.react.AnalyticalCardHeader} an Analytical Card custom Header
 */
const Header = ({ data, name }) => {
  const { t } = useTranslation();

  const sTitle = name + 'AnalyticalTitle',
    sSubTitle = name + 'AnalyticalSubTitle',
    sUnit = name + 'AnalyticalUnit';

  const sState = obtainState(name);

  return (
    <AnalyticalCardHeader
      title={t(sTitle)}
      subTitle={t(sSubTitle)}
      currency={'Johns Hopkins University'}
      unit={t(sUnit)}
      description={t('analyticalDescription')}
      value={Formatter.localeNumber(data)}
      valueState={sState}
      arrowIndicator="Up"
      indicatorState={sState}
    />
  );
};

/**
 * Polymorfic chart for timeline
 * @private
 * @component
 * @param {array} analytycalData the historical data
 * @returns {ui5.webcomponents.react.LineChart} a line chart
 */
const DataChart = ({ analyticalData, name }) => {
  const sColor = name === 'cases' ? 'var(--sapCriticalTextColor)' : name === 'recovered' ? 'var(--sapPositiveTextColor)' : 'var(--sapNegativeTextColor)';

  return (
    <>
      {analyticalData ? (
        <LineChart
          dataset={analyticalData}
          dimensions={[{ accessor: 'month', interval: isMobile() ? 4 : 1 }]}
          measures={[{ accessor: 'value', formatter: Formatter.localeNumber, hideDataLabel: isMobile(), color: sColor }]}
          noLegend
        />
      ) : (
        <LineChart
          dimensions={[]}
          measures={[]}
          style={{
            width: '100%',
          }}
        />
      )}
    </>
  );
};

/**
 * Polymorfic component to handle a custom analytical card
 * @public
 * @component
 * @param {string} name the variant name
 * @param {object}  data the country data obtained
 * @param {array} analytycalData the historical data
 * @returns {ui5.webcomponents.react.AnalyticalCard} an analytical card
 */
const Historical = ({ name, data, analytycalData }) => {
  return (
    <AnalyticalCard style={{ width: '100vw' }} header={<Header data={data} name={name} />}>
      <DataChart name={name} analyticalData={analytycalData} />
    </AnalyticalCard>
  );
};

export default Historical;
