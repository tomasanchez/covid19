/* eslint-disable no-loop-func */
import { ObjectPageSection } from '@ui5/webcomponents-react/lib/ObjectPageSection';
import { Breadcrumbs } from '@ui5/webcomponents-react/lib/Breadcrumbs';
import { Link } from '@ui5/webcomponents-react/lib/Link';
import { ObjectPage } from '@ui5/webcomponents-react/lib/ObjectPage';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import Request from '../../../util/api/engine/Request';
import isCountry from '../../../util/api/engine/CountryValidator';
import { getUrl } from '../../../util/browser/BrowserProvider';
import ObjectHeader from '../../../components/ObjectHeader/ObjectHeader';
import AnalyticalSection from '../../../components/Sections/AnalyticalSections/AnalyticalSection';
import DataSection from '../../../components/Sections/DataSection';
import createHistoricalData from '../../../util/api/engine/TimeLineHandler';

/**
 * Breadcrumbs functional component method.
 * @private
 * @component
 * @param {string} sCountry the country name to be displayed
 * @param {string} sHome the home text to be displayed
 * @returns {ui5.webcomponents.react.Breadcrumbs} UI5 Breadcrumbs
 */
const PageBreadcrumbs = ({ sCountry, sHome }) => {
  const history = useHistory();

  const onNavHome = (oEvent) => {
    history.push(getUrl('HOME'));
  };

  return (
    <Breadcrumbs currentLocationText={sCountry}>
      <Link onClick={onNavHome}>{sHome}</Link>
    </Breadcrumbs>
  );
};

/**
 * Country object page
 * @public
 * @component
 * @param {props} match.params.id the supposed country name
 * @returns {ui5.webcomponents.react.ObjectPage} the details object page
 */
const Details = ({ match }) => {
  const { t } = useTranslation();
  const [oCountry, setEntity] = useState(undefined);
  const [oHistorical, setHistorical] = useState(undefined);
  const sObjectId = match.params.id;
  const sContinent = isCountry(sObjectId);

  const history = useHistory();

  if (!sContinent) {
    history.push(getUrl('NOT_FOUND'));
  }

  useEffect(() => {
    if (!oCountry) {
      var sPath = Request.createKey('CountriesSet', sObjectId, 'yesterday');
      Request.readSingle(sPath).then((oResponse) => {
        setEntity(oResponse.data);
      });

      var sHistoricalPath = Request.createKey('HistoricalSet', sObjectId, 'lastDays');
      Request.readSingle(sHistoricalPath).then((oResponse) => {
        createHistoricalData(oResponse.data).then((oHistoricalData) => setHistorical(oHistoricalData));
      });
    }
  }, [oCountry, sObjectId]);

  const sTile = t('helmet.title.details') + sObjectId;

  return (
    <>
      <Helmet title={sTile} />
      {oCountry && (
        <ObjectPage
          breadcrumbs={<PageBreadcrumbs sCountry={oCountry.country} sHome={t('homeBreadCrum')} />}
          image={oCountry.countryInfo.flag}
          headerContent={<ObjectHeader data={oCountry} />}
          title={oCountry.country}
          subTitle={t(sContinent)}
          selectedSectionId="dataSection"
          style={{ height: '100vh' }}
        >
          <ObjectPageSection aria-label={t('countryData')} id="dataSection" title={t('countryData')}>
            <DataSection data={oCountry} />
          </ObjectPageSection>

          <ObjectPageSection aria-label={t('historicalCases')} id="historicalCases" title={t('historicalCases')}>
            <AnalyticalSection name="cases" data={oCountry.todayCases} analyticalData={oHistorical && oHistorical.cases} />
          </ObjectPageSection>

          <ObjectPageSection aria-label={t('historicalRecovered')} id="historicalRecovered" title={t('historicalRecovered')}>
            <AnalyticalSection name="recovered" data={oCountry.todayRecovered} analyticalData={oHistorical && oHistorical.recovered} />
          </ObjectPageSection>

          <ObjectPageSection aria-label={t('historicalDeceases')} id="historicalDeceases" title={t('historicalDeceases')}>
            <AnalyticalSection name="deceases" data={oCountry.todayDeaths} analyticalData={oHistorical && oHistorical.deaths} />
          </ObjectPageSection>
        </ObjectPage>
      )}
    </>
  );
};

export default Details;
