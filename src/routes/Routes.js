import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUrl } from '../util/browser/BrowserProvider';
import i18next from 'i18next';

import { BusyIndicator } from '@ui5/webcomponents-react/lib/BusyIndicator';

const NotFound = lazy(() => import('../pages/Fallback/NotFound'));
const Buggy = lazy(() => import('../pages/Fallback/Buggy'));
const Dashboard = lazy(() => import('../pages/Overview/Dashboard/Dashboard'));
const Details = lazy(() => import('../pages/Overview/Details/Details'));

const Routes = () => {
  let code = [{ value: i18next.language }];
  return (
    <Suspense fallback={<BusyIndicator active />}>
      <Switch>
        <Redirect path={getUrl('HOME')} exact to={{ pathname: getUrl('OVERVIEW'), search: getUrl('LANGUAGE', code) }} />
        <Route path={getUrl('BUGGY')} exact component={Buggy} />
        <Route path={getUrl('OVERVIEW')} exact component={Dashboard} />
        <Route path={getUrl('DETAILS')} exact component={Details} />
        <Route path={getUrl('NOT_FOUND')} exact component={NotFound} />
        <Route path={getUrl('ANY')} component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
