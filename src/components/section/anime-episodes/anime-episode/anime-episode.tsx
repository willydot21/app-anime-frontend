
import './anime-episode.css'
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
      className="anime-episode"
    >

      <div className="anime-episode-right"> 
        <img src={poster} alt={ name + ' image' }
          onError={ 
            (e) => { handleImageError((e.target as HTMLImageElement),animePoster); }
          }
        />
        <span className="anime-episode-chapter"> Episodio {episode} </span>
      </div>

      <span className="material-icons"> more_vert </span>
      
    </NavLink>
  );

}

export default AnimeEpisode;