
import { useEffect, useState } from "react";
import { AnimeArticle, AnimeFollowingItem, SERVER_ERROR, SERVER_RESPONSE, SERVER_SUCCESS } from "../other/general-types";
import { handleGetRefreshToken } from "../useUserHook/utils";
import { UseFollowing } from "./hook-types";
import { fetchFollowing, handleSetFollowingList, setDataIfNotError } from "./utils";

export default function useFollowing(): UseFollowing {

  const [allFollowing, setAllFollowing] = useState<AnimeFollowingItem[]>([]);

  const [considering, setConsidering] = useState<AnimeArticle[]>([]);

  const [watching, setWatching] = useState<AnimeArticle[]>([]);

  const [watched, setWatched] = useState<AnimeArticle[]>([]);

  const [isLoaded, setIsloaded] = useState(false);

  const setupFollowing = async () => {

    await getFollowing();

    await fetchConsidering();

    await fetchWatching();

    await fetchWatched();

    setIsloaded(true);

  }

  const getFollowing = async () => {

    await handleGetRefreshToken();

    const followingData = (await fetchFollowing()) as SERVER_RESPONSE<AnimeFollowingItem[]>;

    setDataIfNotError(followingData, setAllFollowing);

  }

  const fetchConsidering = async () => handleSetFollowingList('considering', setConsidering);

  const fetchWatching = async () => handleSetFollowingList('watching', setWatching);

  const fetchWatched = async () => handleSetFollowingList('watched', setWatched);

  useEffect(() => {

    setupFollowing();

  }, []);

  return {
    isLoaded,
    allFollowing,
    considering,
    watching,
    watched,
    fetchConsidering,
    fetchWatching,
    fetchWatched
  }

}