
import './style.css';
import { PlaceHolderInputProps } from './placeholder-input-types.d.ts';

const PlaceHolderInput = ({placeholder, name, type, _ref}: PlaceHolderInputProps) => {

  return (
    <div className="placeholder-text-input">
      <input 
        name={name || ''}
        type={type || 'text'}
        autoComplete='off'
        required
        ref={_ref}
      />
      <span>
        {placeholder}
      </span>
    </div>
  );

}

export default PlaceHolderInput;