
import './releated-item.css';
import { NavLink } from "react-router-dom";
import { AnimeReleated } from "../../../services/api/tioanime/api-types";

const ReleatedItem = ({item}:{item:AnimeReleated}) => {

  return (
    <NavLink className="releated-item" to={`/anime/${item.id}`}>

      <div className="releated-item-left">
        <img src={item.image} />
      </div>

      <h5 className="releated-item-title"> {item.name} </h5>
      <div className="releated-item-tags">{
        [item.year, item.type].map( tag => (
          tag && <span className="releated-item-tag"> {tag} </span>
        ))
      }</div>

    </NavLink>
  );

}

export default ReleatedItem;