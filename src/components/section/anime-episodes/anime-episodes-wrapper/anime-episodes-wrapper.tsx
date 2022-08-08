
import { handlerSetServerEpisode } from "../anime-episodes.utils";
import AnimeEpisode from "../anime-episode/anime-episode";
import NoElements from "../../no-elements/no-elements";
import { AnimeEpisodesProps, ServerEpisodeState } from "../anime-episodes-types";
import useAnimeHistory from "../../../../hooks/useAnimeHistory/useAnimeHistory";
import { useEffect } from "react";

const AnimeEpisodeWrapper = ({ item, serverEpisodeState }: {
  item: AnimeEpisodesProps,
  serverEpisodeState: ServerEpisodeState
}) => {

  const animeHistory = useAnimeHistory(item.id);

  const [serverEpisode, setServerEpisode] = serverEpisodeState;

  const episodeRange = item.episodes
    ? [...Array(item.episodes).keys()]
    : [];

  return (
    <div className="anime-episodes">{
      item.episodes
        ? episodeRange.map((episode) => (
          <AnimeEpisode
            animeEpisodeActions={{
              addEpisodeToHistory: animeHistory.addEpisodeToHistory,
              removeEpisodeFromHistory: animeHistory.removeEpisodeFromHistory
            }}
            isWatched={animeHistory.isWatched(episode + 1)}
            item={{ ...item, episode: episode + 1 }}
            handlerSetServerEpisode={(episode: number) => handlerSetServerEpisode({ id: item.id, episode }, [serverEpisode, setServerEpisode])}
          />
        )).reverse()
        : <NoElements />
    }</div>
  )

}

export default AnimeEpisodeWrapper;