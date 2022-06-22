
import './anime-scroll-episodes.css';
import EpisodeItem from "../../container/episode-item/episode-item";
import HorizontalScroll from "../../container/horizontal-scroll/horizontal-scroll"
import SectionTopbar from "../../navbar/section-topbar/section-topbar";
import AnimeScrollEpisodesProps from "./anime-scroll-episodes-types";

const AnimeScrollEpisodes = ({items}:AnimeScrollEpisodesProps) => {

  return (
    <div className="anime-scroll-episodes">
      <SectionTopbar section="Últimos Episodios" />
      <HorizontalScroll>
        {
          items.map(item => (
            <EpisodeItem item={item} />
          ))
        }
      </HorizontalScroll>
    </div>
  );

}

export default AnimeScrollEpisodes;