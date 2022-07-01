
import './style.css';
import { checkboxClick } from './checkbox.utils';

const AppCheckbox = ({ option, value }:{ option:string, value:string }) => {
  return (
    <div className="app-checkbox-container" onClick={checkboxClick}>
      <input className="app-checkbox" type="checkbox" value={value} />
      <label className="app-checkbox-label"> { option } </label>
    </div>
  )
}

export default AppCheckbox;