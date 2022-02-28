import React from 'react';
import formatClassName from 'helpers/formatters/format-class-name';
import { ComponentProps } from 'types';
import { Icon } from 'enums';
import { settingsSelectors } from 'store/settings/selectors';
import { useAppSelector } from 'store/hooks';

import './styles.scss';

export type ButtonProps = ComponentProps & {
  title: string;
  icon?: Icon;
  text?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  sound?: HTMLAudioElement;
};

function Button(props: ButtonProps): React.ReactElement {
  const { type, text, className, onClick, icon, title, sound } = props;
  const isDarkMode = useAppSelector(settingsSelectors.getIsDarkMode);
  const isSoundEnabled = useAppSelector(settingsSelectors.getIsSoundsEnabled);
  const buttonClassNames = formatClassName(['button', className, { button_dark: isDarkMode }]);
  const shadowClassNames = formatClassName(['button__shadow', { button__shadow_dark: isDarkMode }]);
  const edgeClassNames = formatClassName(['button__edge', { button__edge_dark: isDarkMode }]);
  const frontClassNames = formatClassName(['button__front', icon, { button__front_dark: isDarkMode }]);

  const onButtonClick = () => {
    if (sound && isSoundEnabled) {
      sound.play();
    }
    if (onClick) onClick();
  };

  return (
    <button type={type || 'button'} title={title} className={buttonClassNames} onClick={onButtonClick} id={props.id}>
      <span className={shadowClassNames}></span>
      <span className={edgeClassNames}></span>
      <span className={frontClassNames}>{text}</span>
    </button>
  );
}

export default Button;
