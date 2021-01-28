/* eslint-disable no-loop-func */
import { ObjectPageSection } from '@ui5/webcomponents-react';
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
 *
 * @public
 * @component
 * @param {props} match.params.id the supposed country name
 * @returns {ui5.webcomponents.react.ObjectPage} the details object page
 */
const Details = ({ match }) => {
  const { t } = useTranslation();
  const [oCountry, setEntity] = useState(undefined);
  const sObjectId = match.params.id;
  const sContinent = isCountry(sObjectId);

  const history = useHistory();

  if (!sContinent) {
    history.push(getUrl('NOT_FOUND'));
  }

  useEffect(() => {
    if (!oCountry) {
      var sPath = Request.createKey('CountriesSet', sObjectId);
      Request.readSingle(sPath).then((oResponse) => {
        setEntity(oResponse.data);
      });
    }
  }, [oCountry, sObjectId]);

  const sTile = t('helmet.title.details') + sObjectId;

  return (
    <>
      <Helmet title={sTile} />
      {oCountry && (
        <ObjectPage breadcrumbs={<PageBreadcrumbs sCountry={oCountry.country} sHome={t('homeBreadCrum')} />} image={oCountry.countryInfo.flag} title={oCountry.country} subTitle={sContinent}>
          <ObjectPageSection aria-label="Goals" id="goals" title="Goals"></ObjectPageSection>
        </ObjectPage>
      )}
    </>
  );
};

export default Details;
