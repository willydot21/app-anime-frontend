
import { NavLink } from 'react-router-dom';
import { LatestItemProps } from './latest-item-types';
import './latest-item.css';

const LatestItem = ({latestItem}:LatestItemProps) => {

  const href = latestItem.id? `anime/${latestItem.id}`: '#';
  
  return (
    <div className="latest-item">
      <NavLink to={href}>
        <img src={latestItem.poster} alt="" />
      </NavLink>
      <div className="latest-item-info">
        <p className="latest-item-title"> { latestItem.name } </p>
        <p className="latest-item-description"> {latestItem.description} </p>
        <ul className="latest-item-genres">
          {
            latestItem.genres.map( genre => (
              <li>{ genre }</li>
            ))
          }
        </ul> 
      </div>
    </div>
  );

}

export default LatestItem;