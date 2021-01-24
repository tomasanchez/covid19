import { StandardListItem, List, FlexBox, Title, TitleLevel, ProgressIndicator, FlexBoxWrap, Label, FlexBoxDirection, ListSeparators } from '@ui5/webcomponents-react';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import Formatter from '../../../util/model/Formatter';

const style = {
  listItem: {
    height: '4rem',
  },
  list: { height: '20rem' },
};

const CountriesList = ({ items }) => {
  const { t } = useTranslation();

  const [aCountries, setEntitySet] = useState([]);

  useEffect(() => {
    if (aCountries.length === 0) {
      var aResults = items.map((self) => self);
      setEntitySet(aResults);
    }
  }, [aCountries.length, items]);

  return (
    <List style={style.list} separators={ListSeparators.Inner}>
      {aCountries.map((oCountry) => (
        <StandardListItem
          style={style.listItem}
          key={oCountry.countryInfo.iso2}
          info={Formatter.localeNumber(oCountry.cases)}
          infoState={Formatter.covidCasesCountries(oCountry.cases)}
          image={oCountry.countryInfo.flag}
        >
          <FlexBox wrap={FlexBoxWrap} direction={FlexBoxDirection.Column}>
            <Title level={TitleLevel.H4}>{oCountry.country}</Title>
            <ProgressIndicator value={(oCountry.recovered / oCountry.cases) * 100} valueState={Formatter.covidRecovered((oCountry.recovered / oCountry.cases) * 100)} />
            <Label>{t('listRecoveredLabel')}</Label>
          </FlexBox>
        </StandardListItem>
      ))}
    </List>
  );
};

export default CountriesList;
