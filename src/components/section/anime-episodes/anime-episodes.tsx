
import './anime-episodes.css';
import AnimeEpisode from "./anime-episode/anime-episode";
import { AnimeEpisodesProps } from "./anime-episodes-types";

const AnimeEpisodes = ({item, name}:{item:AnimeEpisodesProps, name:string}) => {

  const episodeRange = [...Array(item.episodes).keys()];

  return (
    <div section-name={name} className="navigation-hidden" >
      <div className="anime-episodes">
        {
          episodeRange.map((episode) => (
            <AnimeEpisode
              item={{ ...item, episode: episode + 1 }}
            />
          ))
        }
      </div>
    </div>
  );
  
}

export default AnimeEpisodes;