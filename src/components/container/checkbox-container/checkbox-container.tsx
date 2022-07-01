
import './style.css';
import AppCheckbox from '../../input/checkbox/checkbox';

const CheckboxContainer = ({ elements, _ref, checkboxName }:{ 
  elements:{[elemName:string]:string}, 
  _ref: React.RefObject<HTMLDivElement>,
  checkboxName?: string
}) => {

  const elementKeys = Object.keys(elements);

  return (
    <div className="checkbox-container" ref={_ref} data-checkbox-name={checkboxName}>
      {
        elementKeys.map(elem => (
          <AppCheckbox
            option={elem}
            value={elements[elem as keyof typeof elements]}
          />
        ))
      }
    </div>
  );

}

export default CheckboxContainer;