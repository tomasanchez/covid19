import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@ui5/webcomponents-react/lib/Card';
import Request from '../../../util/api/engine/Request';
import CountriesList from './CountriesList';
import { Icon } from '@ui5/webcomponents-react';

const style = {
  countriesCard: {
    width: '400px',
    height: '25.5rem',
  },
};

const CountriesCard = () => {
  const { t } = useTranslation();
  const [aCountries, setEntitySet] = useState([]);

  useEffect(() => {
    if (aCountries.length === 0) {
      Request.read('TopCountriesPerCasesSet').then((oResponse) => {
        setEntitySet(oResponse.data.slice(0, 5));
      });
    }
  }, [aCountries.length]);

  return (
    <Card heading={t('countriesCardHeader')} style={style.countriesCard} avatar={<Icon name="list" />}>
      <CountriesList items={aCountries} />
    </Card>
  );
};

export default CountriesCard;
