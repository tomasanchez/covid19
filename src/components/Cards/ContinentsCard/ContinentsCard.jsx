import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@ui5/webcomponents-react/lib/Card';
import { Icon } from '@ui5/webcomponents-react';
import ContinetsList from './ContinentsList';
import ContinentsChart from './ContinentsChart';
import Request from '../../../util/api/engine/Request';

const style = {
  countryCard: {
    width: '40vw',
    height: '62vh',
  },

  continentItem: {
    height: '3,5rem',
  },

  emptySpace: {
    paddingTop: '44px',
  },
};

const ContinetsCard = () => {
  const { t } = useTranslation();

  const [bList, changeContent] = useState(false);
  const [aContinents, setEntitySet] = useState([]);

  const onChangeView = () => {
    changeContent(!bList);
  };

  useEffect(() => {
    if (aContinents.length === 0) {
      Request.read('ContinentsSet').then((oResponse) => {
        oResponse.data.forEach((oContinent) => (oContinent.continent = t(oContinent.continent)));
        setEntitySet(oResponse.data);
      });
    }
  });

  return (
    <Card
      heading={t('continentsCardHeader')}
      avatar={<Icon name="globe" />}
      subheading={bList ? t('continentsCardSubHeaderList') : t('continentsCardSubHeaderChart')}
      style={style.countryCard}
      headerInteractive
      onHeaderClick={onChangeView}
      tooltip={t('continentsCardTol')}
    >
      {bList ? <ContinetsList items={aContinents} /> : <ContinentsChart items={aContinents} />}
    </Card>
  );
};

export default ContinetsCard;
