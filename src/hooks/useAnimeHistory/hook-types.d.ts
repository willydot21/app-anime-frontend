
import { AnimeData, SERVER_RESPONSE } from "../other/general-types";

export interface UseAnimeHistory {
  history: AnimeData;
  getAnimeHistory: () => void;
  addEpisodeToHistory: (episode: string) => void;
  removeEpisodeFromHistory: (episode: string) => void;
  isWatched: (episode: number) => boolean;
}