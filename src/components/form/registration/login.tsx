
import { loginUser } from '../../../services/registration/index';
import RegistrationWrapper from "./wrapper-registration";
import RegistrationButton from "../../input/button/registration-button/registration-button";
import PlaceHolderInput from "../../input/text/placeholder-input/placeholder-input";

const AppLogin = () => {
  return (
    <RegistrationWrapper callbackSubmit={loginUser}>
      <>
        <PlaceHolderInput placeholder="email" name="email" />
        <PlaceHolderInput placeholder="password" name="password" type="password"/>
        <RegistrationButton name="LOGIN" />
        <a href="/register" className="form-link" > Do you have not an account? </a> 
      </>
    </RegistrationWrapper>
  );
}

export default AppLogin;