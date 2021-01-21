import React, { useEffect, useState } from 'react';
import { PieChart } from '@ui5/webcomponents-react-charts';
import { useTranslation } from 'react-i18next';

const ContinentsChart = (items) => {
  const [aContinents, setEntitySet] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    if (aContinents.length === 0) {
      var aResults = items.items.map((i) => i);
      aResults.sort((oContinentA, oContinentB) => oContinentB.cases - oContinentA.cases);
      setEntitySet(aResults);
    }
  });

  return (
    <PieChart
      chartConfig={{
        innerRadius: '0%',
        outerRadius: '80%',
        activeSegment: 0,
        showActiveSegmentDataLabel: true,
      }}
      dataset={aContinents}
      dimension={{
        accessor: 'continent',
      }}
      measure={{
        accessor: 'cases',
      }}
      style={{
        width: '100%',
      }}
      noAnimation={false}
    />
  );
};

export default ContinentsChart;
