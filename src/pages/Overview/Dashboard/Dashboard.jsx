import React from 'react';
import { Helmet } from 'react-helmet';
//import { useHistory } from 'react-router-dom';
import { spacing } from '@ui5/webcomponents-react-base';
import { useTranslation } from 'react-i18next';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxWrap } from '@ui5/webcomponents-react/lib/FlexBoxWrap';
import { Card } from '@ui5/webcomponents-react/lib/Card';
import ContinetsCard from '../../../components/Cards/ContinentsCard/ContinentsCard';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react';

const Dashboard = () => {
  //const history = useHistory();
  const { t } = useTranslation();

  return (
    <>
      <Helmet title={t('dashboard.helmet.title')} />
      <FlexBox justifyContent={FlexBoxJustifyContent.SpaceAround} style={spacing.sapUiContentPadding} wrap={FlexBoxWrap.Wrap}>
        <ContinetsCard />
        <Card heading="Dashboard2" style={{ width: '200px', height: '500px' }}></Card>
      </FlexBox>
    </>
  );
};

export default Dashboard;
