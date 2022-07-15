
import './style.css';
import { useLocation } from "react-router-dom";
import AppNotFound from "../404";
import { PlayerLocationState } from "./episode-player-types";
import { useEffect, useState } from 'react';
import { getVideoSources } from './episode-player.utils';
import { _FEMBED_DATA_SOURCES_ } from '../../services/api/XtractorJs/api-types';
import VideoPlayer from '../../components/media/video-player/video-player';

const EpisodePlayer = () => {

  const [ hasSources, setHasSources ] = useState(false);

  const [ sources, setSources ] = useState<_FEMBED_DATA_SOURCES_>([]);

  const location = useLocation().state as PlayerLocationState;

  if (location) {

    const { src, server, name, episode } = location;

    useEffect(() => {

      getVideoSources(src, server, setSources);

    }, []);

    return (
      server === 'fembed'
      ? <VideoPlayer sources={sources} />
      : <div className="episode-player">
          <iframe src={src} className="episode-player-iframe"></iframe>
          <p className="episode-player-title"> {name} {episode} </p>
        </div>
    );

  }

  return <AppNotFound />

}

export default EpisodePlayer;