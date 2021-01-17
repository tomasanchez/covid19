import React, { useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { ShellBar } from '@ui5/webcomponents-react/lib/ShellBar';
import { Avatar } from '@ui5/webcomponents-react/lib/Avatar';
import { AvatarShape } from '@ui5/webcomponents-react/lib/AvatarShape';
import { AvatarSize } from '@ui5/webcomponents-react/lib/AvatarSize';
import { getUrl } from '../../util/browser/BrowserProvider';
import PopoverListItems from '../Popover/List/PopoverListItems';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import { Icon } from '@ui5/webcomponents-react';

const style = {
  shell: {
    position: 'fixed',
    width: '100%',
    zIndex: 100,
  },
  emptySpace: {
    paddingTop: '44px',
  },
};

const Shell = ({ title, ...props }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const popoverConfigItemsRef = useRef(null);
  const popoverItems = useMemo(
    () => [
      {
        description: t('shell.button.user.settings.item.languageSwitch'),
        icon: 'user-settings',
        children: <LanguageSwitch />,
      },
      {
        description: t('shell.button.user.settings.item.themeSwitch'),
        icon: 'customize',
        children: <ThemeSwitch />,
      },
    ],
    [t],
  );

  return (
    <>
      <ShellBar
        data-testid="shell-wrapper"
        primaryTitle={title}
        style={style.shell}
        logo={<Icon name="overview-chart" tooltip={t('logo.tooltip')} showTooltip="true" style={{ color: '#842A2A', fontWeight: 'bold' }} />}
        onLogoClick={() => history.push(getUrl('HOME'))}
        profile={<Avatar icon="settings" shape={AvatarShape.Circle} size={AvatarSize.S} />}
        onProfileClick={(e) => popoverConfigItemsRef.current.openBy(e.detail.targetRef)}
        {...props}
      />
      <div data-testid="emptySpace-wrapper" style={style.emptySpace} />
      <PopoverListItems popoverRef={popoverConfigItemsRef} title={t('shell.button.user.settings')} items={popoverItems} />
    </>
  );
};

export default Shell;
