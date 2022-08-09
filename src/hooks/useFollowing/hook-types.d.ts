import { AnimeArticle, AnimeFollowingItem } from "../other/general-types";

export interface UseFollowing {
  allFollowing: AnimeFollowingItem[];
  considering: AnimeArticle[];
  watching: AnimeArticle[];
  watched: AnimeArticle[];
  fetchConsidering: () => void;
  fetchWatching: () => void;
  fetchWatched: () => void;
}