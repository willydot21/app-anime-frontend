
import './style.css';
import { PlaceHolderInputProps } from './placeholder-input-types.d.ts';

const PlaceHolderInput = ({placeholder, name, type}: PlaceHolderInputProps) => {

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

export default PlaceHolderInput;