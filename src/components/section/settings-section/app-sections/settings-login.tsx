
import SettingsSection from "../settings-section";
import { Logged, NotLogged } from "./logged-sections";

const SettingsLogin = ({ logged, userLoginHandlers }: {
  logged: boolean,
  userLoginHandlers: {
    userLogout: () => void
  }
}) => {

  return (
    <SettingsSection name="Ajustes de cuenta">
      {logged && <Logged loginHandlers={userLoginHandlers} />}
      {!logged && <NotLogged />}
    </SettingsSection>
  );
};

export default SettingsLogin;