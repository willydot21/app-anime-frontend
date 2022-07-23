
import { loginUser } from '../../../services/database/registration/index';
import RegistrationWrapper from "./wrapper-registration";
import RegistrationButton from "../../input/button/registration-button/registration-button";
import PlaceHolderInput from "../../input/text/placeholder-input/placeholder-input";
import { Navigate, NavLink } from 'react-router-dom';

const AppLogin = ({ loginState }:{
  loginState:[boolean, React.Dispatch<React.SetStateAction<boolean>>]
}) => {

  const [ logged ] = loginState;

  return (
    !logged
    ? <RegistrationWrapper callbackSubmit={loginUser} loginState={loginState}>
        <PlaceHolderInput placeholder="email" name="email" />
        <PlaceHolderInput placeholder="password" name="password" type="password" />
        <RegistrationButton name="LOGIN" />
        <NavLink to="/register" className="form-link" > Do you have not an account? </NavLink>
      </RegistrationWrapper>
    : <Navigate to="/" />
  );
}

export default AppLogin;