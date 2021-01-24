import React from 'react';
import { spacing } from '@ui5/webcomponents-react-base';
import { AnalyticalTable, FlexBox, FlexBoxAlignItems, FlexBoxJustifyContent, FlexBoxWrap, ObjectStatus, Text, Title, TitleLevel } from '@ui5/webcomponents-react';
import { useTranslation } from 'react-i18next';
import Formatter from '../../../util/model/Formatter';

const style = {};

const ObjectNumber = ({ value, formatter, ttip, fvalue }) => {
  return (
    <FlexBox alignItems={FlexBoxAlignItems.Center} wrap={FlexBoxWrap} style={spacing.sapUiContentPadding}>
      <ObjectStatus state={formatter ? (fvalue ? formatter(fvalue) : formatter(value)) : 'None'} tooltip={!value ? ttip : ''}>
        {Formatter.localeNumber(value)}
      </ObjectStatus>
    </FlexBox>
  );
};

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

const CountriesTable = ({ items }) => {
  return (
    <FlexBox fitContainer={true} wrap={FlexBoxWrap} visibleRows={7}>
      <AnalyticalTable data={items} columns={Columns()} scaleWidthMode="Smart" />
    </FlexBox>
  );
};

export default CountriesTable;
