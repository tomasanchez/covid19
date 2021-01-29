import React from 'react';
import { Form } from '@ui5/webcomponents-react/lib/Form';
import { FormItem } from '@ui5/webcomponents-react/lib/FormItem';
import { ObjectStatus } from '@ui5/webcomponents-react/lib/ObjectStatus';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { useTranslation } from 'react-i18next/';
import Formatter from '../../util/model/Formatter';

const DataSection = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Form title={t('countryData')} columnsL={4} columnsS={2} columnsM={2} columnsXL={3} labelSpanL={6} labelSpanM={6} labelSpanXL={6}>
      <FormItem label={t('populationLabel')}>
        <ObjectStatus icon={<Icon name="group" />} state="Information">
          {Formatter.localeNumber(data.population)}
        </ObjectStatus>
      </FormItem>
      <FormItem label={t('activeCases')}>
        <ObjectStatus icon={<Icon name="nurse" />}>{Formatter.localeNumber(data.active)}</ObjectStatus>
      </FormItem>
      <FormItem label={t('criticalCases')}>
        <ObjectStatus showDefaultIcon={true} state="Warning">
          {Formatter.localeNumber(data.critical)}
        </ObjectStatus>
      </FormItem>
      <FormItem label={t('testLabel')}>
        <ObjectStatus icon={<Icon name="lab" />} state="Success">
          {Formatter.localeNumber(data.tests)}
        </ObjectStatus>
      </FormItem>
    </Form>
  );
};

export default DataSection;
