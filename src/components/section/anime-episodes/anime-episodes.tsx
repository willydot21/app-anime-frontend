
import './anime-episodes.css';
import { useEffect, useState } from 'react';
import AnimeEpisode from "./anime-episode/anime-episode";
import { AnimeEpisodesProps } from "./anime-episodes-types";
import { handlerSetServerEpisode } from './anime-episodes.utils';
import EpisodeOptionsModal from '../anime-episode-links/episode-servers';
import { useNavigate } from 'react-router-dom';
import NoElements from '../no-elements/no-elements';

const AnimeEpisodes = ({ item }: { item: AnimeEpisodesProps }) => {

  const [serverEpisode, setServerEpisode] = useState({ id: '', episode: 0 });

  const [selectedServer, setSelectedServer] = useState({ src: '', server: '', episode: 0 });

  const navigation = useNavigate();

  const episodeRange = item.episodes
    ? [...Array(item.episodes).keys()]
    : [];

  useEffect(() => {

    if (selectedServer.src.length) {

      navigation(`/anime/${item.id}/episode/${selectedServer.episode}`, { state: { ...selectedServer, name: item.name } });

    }

  }, [selectedServer]);

  return (
    <div section-name="Episodios" className="navigation-hidden" >

      <div className="anime-episodes">{
        item.episodes
          ? episodeRange.map((episode) => (<AnimeEpisode item={{ ...item, episode: episode + 1 }} handlerSetServerEpisode={(episode: number) => handlerSetServerEpisode({ id: item.id, episode }, [serverEpisode, setServerEpisode])} />)).reverse()
          : <NoElements />
      }</div>

      <EpisodeOptionsModal serverEpisode={serverEpisode} setSelectedServer={setSelectedServer} />

    </div>
  );

}

export default AnimeEpisodes;