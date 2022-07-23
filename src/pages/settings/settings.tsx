
import './style.css';
import icon from './media/icon.jpg';
import React, { useState } from 'react';
import SettingsLogin from '../../components/section/settings-section/app-sections/settings-login';
import SettingsVideo from '../../components/section/settings-section/app-sections/settings-video';

const AppSettings = ({ appLoginState }:{
  appLoginState: [ boolean, React.Dispatch<React.SetStateAction<boolean>> ]
}) => {

  const [logged, setLogged] = appLoginState;

  const [usePlayer, setUsePlayer] = useState(false);

  return (
    <div id="app-settings">
      <img src={icon} className="settings-fill-image" />
      <SettingsLogin loginState={[logged, setLogged]} />
      <SettingsVideo usePlayerState={[usePlayer, setUsePlayer]}/>
    </div>
  );
}

export default AppSettings;  // eeg: javascriptSucks xd