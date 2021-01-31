import React from 'react';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { AnalyticalCard } from '@ui5/webcomponents-react/lib/AnalyticalCard';
import { AnalyticalCardHeader } from '@ui5/webcomponents-react/lib/AnalyticalCardHeader';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { useTranslation } from 'react-i18next/';
import Formatter from '../../../util/model/Formatter';

const style = {
  KPIstyles: {
    height: '6.5rem',
    width: '15rem',
    marginBottom: '1rem',
  },
};

const KPI = ({ title, value, unit, valueState, arrow, subtitle }) => {
  const { t } = useTranslation();

  return (
    <AnalyticalCard
      header={
        <AnalyticalCardHeader
          arrowIndicator={arrow ? arrow : 'Up'}
          subTitle={t(subtitle)}
          counter={t('counterKPI')}
          indicatorState={valueState ? valueState : ValueState.None}
          title={t(title)}
          unit={t(unit)}
          value={Formatter.localeNumber(value)}
          valueState={valueState ? valueState : ValueState.None}
        />
      }
      style={style.KPIstyles}
    />
  );
};

const ContinentsKPIs = ({ items }) => {
  const iCases = items ? items.reduce((acc, oItem) => acc + oItem.todayCases, 0) : 0;
  const iRecovered = items ? items.reduce((acc, oItem) => acc + oItem.todayRecovered, 0) : 0;
  const iDeaths = items ? items.reduce((acc, oItem) => acc + oItem.todayDeaths, 0) : 0;
  const iCritical = items ? parseFloat(items.reduce((acc, oItem) => acc + oItem.criticalPerOneMillion, 0)).toFixed(2) : 0;

  return (
    <FlexBox direction={FlexBoxDirection.Column}>
      <KPI title="casesKPITitle" unit="casesKPIUnit" value={iCases} />
      <KPI title="criticalKPITitle" unit="casesKPIUnit" value={iCritical} valueState={ValueState.Warning} subtitle="criticalKPISubtitle" />
      <KPI title="recoveredKPITitle" unit="recoveredKPIUnit" value={iRecovered} valueState={ValueState.Success} />
      <KPI title="deathsKPITTitle" unit="deathsKPIUnit" value={iDeaths} valueState={ValueState.Error} />
    </FlexBox>
  );
};

export default ContinentsKPIs;
