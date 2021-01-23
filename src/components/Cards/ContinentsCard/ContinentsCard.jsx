import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@ui5/webcomponents-react/lib/Card';
import { Icon } from '@ui5/webcomponents-react';
import ContinetsList from './ContinentsList';
import ContinentsChart from './ContinentsChart';
import Request from '../../../util/api/engine/Request';

const style = {
  countryCard: {
    width: '400px',
    height: '30rem',
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
  const [bLoading, setLoading] = useState(false);
  const [aContinents, setEntitySet] = useState([]);

  const onChangeView = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      changeContent(!bList);
    }, 1000);
  };

  useEffect(() => {
    if (aContinents.length === 0) {
      Request.read('ContinentsSet').then((oResponse) => {
        setEntitySet(oResponse.data);
      });
    }
  }, [aContinents.length, t]);

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
      {bList ? <ContinetsList items={aContinents} loading={bLoading} /> : <ContinentsChart items={aContinents} loading={bLoading} />}
    </Card>
  );
};

export default ContinetsCard;
