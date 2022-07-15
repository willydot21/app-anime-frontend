
import './releated-animes.css';
import { AnimeReleated } from "../../../services/api/tioanime/api-types";
import ReleatedItem from "../../container/releated-item/releated-item";
import NoElements from '../no-elements/no-elements';

const ReleatedAnimes = ({releated, name}:{releated:AnimeReleated[], name:string}) => {

  return (
    <div section-name={name} className="navigation-hidden">
    {
      releated.length 
      ? (
        <div className="anime-releated-container">{
          releated.map(anime => (
            <ReleatedItem item={anime} />
          ))
        }</div>
      ): <NoElements />
    }
    </div>
  );

}

export default ReleatedAnimes;