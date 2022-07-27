
import './anime-episode.css';
import { useState } from 'react';
import { AnimeEpisodeProps } from "./anime-episode-types";

const handleImageError = (img:HTMLImageElement, alt:string) => {
  img.src=alt;
}

const AnimeEpisode = ({ item, handlerSetServerEpisode }:{ 
  item:AnimeEpisodeProps, 
  handlerSetServerEpisode:(episode:number) => void }
) => {

  const [ watched, setWatched ] = useState(false);

  const $className = `anime-episode ${watched?'watched':''}`

  const { episode, poster, name, animePoster } = item;

  return (
    <div className={$className}>

      <div className="anime-episode-left" onClick={() => setWatched(!watched)}> 
        <img src={poster} alt={ name + ' image' }
          onError={ (e) => { handleImageError((e.target as HTMLImageElement),animePoster); } }
        />
        <span className="anime-episode-chapter"> Episodio {episode} </span>
        <button className="material-icons play" data-bs-target="#episode-servers-modal" data-bs-toggle="modal" onClick={() => handlerSetServerEpisode(episode)}>play_arrow</button>
      </div>

      <button className="material-icons watch-icon episode-btn" onClick={() => setWatched(!watched)}>
        {watched? 'visibility':'visibility_off' }
      </button>
      
    </div>
  );

}

export default AnimeEpisode;