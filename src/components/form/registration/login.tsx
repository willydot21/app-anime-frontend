
import { loginUser } from '../../../services/database/registration/index';
import RegistrationWrapper from "./wrapper-registration";
import RegistrationButton from "../../input/button/registration-button/registration-button";
import PlaceHolderInput from "../../input/text/placeholder-input/placeholder-input";
import { Navigate, NavLink } from 'react-router-dom';
import { SubmitRegistrationEvent } from './registration-form-types';

const AppLogin = ({ logged, login }:{
  logged:boolean,
  login:SubmitRegistrationEvent
}) => {
  return (
    ! logged
    ? <RegistrationWrapper callbackSubmit={login}>
        <PlaceHolderInput placeholder="email" name="email" />
        <PlaceHolderInput placeholder="password" name="password" type="password" />
        <RegistrationButton name="LOGIN" />
        <NavLink to="/register" className="form-link" > Do you have not an account? </NavLink>
      </RegistrationWrapper>
    : <Navigate to="/" />
  );
}

export default AppLogin;