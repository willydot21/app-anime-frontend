
import './anime-episodes.css';
import { useState } from 'react';
import AnimeEpisode from "./anime-episode/anime-episode";
import { AnimeEpisodesProps } from "./anime-episodes-types";
import { handlerSetServerEpisode } from './anime-episodes.utils';
import EpisodeOptionsModal from '../anime-episode-links/anime-episode-options/episode-options';

const AnimeEpisodes = ({item, name}:{item:AnimeEpisodesProps, name:string}) => {

  const [ serverEpisode, setServerEpisode ] = useState({id:'',episode:0});

  const [ selectedServer, setSelectedServer ] = useState('');

  const episodeRange = [...Array(item.episodes).keys()];

  return (
    <div section-name={name} className="navigation-hidden" >
      <div className="anime-episodes">
        {
          episodeRange.map((episode) => (
            <AnimeEpisode
              item={{ ...item, episode: episode + 1 }}
              handlerSetServerEpisode={(episode:number) => handlerSetServerEpisode({id:item.id, episode}, [serverEpisode, setServerEpisode])}
            />
          )).reverse()
        }
      </div>

      <EpisodeOptionsModal serverEpisode={serverEpisode} setSelectedServer={setSelectedServer} />

    </div>
  );
  
}

export default AnimeEpisodes;