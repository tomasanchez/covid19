/* eslint-disable no-loop-func */
import { ObjectPageSection } from '@ui5/webcomponents-react';
import { ObjectPage } from '@ui5/webcomponents-react/lib/ObjectPage';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Request from '../../../util/api/engine/Request';

const Details = ({ match }) => {
  const { t } = useTranslation();
  const [oCountry, setEntity] = useState(undefined);
  const sObjectId = match.params.id;

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
        <ObjectPage image={oCountry.countryInfo.flag} title={oCountry.country}>
          <ObjectPageSection aria-label="Goals" id="goals" title="Goals"></ObjectPageSection>
        </ObjectPage>
      )}
    </>
  );
};

export default Details;
