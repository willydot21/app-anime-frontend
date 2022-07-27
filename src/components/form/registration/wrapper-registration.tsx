
import './style.css';
import { RegistrationProps } from "./registration-form-types";

const RegistrationWrapper = ({children, callbackSubmit}: RegistrationProps) => {
  return(
    <form onSubmit={ callbackSubmit } className="registration-wrapper">
      <img src="https://i.pinimg.com/originals/e0/35/f1/e035f1b9fd4042457f76e18c40799069.png" alt="" />
      {children || ''}
    </form>
  );
}

export default RegistrationWrapper;