
import { FollowingItem } from "../useUserHook/hook-types";
import { authUrl, getFetchOptions, getOptions } from "../../services/constants";
import { ArticleItem } from "../../services/api/tioanime/api-types";

export const parseSpanishPlaylist = {
  'Considerando': 'considering',
  'Siguiendo': 'watching',
  'Finalizado': 'watched',
}

export const parseEnglishPlaylist = {
  'considering': 'Considerando',
  'watching': 'Siguiendo',
  'watched': 'Finalizado'
}

export const handleGetFollowingList = async () => {

  const requestFollowing = await fetch(authUrl + '/animeinfo/following', getOptions);

  const followingList = await requestFollowing.json();

  return followingList;

}

export const addAnimeToPlaylist = async (playlist: string, animeArticle: ArticleItem) => {

  playlist = parseSpanishPlaylist[playlist as keyof typeof parseSpanishPlaylist];

  const url = `${authUrl}/animeinfo/user-playlist/${playlist}/add`;

  await fetch(url, getFetchOptions(JSON.stringify(animeArticle), 'POST'));

}

export const removeAnimeFromPlaylist = async (playlist: string, animeId: string) => {

  playlist = parseSpanishPlaylist[playlist as keyof typeof parseSpanishPlaylist];

  const url = `${authUrl}/animeinfo/user-playlist/${playlist}/remove`;

  await fetch(url, getFetchOptions(JSON.stringify({ id: animeId }), 'DELETE'));

}