
import './style.css';
import { useLocation } from "react-router-dom";
import { PlayerLocationState } from "./episode-player-types";
import AppBackTopbar from '../../components/navbar/back-topbar/back-topbar';

import AppNotFound from '../404';

const EpisodePlayer = () => {
  const location = useLocation().state as PlayerLocationState;
  return (
    location
      ? <div className="episode-player">
        <AppBackTopbar section_name={location.name + ' - ' + location.episode} />
        <iframe src={location.src} className="episode-player-iframe" />
      </div>
      : <AppNotFound error="Error; no se seleccionó, el servidor." />
  )
}

export default EpisodePlayer;