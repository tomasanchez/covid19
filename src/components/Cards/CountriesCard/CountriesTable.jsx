import React from 'react';
import { spacing } from '@ui5/webcomponents-react-base';
import { AnalyticalTable } from '@ui5/webcomponents-react/lib/AnalyticalTable';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { FlexBoxWrap } from '@ui5/webcomponents-react/lib/FlexBoxWrap';
import { ObjectStatus } from '@ui5/webcomponents-react/lib/ObjectStatus';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import { useTranslation } from 'react-i18next';
import Formatter from '../../../util/model/Formatter';
import { useHistory } from 'react-router-dom';
import { getUrl } from '../../../util/browser/BrowserProvider';

/**
 * Custom object status to display formatted numbers with semantic colors
 * @public
 * @component
 * @param {number} value the displayed value
 * @param {function} formatter the formatting function
 * @param {string} ttip the tootlip to be displayed
 * @param {number} fvalue the formatting value
 * @returns {ui5.webcomponents.react.FlexBox} a custom object status JSX element
 */
const ObjectNumber = ({ value, formatter, ttip, fvalue }) => {
  return (
    <FlexBox alignItems={FlexBoxAlignItems.Center} wrap={FlexBoxWrap} style={spacing.sapUiContentPadding}>
      <ObjectStatus state={formatter ? (fvalue ? formatter(fvalue) : formatter(value)) : 'None'} tooltip={!value ? ttip : ''}>
        {Formatter.localeNumber(value)}
      </ObjectStatus>
    </FlexBox>
  );
};

/**
 * Creates columns configuration for table
 * @public
 * @function
 * @returns {array} an array of Column properties
 */
const Columns = () => {
  const { t } = useTranslation();
  return [
    {
      Header: t('countryColumnHeader'),
      accessor: 'countryInfo.flag',
      Cell: (cell) => {
        return (
          <FlexBox alignItems={FlexBoxAlignItems.Center} wrap={FlexBoxWrap} style={spacing.sapUiContentPadding}>
            <img alt={t('loadingFlag')} src={cell.value} height="30px" width="45px" />
            <Title level={TitleLevel.H6} style={spacing.sapUiContentPadding}>
              {cell.cell.row.original.country}
            </Title>
          </FlexBox>
        );
      },
    },
    {
      Header: t('casesColumnHeader'),
      accessor: 'cases',
      Cell: (cell) => {
        return <ObjectNumber formatter={Formatter.covidCasesCountries} value={cell.value} />;
      },
    },
    {
      Header: t('recoveredColumnHeader'),
      accessor: 'recovered',
      Cell: (cell) => {
        return <ObjectNumber formatter={Formatter.covidRecovered} fvalue={(cell.value * 100) / cell.cell.row.original.cases} value={cell.value} ttip={t('recoveredTooltip')} />;
      },
    },
    {
      Header: t('deceasesColumnHeader'),
      accessor: 'deaths',
      Cell: (cell) => {
        return <ObjectNumber value={cell.value} />;
      },
    },
  ];
};

/**
 * Code-split of countries table
 * @public
 * @component
 * @param {array} items the data array
 * @returns {ui5.webcomponents.react.FlexBox} an Analytical Tablel inside a FlexBox container
 */
const CountriesTable = ({ items }) => {
  const history = useHistory();

  const onNavTo = (oEvent) => {
    history.push(getUrl('DETAILS', [{ value: oEvent.detail.row.original.country }]));
  };

  return (
    <FlexBox fitContainer={true} wrap={FlexBoxWrap}>
      <AnalyticalTable onRowClick={onNavTo} data={items} columns={Columns()} visibleRows={7} scaleWidthMode="Smart" />
    </FlexBox>
  );
};

export default CountriesTable;
