import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { List } from '@ui5/webcomponents-react/lib/List';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { ListSeparators } from '@ui5/webcomponents-react/lib/ListSeparators';
import { Loader } from '@ui5/webcomponents-react/lib/Loader';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import Formatter from '../../../util/model/Formatter';

/**
 * Inline style object
 * @private
 * @object
 */
const style = {
  countryCard: {
    width: '20rem',
  },

  continentItem: {
    height: '4rem',
  },
};

/**
 * Code-split of card list
 * @public
 * @component
 * @param {array} items the data array
 * @param {boolean} loading the loading state
 * @returns {ui5.webcomponents.react.List} a List of continents
 */
const ContinentsList = ({ items, loading }) => {
  const { t } = useTranslation();

  const [aContinents, setEntitySet] = useState([]);

  useEffect(() => {
    if (aContinents.length === 0) {
      var aResults = items.map((i) => i);
      setEntitySet(aResults);
    }
  }, [aContinents.length, items]);

  return (
    <List separators={ListSeparators.Inner}>
      {loading && <Loader />}
      {aContinents.map((oContinent, iKey) => (
        <StandardListItem
          key={iKey}
          datatype={oContinent}
          description={t('description.population') + oContinent.population}
          style={style.continentItem}
          info={Formatter.localeNumber(oContinent.todayCases)}
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
