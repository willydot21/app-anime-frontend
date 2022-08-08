
import { AnimeFollowingItem } from "../other/general-types";
import { authUrl } from "../../services/constants";
import { getOptions } from "../../services/constants";

export const fetchAnimeFollowing = async (id: string) => {

  const animeFollowingUrl = authUrl + '/animeinfo/following/' + id;

  const req = await fetch(animeFollowingUrl, getOptions);

  const jsonResponse = await req.json();

  if (jsonResponse.data !== 'Anime is not in following') return jsonResponse.data as AnimeFollowingItem;

  return null;

}

export const fetchFollowingList = async () => {

  const requestFollowing = await fetch(authUrl + '/animeinfo/following', getOptions);

  const followingList = await requestFollowing.json();

  return followingList;

}