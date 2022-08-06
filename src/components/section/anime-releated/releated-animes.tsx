
import './releated-animes.css';
import { AnimeInfo } from '../../../services/api/tioanime/api-types';
import ReleatedItem from "../../container/releated-item/releated-item";
import NoElements from '../no-elements/no-elements';

const RenderReleated = ({ releated }: { releated: AnimeInfo['releated'] }) => (
  <div className="anime-releated-container">{
    releated.map(anime => (
      <ReleatedItem item={anime} />
    ))
  }</div>
);

const ReleatedAnimes = ({ releated }: { releated: AnimeInfo['releated'] }) => {

  return (
    <div className="anime-releated-margin">
      <h5 className="anime-info-title"> Relacionado </h5>
      {
        releated.length
          ? <RenderReleated releated={releated} />
          : <p className="anime-info-text"> No hay animes relacionados</p>
      }
    </div>
  );

}

export default ReleatedAnimes;