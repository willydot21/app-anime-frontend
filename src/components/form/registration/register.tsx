
import { registerUser } from '../../../services/registration/index';
import RegistrationWrapper from "./wrapper-registration";
import RegistrationButton from "../../input/button/registration-button/registration-button";
import RegistrationTextInput from "../../input/text/registration-text-input";

const AppRegister = () => {
  return (
    <RegistrationWrapper callbackSubmit={registerUser}>
      <>
        <RegistrationTextInput placeholder="username" name="username" />
        <RegistrationTextInput placeholder="email" name="email" />
        <RegistrationTextInput placeholder="password" name="password" type="password"/>
        <RegistrationButton name="REGISTER" />
        <a href="/login" className="form-link" > Do you already have an account? </a> 
      </>
    </RegistrationWrapper>
  );
}

export default AppRegister;