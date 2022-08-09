
import { AnimeFollowingItem, SERVER_RESPONSE, SERVER_SUCCESS, SERVER_ERROR } from "../other/general-types";
import { authUrl } from "../../services/constants";
import { getOptions } from "../../services/constants";
import { handleGetRefreshToken } from "../useUserHook/utils";

export const fetchAnimeFollowing = async (id: string) => {

  const animeFollowingUrl = authUrl + '/animeinfo/following/' + id;

  const req = await fetch(animeFollowingUrl, getOptions);

  const jsonResponse = await req.json();

  if (jsonResponse.data !== 'Anime is not in following') return jsonResponse.data as AnimeFollowingItem;

  return null;

}

export const fetchFollowingPlaylist = async (playlist: string) => {

  const url = authUrl + '/animeinfo/user-playlist/' + playlist;

  const requestFollowingPlaylist = await fetch(url, getOptions);

  const jsonResponse = await requestFollowingPlaylist.json();

  return jsonResponse;

}

export const fetchFollowing = async () => {

  const url = authUrl + '/animeinfo/following';

  const requestFollowing = await fetch(url, getOptions);

  const jsonResponse = await requestFollowing.json();

  return jsonResponse;

}

export const setDataIfNotError = async <T>(
  response: SERVER_RESPONSE<T>,
  setData: React.Dispatch<React.SetStateAction<T>>
) => {
  if (!(response as SERVER_ERROR).error)
    setData((response as SERVER_SUCCESS<T>).data);
}

export const handleSetFollowingList = async <T>(
  playlist: string,
  setData: React.Dispatch<React.SetStateAction<T>>
) => {

  await handleGetRefreshToken();

  const response = (await fetchFollowingPlaylist(playlist)) as SERVER_RESPONSE<T>;

  setDataIfNotError(response, setData);

}