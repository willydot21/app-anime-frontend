
import './style.css';
import icon from './media/icon.jpg';
import React, { useState } from 'react';
import SettingsLogin from '../../components/section/settings-section/app-sections/settings-login';
import SettingsVideo from '../../components/section/settings-section/app-sections/settings-video';

const AppSettings = ({ logged, userLogout }:{
  logged: boolean,
  userLogout: () => void
}) => {

  const [usePlayer, setUsePlayer] = useState(false);

  return (
    <div id="app-settings">
      <img src={icon} className="settings-fill-image" />
      <SettingsLogin logged={logged} userLogout={userLogout} />
      <SettingsVideo usePlayerState={[usePlayer, setUsePlayer]}/>
    </div>
  );
}

export default AppSettings;  // eeg: javascriptSucks xd