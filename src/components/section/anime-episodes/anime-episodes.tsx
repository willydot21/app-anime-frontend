
import AnimeEpisode from "./anime-episode/anime-episode";
import { AnimeEpisodesProps } from "./anime-episodes-types";

const AnimeEpisodes = ({item}:{item:AnimeEpisodesProps}) => {

  const episodeRange = [...Array(item.episodes).keys()];

  return (
    <div className="anime-episodes">
      {
        episodeRange.map((episode) => (
          <AnimeEpisode
            item={{ ...item, episode: episode + 1 }}
          />
        ))
      }
    </div>
  );
  
}

export default AnimeEpisodes;