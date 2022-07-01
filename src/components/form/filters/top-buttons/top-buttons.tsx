
import './style.css';
import DefaultButton from "../../../input/button/default/default-button"

const TopButtons = ({ click }:{ click:Function }) => (
  <div className="filters-top-buttons">

    <DefaultButton 
      styles={{ backgroundColor:'rgb(15, 15, 15)', color:'rgb(255, 170, 80)' }} 
      name="RESET" 
      click={ () => click('clear') }
    />

    <DefaultButton
      styles={{ backgroundColor:'rgb(255, 170, 80)', color:'rgb(15, 15, 15)' }} 
      name="APLICAR" 
      click={ () => click('set-form-filters') }
    />

  </div>
);

export default TopButtons;