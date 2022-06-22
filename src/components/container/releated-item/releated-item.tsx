
import './releated-item.css';
import { NavLink } from "react-router-dom";
import { AnimeReleated } from "../../../services/api/api-types";

const ReleatedItem = ({item}:{item:AnimeReleated}) => {

  return (
    <NavLink className="releated-item" to={`/anime/${item.id}`} >

      <div className="releated-item-left">
        <img src={item.image} />
        <span className="releated-item-type">
          {item.type}
        </span>
      </div>

      <div className="releated-item-right">
        <h5 className="releated-item-title"> {item.name} </h5>
        <span className="releated-item-year"> {item.name} </span>
      </div>

    </NavLink>
  );

}

export default ReleatedItem;