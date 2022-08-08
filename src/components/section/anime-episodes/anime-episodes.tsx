
import './anime-episodes.css';
import { v4 as uuid } from 'uuid';
import { useEffect, useState } from 'react';
import AnimeEpisode from "./anime-episode/anime-episode";
import { AnimeEpisodesProps } from "./anime-episodes-types";
import { handlerSetServerEpisode } from './anime-episodes.utils';
import EpisodeOptionsModal from '../anime-episode-links/episode-servers';
import { useNavigate } from 'react-router-dom';
import NoElements from '../no-elements/no-elements';
import AnimeEpisodeWrapper from './anime-episodes-wrapper/anime-episodes-wrapper';

const AnimeEpisodes = ({ item }: { item: AnimeEpisodesProps }) => {

  const [serverEpisode, setServerEpisode] = useState({ id: '', episode: 0 });

  const [selectedServer, setSelectedServer] = useState({ src: '', server: '', episode: 0 });

  const navigation = useNavigate();

  useEffect(() => {

    if (selectedServer.src.length) {

      navigation(`/anime/${item.id}/episode/${selectedServer.episode}`, { state: { ...selectedServer, name: item.name } });

    }

  }, [selectedServer]);

  return (
    <div section-name="Episodios" className="navigation-hidden" >

      <AnimeEpisodeWrapper item={item} serverEpisodeState={[serverEpisode, setServerEpisode]} />

      <EpisodeOptionsModal serverEpisode={serverEpisode} setSelectedServer={setSelectedServer} />

    </div>
  );

}

export default AnimeEpisodes;