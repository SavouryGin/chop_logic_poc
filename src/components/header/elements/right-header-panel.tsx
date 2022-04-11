import React, { useCallback, useEffect } from 'react';
import Button from 'components/button';
import ModalWindow from 'components/modal-window';
import AppSettings from 'components/app-settings';
import { ButtonID, Icon } from 'enums';
import { useAppDispatch, useAppSelector } from 'hooks';
import { settingsSelectors } from 'store/settings/selectors';
import { settingsActions } from 'store/settings/slice';
import { soundPlayer } from 'helpers/sounds';
import { uiElementTexts } from 'assets/texts';

function RightHeaderPanel(): React.ReactElement {
  const dispatch = useAppDispatch();
  const isSidebarOpened = useAppSelector(settingsSelectors.getIsSidebarOpened);
  const isFullScreen = useAppSelector(settingsSelectors.getIsFullScreen);
  const isSettingOpened = useAppSelector(settingsSelectors.getIsSettingOpened);
  const language = useAppSelector(settingsSelectors.getLanguage);

  // Handlers
  const onClickSidebarButton = () => {
    if (isSidebarOpened) {
      dispatch(settingsActions.toggleFlag('isSidebarAnimationActive'));
      // wait for closing animation
      setTimeout(() => {
        dispatch(settingsActions.toggleFlag('isSidebarOpen'));
        dispatch(settingsActions.toggleFlag('isSidebarAnimationActive'));
      }, 900);
    } else {
      dispatch(settingsActions.toggleFlag('isSidebarOpen'));
    }
  };

  const onClickSettingButton = () => {
    dispatch(settingsActions.toggleFlag('isSettingOpen'));
  };

  const onClickFullScreenButton = () => {
    const isWindowInFullscreen = !!document.fullscreenElement;

    if (isWindowInFullscreen) {
      if (document.fullscreenElement) document.exitFullscreen();
      dispatch(settingsActions.setFullScreenFlag(false));
    } else {
      const body = document.body;
      const requestMethod = body?.requestFullscreen;
      if (requestMethod) requestMethod.call(body);
      dispatch(settingsActions.setFullScreenFlag(true));
    }
  };

  const escapeHandler = useCallback(() => {
    const isWindowInFullscreen = !!document.fullscreenElement;
    dispatch(settingsActions.setFullScreenFlag(isWindowInFullscreen));
  }, []);

  useEffect(() => {
    document.addEventListener('fullscreenchange', escapeHandler, false);
    return () => {
      document.removeEventListener('fullscreenchange', escapeHandler, false);
    };
  }, []);

  return (
    <>
      <Button buttonId={ButtonID.Settings} onClick={onClickSettingButton} icon={Icon.Settings} sound={soundPlayer.slideClick} />
      <Button
        buttonId={ButtonID.FullScreen}
        onClick={onClickFullScreenButton}
        icon={isFullScreen ? Icon.Shrink : Icon.Enlarge}
        sound={soundPlayer.keyboard}
      />
      <Button
        buttonId={ButtonID.Tools}
        onClick={onClickSidebarButton}
        icon={isSidebarOpened ? Icon.Right : Icon.Sidebar}
        sound={soundPlayer.keyboard}
      />
      <ModalWindow
        isOpened={isSettingOpened}
        onClose={onClickSettingButton}
        title={uiElementTexts.settings[language]}
        content={<AppSettings />}
      />
    </>
  );
}

export default RightHeaderPanel;