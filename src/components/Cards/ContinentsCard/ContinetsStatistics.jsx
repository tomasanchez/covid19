import React, { useEffect, useState } from 'react';
import { ColumnChart, PieChart } from '@ui5/webcomponents-react-charts';
import { useTranslation } from 'react-i18next';
import Formatter from '../../../util/model/Formatter';

const ContinetsStatistics = ({ items }) => {
  const [aContinents, setEntitySet] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    if (aContinents.length === 0) {
      var aResults = items.map((i) => i);
      setEntitySet(aResults);
    }
  }, [aContinents.length, items]);

  return (
    <ColumnChart
      dataset={aContinents}
      chartConfig={{
        gridHorizontal: true,
        gridStroke: 'var(--sapList_BorderColor)',
        gridVertical: false,
        legendHorizontalAlign: 'left',
        legendPosition: 'bottom',
        resizeDebounce: 250,
        xAxisVisible: true,
        yAxisVisible: false,
        zoomingTool: false,
      }}
      dimensions={[
        {
          accessor: 'continent',
          formatter: t,
        },
      ]}
      measures={[
        { accessor: 'activePerOneMillion', formatter: Formatter.localeNumber, label: t('activeChartLabel') },
        { accessor: 'deathsPerOneMillion', formatter: Formatter.localeNumber, label: t('deathsChartLabel') },
        { accessor: 'recoveredPerOneMillion', formatter: Formatter.localeNumber, label: t('recoveredChartLabel') },
      ]}
      style={{
        width: '100%',
      }}
    />
  );
};

export default ContinetsStatistics;
