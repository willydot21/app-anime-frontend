
import './latest-section.css';
import { LatestSectionProps } from "./latest-section-types";
import LatestItem from "../latest-item/latest-item";
import { NavLink } from 'react-router-dom';

const LatestSection = ({latestItems, section_name, value}:LatestSectionProps) => {
  
  const title = (
    section_name === 'Películas'
    ? 'Últimas ' + section_name
    : 'Últimos ' + section_name
  )


  return (
    <div className="latest-section">
      <h5 className="latest-section-title"> {title} </h5>
      <div className="latest-section-items">
        {
          latestItems.map(item => (
            <LatestItem latestItem={item} />
          ))
        }
      </div>
      <NavLink 
        className="latest-section-link"
        to={`directory?years=1950&years=2022&status=finished&sort=recent${value?`&types=${value}`:'' }`} 
      >
        {`Más ${section_name}`}
      </NavLink>
    </div>
  );

}

export default LatestSection;