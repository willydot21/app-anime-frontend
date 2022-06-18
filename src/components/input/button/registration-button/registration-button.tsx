
import './style.css';
import { RegistrationButtonProps } from './registration-button-types';

const RegistrationButton = ({type, name}: RegistrationButtonProps) => {
  return (
    <input 
      type={type || 'submit'} 
      className="registration-button"
      value={name}
    />
  );
}

export default RegistrationButton;