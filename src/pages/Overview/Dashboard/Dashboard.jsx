import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { Card } from '@ui5/webcomponents-react/lib/Card';
import ContinetsCard from '../../../components/Cards/ContinentsCard/ContinentsCard';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import MapView from '../../../components/Cards/Map/Map';

const Dashboard = () => {
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <>
      <Helmet title={t('dashboard.helmet.title')} />
      <FlexBox>
        <ContinetsCard />
        <Card heading="Dashboard2" style={{ width: '200px', height: '500px' }}></Card>
      </FlexBox>
      <MapView />
    </>
  );
};

export default Dashboard;
