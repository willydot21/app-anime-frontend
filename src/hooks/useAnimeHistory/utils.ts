
import { authUrl, getFetchOptions, getOptions } from "../../services/constants";
import { SERVER_RESPONSE } from "../other/general-types";
import { handleGetRefreshToken } from "../useUserHook/utils";

const historyUrl = authUrl + '/animeinfo/user-history/';

const getFetchHistoryBody = (animeid: string, episode: string) => JSON.stringify({ animeid, episode });

export async function handleGetAnimeHistory(id: string) {

  const url = historyUrl + id;

  const requestHistory = await fetch(url, getOptions);

  const responseJson = await requestHistory.json();

  return responseJson;

}

export async function handleAddEpisodeToHistory(id: string, episode: string) {

  await handleGetRefreshToken();

  const url = historyUrl + 'episodes/add';

  const body = getFetchHistoryBody(id, episode);

  const req = await fetch(url, getFetchOptions(body, 'POST'));

  const jsonResponse = await req.json();

  return jsonResponse as SERVER_RESPONSE<string>;

}

export async function handleRemoveEpisodeFromHistory(id: string, episode: string) {

  await handleGetRefreshToken();

  const url = historyUrl + 'episodes/remove';

  const body = getFetchHistoryBody(id, episode);

  const req = await fetch(url, getFetchOptions(body, 'DELETE'));

  const jsonResponse = await req.json();

  return jsonResponse as SERVER_RESPONSE<string>;

}