
import { registerUser } from '../../../services/database/registration/index';
import RegistrationWrapper from "./wrapper-registration";
import RegistrationButton from "../../input/button/registration-button/registration-button";
import PlaceHolderInput from "../../input/text/placeholder-input/placeholder-input";
import { Navigate, NavLink } from 'react-router-dom';
import React from 'react';

const AppRegister = ({ loginState } : { 
  loginState:[boolean, React.Dispatch<React.SetStateAction<boolean>>] 
}) => {

  const [ logged ] = loginState;

  return (
    !logged
    ? <RegistrationWrapper callbackSubmit={registerUser} loginState={loginState}>
        <PlaceHolderInput placeholder="username" name="username" />
        <PlaceHolderInput placeholder="email" name="email" />
        <PlaceHolderInput placeholder="password" name="password" type="password"/>
        <RegistrationButton name="REGISTER" />
        <NavLink to="/login" className="form-link" > Do you already have an account? </NavLink> 
      </RegistrationWrapper>
    : <Navigate to="/" />
  );
}

export default AppRegister;