import { AnimeArticle, AnimeFollowingItem } from "../other/general-types";

export interface UseFollowing {
  following: AnimeFollowingItem[];
  considering: AnimeArticle[];
  watching: AnimeArticle[];
  watched: AnimeArticle[];
}