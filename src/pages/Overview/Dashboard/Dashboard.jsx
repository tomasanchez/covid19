import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { Card } from '@ui5/webcomponents-react/lib/Card';
import CountryCard from '../../../components/Cards/CountryCard/CountryCard';
import { Title } from '@ui5/webcomponents-react/lib/Title';

const Dashboard = () => {
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <>
      <Helmet title={t('dashboard.helmet.title')} />
      <FlexBox>
        <CountryCard title="Dashboard1"></CountryCard>
        <Card heading="Dashboard2" style={{ width: '300px' }}></Card>
      </FlexBox>
    </>
  );
};

export default Dashboard;
