import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@ui5/webcomponents-react/lib/Card';
import { List } from '@ui5/webcomponents-react/lib/List';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import Axios from 'axios';

const api = Axios.create({ baseURL: `https://disease.sh/v3/covid-19/continents?yesterday=true&twoDaysAgo=false&sort=todayCases` });

const style = {
  countryCard: {
    width: '15rem',
  },

  continentItem: {
    height: '3.5rem',
  },

  emptySpace: {
    paddingTop: '44px',
  },
};

const CountryCard = ({ title }) => {
  const [aContinents, setEntitySet] = useState([]);

  const { t } = useTranslation();

  const handleHeading = () => {
    api.get('/').then((oResponse) => {
      setEntitySet(oResponse.data);
    });
  };

  return (
    <Card heading={t(title)} style={style.countryCard} headerInteractive onHeaderClick={handleHeading}>
      <List>
        {aContinents.map((oContinent, iKey) => (
          <StandardListItem key={iKey} heading={oContinent.continent} description={oContinent.continent} style={style.continentItem}></StandardListItem>
        ))}
      </List>
    </Card>
  );
};

export default CountryCard;
