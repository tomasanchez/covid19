import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@ui5/webcomponents-react/lib/Card';
import Request from '../../../util/api/engine/Request';
import CountriesList from './CountriesList';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import CountriesTable from './CountriesTable';

const style = {
  countriesCard: {
    width: window.innerWidth >= 768 ? '27vw' : '400px',
    height: '25.15rem',
    marginBottom: '1rem',
  },

  allCountriesCard: {
    width: window.innerWidth >= 768 ? '40vw' : '95vw',
    height: '27.35rem',
  },
};

const CountriesCard = () => {
  const { t } = useTranslation();
  const [aCountries, setEntitySet] = useState([]);
  const [aTopCountries, setTopCountries] = useState([]);

  useEffect(() => {
    if (aCountries.length === 0) {
      Request.read('TopCountriesPerCasesSet').then((oResponse) => {
        var aData = oResponse.data.map((i) => i);
        setTopCountries(aData.slice(0, 5));
        setEntitySet(oResponse.data);
      });
    }
  }, [aCountries.length]);

  return (
    <>
      <Card heading={t('countriesCardHeader')} style={style.countriesCard} avatar={<Icon name="list" />}>
        <CountriesList items={aTopCountries} />
      </Card>
      <Card heading={t('allCountriesCardHeader')} style={style.allCountriesCard} avatar={<Icon name="table-view" />}>
        <CountriesTable items={aCountries} />
      </Card>
    </>
  );
};

export default CountriesCard;
