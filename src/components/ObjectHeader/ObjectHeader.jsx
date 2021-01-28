import React from 'react';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { ProgressIndicator } from '@ui5/webcomponents-react/lib/ProgressIndicator';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import { ObjectStatus } from '@ui5/webcomponents-react/lib/ObjectStatus';
import { useTranslation } from 'react-i18next/';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { Badge } from '@ui5/webcomponents-react/lib/Badge';
import Formatter from '../../util/model/Formatter';

/**
 * Object Status modified with label and locale numbers
 * @private
 * @component
 * @param {props} props the properties values
 * @returns {ui5.webcomponents.react.FlexBox} Label and Object status with flexbox layout
 */
const ObjectNumber = ({ label, displayedValue, stateFormatter, stateValue, icon }) => {
  return (
    <FlexBox>
      {label && (
        <Label wrap={true} showColon={true} style={{ marginRight: '0.5rem' }}>
          {label}
        </Label>
      )}
      <ObjectStatus icon={icon && <Icon name={icon} />} state={stateFormatter ? (stateValue ? stateFormatter(stateValue) : stateFormatter(displayedValue)) : 'None'}>
        {Formatter.localeNumber(displayedValue)}
      </ObjectStatus>
    </FlexBox>
  );
};

/**
 * Country header for an object page
 * @public
 * @component
 * @param {props} data the country data
 * @returns {HTMLElemnt} the header content of an object page
 */
const ObjectHeader = ({ data }) => {
  const { t } = useTranslation();

  const fRecoveredPercentage = (data.recovered * 100) / data.cases;
  const dLastUpdate = new Date(data.updated).toLocaleString();

  return (
    <>
      <FlexBox direction="Column">
        <ObjectNumber icon="doctor" label={t('casesColumnHeader')} displayedValue={data.cases} stateFormatter={Formatter.covidCasesCountries} />
        <ObjectNumber icon="syringe" label={t('recoveredColumnHeader')} displayedValue={data.recovered} stateFormatter={Formatter.covidRecovered} stateValue={fRecoveredPercentage} />
        <ObjectNumber label={t('deceasesColumnHeader')} displayedValue={data.deaths} />
      </FlexBox>
      <FlexBox direction="Column" style={{ width: '30vw' }}>
        <Label>{t('listRecoveredLabel')}</Label>
        <ProgressIndicator value={fRecoveredPercentage} valueState={Formatter.covidRecovered(fRecoveredPercentage)} />
      </FlexBox>
      <FlexBox direction="Column">
        <Label>{t('updatedObjectLabel')}</Label>
        <Badge colorScheme={9}>{dLastUpdate}</Badge>
      </FlexBox>
    </>
  );
};

export default ObjectHeader;
