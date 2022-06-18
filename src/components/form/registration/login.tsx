
import { loginUser } from '../../../services/registration/index';
import RegistrationWrapper from "./wrapper-registration";
import RegistrationButton from "../../input/button/registration-button/registration-button";
import RegistrationTextInput from "../../input/text/registration-text-input";

const AppLogin = () => {
  return (
    <RegistrationWrapper callbackSubmit={loginUser}>
      <>
        <RegistrationTextInput placeholder="email" name="email" />
        <RegistrationTextInput placeholder="password" name="password" type="password"/>
        <RegistrationButton name="LOGIN" />
        <a href="/register" className="form-link" > Do you have not an account? </a> 
      </>
    </RegistrationWrapper>
  );
}

export default AppLogin;