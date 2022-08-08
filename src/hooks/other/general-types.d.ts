
export interface SERVER_ERROR {
  error: boolean;
  data: string;
}

export interface SERVER_SUCCESS {
  success: true;
  data: any
}

export type SERVER_RESPONSE = SERVER_SUCCESS | SERVER_ERROR;

export interface AnimeArticle {
  name: string;
  id: string;
  poster: string;
}

export interface AnimeData {
  id: string;
  episodes: number[];
}

export interface AnimeFollowingItem {
  id: string;
  playlist: string[];
}

export interface UserAnimeInfo {
  following: AnimeFollowingItem[]
  watched: AnimeArticle[];
  watching: AnimeArticle[];
  considering: AnimeArticle[];
  animeHistory: AnimeData[];
}

export interface User {
  username: string;
  email: string;
  password: string;
  userAnimeInfo: UserAnimeInfo;
}