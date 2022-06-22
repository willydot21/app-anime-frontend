
import './releated-animes.css';
import { AnimeReleated } from "../../../services/api/api-types";
import ReleatedItem from "../../container/releated-item/releated-item";

const ReleatedAnimes = ({releated}:{releated:AnimeReleated[]}) => {

  return (
    releated.length
    ? (
      <div className="anime-releated-container">
        {
          releated.map( anime => (
            <ReleatedItem item={anime} />
          ))
        }
      </div>
    ) 
    : <></>
  );

}

export default ReleatedAnimes;