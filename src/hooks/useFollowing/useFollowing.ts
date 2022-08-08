
import { useEffect, useState } from "react";
import { AnimeArticle, AnimeFollowingItem, SERVER_ERROR } from "../other/general-types";
import { FollowingItem } from "../useUserHook/hook-types";
import { handleGetRefreshToken } from "../useUserHook/utils";
import { UseFollowing } from "./hook-types";
import { fetchAnimeFollowing, fetchFollowingList } from "./utils";

export default function useFollowing(): UseFollowing {

  const [following, setFollowing] = useState<AnimeFollowingItem[]>([]);

  const [considering, setConsidering] = useState<AnimeArticle[]>([]);

  const [watching, setWatching] = useState<AnimeArticle[]>([]);

  const [watched, setWatched] = useState<AnimeArticle[]>([]);

  const setupFollowingList = () => {

    fetchFollowing();

  }

  const fetchFollowing = async () => {

    await handleGetRefreshToken();

    const followingData = (await fetchFollowingList()) as SERVER_ERROR | AnimeFollowingItem[];

    console.log(followingData);

    if (!(followingData as SERVER_ERROR).error) setFollowing(followingData as FollowingItem[]);

  }

  useEffect(setupFollowingList, []);

  return {
    following,
    considering,
    watching,
    watched
  }

}