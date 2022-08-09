import { AnimeArticle, AnimeFollowingItem } from "../../../hooks/other/general-types";

export const animeFollowingToAnimeArticle = (anime: AnimeFollowingItem | AnimeArticle): AnimeArticle => ({
  name: anime.name,
  id: anime.id,
  poster: anime.poster
});