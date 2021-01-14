import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@ui5/webcomponents-react/lib/Card';
import { FlexBox, Icon, Title, TitleLevel, ValueState } from '@ui5/webcomponents-react';
import ContinetsList from './ContinentsList';

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

const ContinetsCard = () => {
  const { t } = useTranslation();

  const handleHeading = () => {
    console.log('Click');
  };

  return (
    <Card
      heading={t('continentsCardHeader')}
      avatar={<Icon name="world" />}
      subheading={t('continentsCardSubHeader')}
      style={style.countryCard}
      headerInteractive
      onHeaderClick={handleHeading}
      tooltip={t('continentsCardTol')}
    >
      <ContinetsList />
    </Card>
  );
};

export default ContinetsCard;
