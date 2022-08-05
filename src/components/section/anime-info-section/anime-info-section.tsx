
import './anime-info-section.css';
import { AnimeInfo } from "../../../services/api/tioanime/api-types";
import AnimeInfoBanner from './anime-info-items/banner/anime-info-banner';
import AnimeInfoRight from './anime-info-items/anime-info-right/anime-info-right';

const AnimeInfoSection = ({ item }: { item: AnimeInfo }) => {

  return (
    <div className="anime-info">

      <AnimeInfoBanner
        banner={item.banner}
        poster={item.poster}
        animeid={item.anime_id} />

      <div className="anime-info-container">
        <img src={item.poster} alt='' />
        <AnimeInfoRight item={item} />
      </div>

    </div>
  );

}

export default AnimeInfoSection;