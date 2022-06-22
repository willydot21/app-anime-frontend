
import '../../../container/episode-item/episode-item.css';
import { NavLink } from 'react-router-dom';
import { AnimeEpisodeProps } from "./anime-episode-types";

const handleImageError = (img:HTMLImageElement, alt:string) => {
  img.src=alt;
}

const AnimeEpisode = ({item}:{item:AnimeEpisodeProps}) => {

  const {
    id,
    episode,
    poster,
    name,
    animePoster
  } = item;

  return (
    <NavLink
      to={`anime/${id}/episode/${episode}`}
      className="episode-item"
    >

      <img src={poster} alt={ name + ' image' }
        onError={ 
          (e) => { handleImageError((e.target as HTMLImageElement),animePoster); }
        }
      />

      <span className="episode-item-label"> Episodio {episode} </span>
      <span className="episode-item-title"> {name + ' ' + episode} </span>
      
    </NavLink>
  );

}

export default AnimeEpisode;