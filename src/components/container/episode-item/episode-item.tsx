
import './episode-item.css';
import {EpisodeItemProps} from './episode-item-types';
import { NavLink } from 'react-router-dom';

const EpisodeItem = ({item}:EpisodeItemProps) => {

  const { id, name, poster } = item;

  const episode = id.split('-').at(-1);

  const animeId = id.split('-').slice(0, id.split('-').length-1).join('-');

  const animeName = name.split(' ').slice(0, name.split(' ').length-1).join(' ');
  
  return (
    <NavLink 
      to={`anime/${animeId}/episode/${episode}`} 
      className="episode-item"
    >
      <img src={poster} alt="" /> 
      <span className="episode-item-label"> Episodio {episode} </span>
      <span className="episode-item-title"> {animeName} </span>
    </NavLink>
  )

}

export default EpisodeItem;