
import './anime-episodes.css';
import HorizontalScroll from "../../container/horizontal-scroll/horizontal-scroll"
import AnimeInfoScrollItem from "./anime-episode/anime-episode";
import { AnimeEpisodesProps } from "./anime-episodes-types";

const AnimeEpisodes = ({item}:{item:AnimeEpisodesProps}) => {

  const episodeRange = [...Array(item.episodes).keys()];

  return (
    <div className="anime-episodes">
      <div className='small-margin'>
        <h3 className="anime-episodes-title"> Episodios </h3>
        <HorizontalScroll>
          {
            episodeRange.map( (episode) => (
              <AnimeInfoScrollItem 
                item={ {...item, episode:episode+1} }
              />
            ))
          }
        </HorizontalScroll>
      </div>
    </div>
  );
  
}

export default AnimeEpisodes;