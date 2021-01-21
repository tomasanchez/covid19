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

const ContinentsList = (items) => {
  const { t } = useTranslation();

  const [aContinents, setEntitySet] = useState([]);

  useEffect(
    () => {
      if (aContinents.length === 0) {
        debugger;
        setEntitySet(items.items);
      }
    },
    aContinents.length,
    items.items,
  );

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
            <Title level={TitleLevel.H4}>{oContinent.continent}</Title>
          </FlexBox>
          <Icon name="group" />
        </StandardListItem>
      ))}
    </List>
  );
};

export default ContinentsList;
