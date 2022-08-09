import { AnimeArticle, AnimeFollowingItem } from "../other/general-types";

export interface UseFollowing {
  isLoaded: boolean;
  allFollowing: AnimeFollowingItem[];
  considering: AnimeArticle[];
  watching: AnimeArticle[];
  watched: AnimeArticle[];
  fetchConsidering: () => void;
  fetchWatching: () => void;
  fetchWatched: () => void;
}