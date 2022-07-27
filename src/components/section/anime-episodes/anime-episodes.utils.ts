
import { fixBodyOverflow } from "../../../app.utils";

export const handlerSetServerEpisode = (
  { episode, id }:{ episode:number, id:string }, 
  serverEpisodeState:[{ id:string, episode:number }, React.Dispatch<React.SetStateAction<{ id:string, episode:number }>>]
) => {

  fixBodyOverflow();

  const [ prevServerEpisode, setServerEpisode ] = serverEpisodeState;

  const $nextState = {id, episode};

  if (prevServerEpisode.episode !== episode) setServerEpisode($nextState);
      
}