import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { List } from '@ui5/webcomponents-react/lib/List';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import { FlexBox, Icon, Title, TitleLevel } from '@ui5/webcomponents-react';
import Request from '../../../util/api/engine/Request';
import Formatter from '../../../util/model/Formatter';

const style = {
  countryCard: {
    width: '20rem',
  },

  continentItem: {
    height: '3.5rem',
  },

  emptySpace: {
    paddingTop: '44px',
  },
};

const ContinentsList = () => {
  const [aContinents, setEntitySet] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    Request.read('ContinentsSet').then((oResponse) => {
      setEntitySet(oResponse.data);
    });
  });

  return (
    <List>
      {aContinents.map((oContinent, iKey) => (
        <StandardListItem
          key={iKey}
          datatype={oContinent}
          description={t('description.population') + oContinent.population}
          style={style.continentItem}
          info={oContinent.todayCases}
          infoState={Formatter.covidCasesContinent(oContinent.todayCases)}
          selected="false"
          data-id={oContinent.continent}
          type="Inactive"
        >
          <FlexBox>
            <Title level={TitleLevel.H4}>{t(oContinent.continent)}</Title>
          </FlexBox>
          <Icon name="group" />
        </StandardListItem>
      ))}
    </List>
  );
};

export default ContinentsList;
