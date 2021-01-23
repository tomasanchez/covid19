import React from 'react';
import { Helmet } from 'react-helmet';
//import { useHistory } from 'react-router-dom';
import { spacing } from '@ui5/webcomponents-react-base';
import { useTranslation } from 'react-i18next';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxWrap } from '@ui5/webcomponents-react/lib/FlexBoxWrap';
import ContinetsCard from '../../../components/Cards/ContinentsCard/ContinentsCard';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react';
import CountriesCard from '../../../components/Cards/CountriesCard/CountriesCard';

const Dashboard = () => {
  //const history = useHistory();
  const { t } = useTranslation();

  return (
    <>
      <Helmet title={t('dashboard.helmet.title')} />
      <FlexBox justifyContent={FlexBoxJustifyContent.SpaceAround} style={spacing.sapUiContentPadding} wrap={FlexBoxWrap.Wrap}>
        <ContinetsCard />
        <CountriesCard />
      </FlexBox>
    </>
  );
};

export default Dashboard;
