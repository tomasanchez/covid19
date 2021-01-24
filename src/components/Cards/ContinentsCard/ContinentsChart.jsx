import React, { useEffect, useState } from 'react';
import { PieChart } from '@ui5/webcomponents-react-charts';
import { useTranslation } from 'react-i18next';
import Formatter from '../../../util/model/Formatter';

const ContinentsChart = ({ items, loading }) => {
  const [aContinents, setEntitySet] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    if (aContinents.length === 0) {
      var aResults = items.map((i) => i);
      aResults.sort((oContinentA, oContinentB) => oContinentB.cases - oContinentA.cases);
      setEntitySet(aResults);
    }
  }, [aContinents.length, items]);

  return (
    <PieChart
      loading={loading}
      chartConfig={{
        innerRadius: '45%',
        outerRadius: '80%',
        activeSegment: 0,
        showActiveSegmentDataLabel: true,
      }}
      dataset={aContinents}
      dimension={{
        accessor: 'continent',
        formatter: t,
      }}
      measure={{
        accessor: 'cases',
        formatter: Formatter.localeNumber,
      }}
      style={{
        width: '100%',
      }}
      noAnimation={false}
    />
  );
};

export default ContinentsChart;
