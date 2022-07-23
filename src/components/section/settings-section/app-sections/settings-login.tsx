
import React from "react";
import SettingsSection from "../settings-section";
import { Logged, NotLogged } from "./logged-sections";

const SettingsLogin = ({ loginState }:{ 
  loginState:[boolean, React.Dispatch<React.SetStateAction<boolean>>] 
}) => {

  const [logged, setLogged] = loginState;

  return (
    <SettingsSection name="Ajustes de cuenta">
      {logged && <Logged setLogged={setLogged}/>}
      {!logged && <NotLogged/>}
    </SettingsSection>
  );
};

export default SettingsLogin;