
import './style.css';
import { useLocation } from "react-router-dom";
import { PlayerLocationState } from "./episode-player-types";
import { _FEMBED_DATA_SOURCES_ } from '../../services/api/XtractorJs/api-types';
import AppNotFound from '../404';

const EpisodePlayer = () => {

  const location = useLocation().state as PlayerLocationState;

  if (location) {

    const { src } = location;

    return (
      <div className="episode-player">
        <iframe src={src} className="episode-player-iframe" />
      </div>
    );

  }

  return <AppNotFound error="Error; no se seleccionó, el servidor." />;

}

export default EpisodePlayer;