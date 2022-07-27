
import SettingsSection from "../settings-section";
import { Logged, NotLogged } from "./logged-sections";

const SettingsLogin = ({ logged, userLogout }:{ 
  logged: boolean,
  userLogout: () => void
}) => {

  return (
    <SettingsSection name="Ajustes de cuenta">
      {logged && <Logged userLogout={userLogout}/>}
      {!logged && <NotLogged/>}
    </SettingsSection>
  );
};

export default SettingsLogin;