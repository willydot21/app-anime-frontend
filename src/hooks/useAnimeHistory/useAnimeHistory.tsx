
import { useEffect, useState } from "react";
import { AnimeData } from "../other/general-types";
import { handleGetRefreshToken } from "../useUserHook/utils";
import { UseAnimeHistory } from "./hook-types";
import { handleAddEpisodeToHistory, handleGetAnimeHistory, handleRemoveEpisodeFromHistory } from "./utils"

export default function useAnimeHistory(animeId: string): UseAnimeHistory {

  const [history, setHistory] = useState<AnimeData>({ id: '', episodes: [] });

  const getAnimeHistory = async () => {

    await handleGetRefreshToken();

    const history = await handleGetAnimeHistory(animeId);

    if (history.data && !history.error) {

      setHistory(history.data[0]);

    }

  }

  const addEpisodeToHistory = (episode: string) => {
    handleAddEpisodeToHistory(animeId, episode);
  }

  const removeEpisodeFromHistory = (episode: string) => {
    handleRemoveEpisodeFromHistory(animeId, episode);
  }

  const isWatched = (episode: number) => {

    if (history) {

      return history.episodes.indexOf(episode) >= 0;

    }

    return false;

  }

  useEffect(() => {

    getAnimeHistory();

  }, []);

  return {
    history,
    getAnimeHistory,
    addEpisodeToHistory,
    removeEpisodeFromHistory,
    isWatched
  }

}