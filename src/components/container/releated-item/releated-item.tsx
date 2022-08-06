
import './releated-item.css';
import { NavLink } from "react-router-dom";
import { AnimeReleated } from "../../../services/api/tioanime/api-types";

const ReleatedItem = ({ item }: { item: AnimeReleated }) => {

  return (
    <div className="releated-item">

      <NavLink className="releated-item-left" to={`/anime/${item.id}`}>
        <img src={item.image} />
      </NavLink>

      <div className="releated-item-right">
        <h5 className="releated-item-title"> {item.name} </h5>
        <div className="releated-item-tags">{
          [item.year, item.type].map(tag => (
            tag && <span className="releated-item-tag"> {tag} </span>
          ))
        }</div>
      </div>

    </div>
  );

}

export default ReleatedItem;