
import { HandleServerEpisodeProps } from "./anime-episodes-types";

export const handlerSetServerEpisode = (
  { episode, id }: { episode: number, id: string },
  serverEpisodeState: [{ id: string, episode: number }, React.Dispatch<React.SetStateAction<{ id: string, episode: number }>>]
) => {

  const [prevServerEpisode, setServerEpisode] = serverEpisodeState;

  const $nextState = { id, episode };

  if (prevServerEpisode.episode !== episode) setServerEpisode($nextState);

}

export const handleServerEpisode = ({ watched, setWatched, episode, animeEpisodeActions }: HandleServerEpisodeProps) => {

  if (watched) {

    animeEpisodeActions.removeEpisodeFromHistory(episode);

  } else {

    animeEpisodeActions.addEpisodeToHistory(episode);

  }

  setWatched(!watched);

}