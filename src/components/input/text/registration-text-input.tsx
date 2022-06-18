
import './style.css';
import { RegistrationTextInputProps } from './registration-text-input-types';

const RegistrationTextInput = ({placeholder, name, type}: RegistrationTextInputProps) => {

  return (
    <div className="registration-text-input">
      <input 
        name={name || ''}
        type={type || 'text'}
        autoComplete='on'
        required
      />
      <span>
        {placeholder}
      </span>
    </div>
  );

}

export default RegistrationTextInput;