
import { registerUser } from '../../../services/registration/index';
import RegistrationWrapper from "./wrapper-registration";
import RegistrationButton from "../../input/button/registration-button/registration-button";
import PlaceHolderInput from "../../input/text/placeholder-input/placeholder-input";

const AppRegister = () => {
  return (
    <RegistrationWrapper callbackSubmit={registerUser}>
      <>
        <PlaceHolderInput placeholder="username" name="username" />
        <PlaceHolderInput placeholder="email" name="email" />
        <PlaceHolderInput placeholder="password" name="password" type="password"/>
        <RegistrationButton name="REGISTER" />
        <a href="/login" className="form-link" > Do you already have an account? </a> 
      </>
    </RegistrationWrapper>
  );
}

export default AppRegister;