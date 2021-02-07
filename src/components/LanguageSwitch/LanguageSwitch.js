import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Option } from '@ui5/webcomponents-react/lib/Option';
import { Select } from '@ui5/webcomponents-react/lib/Select';
import i18n, { getSupportedLanguageResources } from '../../util/i18n';
import { useHistory } from 'react-router-dom';

const style = {
  select: {
    width: '100%',
  },
};

const LanguageSwitch = () => {
  const { t } = useTranslation();

  let history = useHistory();

  const onChange = useCallback(
    (event) => {
      i18n.changeLanguage(event.detail.selectedOption.dataset.code);
      history.replace({
        search: `?sap-ui-language=${event.detail.selectedOption.dataset.code}`,
      });
    },
    [history],
  );

  return (
    <Select onChange={onChange} style={style.select} data-testid="language-switch-wrapper">
      {getSupportedLanguageResources().map((option) => {
        return (
          <Option data-testid="language-switch-option-wrapper" key={option.code} data-code={option.code} selected={option.code === i18n.language}>
            {`${t(option.textKey)} - ${option.code}`}
          </Option>
        );
      })}
    </Select>
  );
};

export default LanguageSwitch;
